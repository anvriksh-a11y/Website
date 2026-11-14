import math
import numpy as np
from PIL import Image

def generate():
    orig = Image.open('public/anvriksh_logo_clean.png').convert('RGBA')
    arr = np.array(orig)
    alpha = arr[:, :, 3]
    rgb = arr[:, :, :3]
    brightness = np.mean(rgb, axis=2)
    b1 = (brightness > 45) & (alpha > 20)

    masks = [np.zeros(arr.shape[:2], dtype=bool) for _ in range(4)]
    for y in range(arr.shape[0]):
        for x in range(arr.shape[1]):
            if b1[y, x]:
                if 280 <= x <= 380 and 25 <= y <= 95:
                    masks[0][y, x] = True
                elif 130 <= x <= 220 and 80 <= y <= 160:
                    masks[1][y, x] = True
                elif 290 <= x <= 390 and 100 <= y <= 180:
                    masks[2][y, x] = True
                elif 80 <= x <= 160 and 170 <= y <= 235:
                    masks[3][y, x] = True

    all_leaves = masks[0] | masks[1] | masks[2] | masks[3]

    PAD_X = 24
    PAD_Y = 24
    CANVAS_W = arr.shape[1] + PAD_X * 2
    CANVAS_H = arr.shape[0] + PAD_Y * 2

    def build_anim(is_white, out_file):
        trunk_full = np.zeros((CANVAS_H, CANVAS_W, 4), dtype=np.uint8)
        trunk_mask = (alpha > 15) & (~all_leaves)
        if is_white:
            trunk_full[PAD_Y:PAD_Y+arr.shape[0], PAD_X:PAD_X+arr.shape[1], :3] = 255
        else:
            trunk_full[PAD_Y:PAD_Y+arr.shape[0], PAD_X:PAD_X+arr.shape[1], :3] = rgb
        trunk_full[PAD_Y:PAD_Y+arr.shape[0], PAD_X:PAD_X+arr.shape[1], 3] = alpha * trunk_mask
        base_trunk = Image.fromarray(trunk_full)
        
        leaf_data = []
        for i, m in enumerate(masks):
            ys, xs = np.where(m)
            miny, maxy = ys.min(), ys.max()
            minx, maxx = xs.min(), xs.max()
            
            l_arr = np.zeros((maxy - miny + 1, maxx - minx + 1, 4), dtype=np.uint8)
            sub_m = m[miny:maxy+1, minx:maxx+1]
            sub_a = alpha[miny:maxy+1, minx:maxx+1]
            
            if is_white:
                l_arr[sub_m, :3] = 255
            else:
                l_arr[sub_m, :3] = rgb[miny:maxy+1, minx:maxx+1][sub_m]
            l_arr[sub_m, 3] = sub_a[sub_m]
            
            leaf_img = Image.fromarray(l_arr)
            cx = PAD_X + (minx + maxx) / 2.0
            cy = PAD_Y + (miny + maxy) / 2.0
            leaf_data.append({
                'img': leaf_img,
                'orig_cx': cx,
                'orig_cy': cy
            })

        # 4 motion trajectories:
        # Start at rest (home), float outward/upward with soft flutter, return to exact home
        TOTAL_FRAMES = 50
        profiles = [
            (6, 42, 16.0, -18.0, 14.0, 2.0),
            (9, 44, -14.0, -20.0, -12.0, 2.5),
            (11, 45, 18.0, -12.0, 15.0, 2.0),
            (8, 43, 12.0, -14.0, -10.0, 2.0)
        ]
        
        frames = []
        for f in range(TOTAL_FRAMES):
            frame = base_trunk.copy()
            for idx, (img_info, prof) in enumerate(zip(leaf_data, profiles)):
                sf, ef, max_dx, max_dy, max_rot, wob = prof
                if f < sf or f > ef:
                    dx, dy, rot = 0.0, 0.0, 0.0
                else:
                    u = (f - sf) / float(ef - sf)
                    env = math.sin(math.pi * u) ** 1.8
                    wobble = math.sin(wob * 2 * math.pi * u) * 0.25 * env
                    
                    dx = max_dx * env + wobble * 6.0
                    dy = max_dy * env + wobble * 8.0
                    rot = max_rot * env + wobble * 5.0
                
                leaf_img = img_info['img']
                if abs(rot) > 0.1:
                    rotated = leaf_img.rotate(rot, resample=Image.BILINEAR, expand=True)
                else:
                    rotated = leaf_img
                
                target_cx = img_info['orig_cx'] + dx
                target_cy = img_info['orig_cy'] + dy
                paste_x = int(round(target_cx - rotated.width / 2.0))
                paste_y = int(round(target_cy - rotated.height / 2.0))
                
                frame.alpha_composite(rotated, (paste_x, paste_y))
            frames.append(frame)

        # Save animated WebP
        frames[0].save(
            out_file,
            format='WEBP',
            save_all=True,
            append_images=frames[1:],
            duration=60, # 60ms * 50 = 3000ms (3.0s)
            loop=0,
            quality=90,
            method=3
        )
        print(f"Generated {out_file} ({len(frames)} frames)")

    build_anim(True, 'public/anvriksh_animated_white.webp')
    build_anim(False, 'public/anvriksh_animated.webp')

if __name__ == '__main__':
    generate()


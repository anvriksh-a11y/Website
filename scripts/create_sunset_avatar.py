from PIL import Image, ImageDraw
import numpy as np
import math

# Create a 200x200 sunset silhouette avatar matching media_1794652024819_21986c94.png
size = 200
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# 1. Warm radial sunset gradient (bright yellow-orange in center, rich crimson/red-orange at edges)
for y in range(size):
    for x in range(size):
        dx = x - size * 0.45
        dy = y - size * 0.45
        dist = math.sqrt(dx*dx + dy*dy) / (size * 0.65)
        dist = min(max(dist, 0.0), 1.0)
        
        # Color interpolation from #FFA022 to #D82600 to #880B00
        r = int(255 * (1 - dist*0.4))
        g = int(140 * (1 - dist*0.8))
        b = int(20 * (1 - dist*0.9))
        img.putpixel((x, y), (r, g, b, 255))

# 2. Draw profile silhouette of person looking up/right
mask = Image.new('L', (size, size), 0)
m_draw = ImageDraw.Draw(mask)

# Head circle
m_draw.ellipse([70, 45, 145, 125], fill=255)
# Neck and shoulders
m_draw.polygon([(85, 110), (135, 110), (175, 200), (45, 200)], fill=255)
# Nose and chin profile
m_draw.polygon([(130, 75), (155, 88), (140, 95), (145, 108), (120, 115)], fill=255)
# Hair curls/spikes on top
m_draw.ellipse([60, 40, 105, 80], fill=255)
m_draw.ellipse([90, 32, 135, 68], fill=255)

# Paste dark silhouette onto the sunset
dark_silhouette = Image.new('RGBA', (size, size), (22, 12, 16, 255))
img.paste(dark_silhouette, (0, 0), mask)

# Circular crop
circle_mask = Image.new('L', (size, size), 0)
c_draw = ImageDraw.Draw(circle_mask)
c_draw.ellipse([0, 0, size, size], fill=255)

final_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
final_img.paste(img, (0, 0), circle_mask)

final_img.save('public/images/voice_avatar_sunset.png')
print('Created public/images/voice_avatar_sunset.png')

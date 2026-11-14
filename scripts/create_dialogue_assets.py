import os
import shutil

images_dir = 'public/images'
os.makedirs(images_dir, exist_ok=True)

# 1. ns-img-552.svg (play icon with waveform / wave graphic)
play_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M5 3l14 9-14 9V3z" fill="#003D2B"/>
</svg>'''
with open(os.path.join(images_dir, 'ns-img-552.svg'), 'w', encoding='utf-8') as f:
    f.write(play_svg)

# 2. ns-img-553.svg (voice wave / mic icon)
mic_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#003D2B" stroke-width="2">
  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" fill="#E8DCC9"/>
  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
  <line x1="12" y1="19" x2="12" y2="22"/>
</svg>'''
with open(os.path.join(images_dir, 'ns-img-553.svg'), 'w', encoding='utf-8') as f:
    f.write(mic_svg)

# 3. ns-avatar-39.png
src_avatar = 'public/ammar.jpg'
if os.path.exists(src_avatar):
    shutil.copyfile(src_avatar, os.path.join(images_dir, 'ns-avatar-39.png'))
    print('Copied avatar to ns-avatar-39.png')

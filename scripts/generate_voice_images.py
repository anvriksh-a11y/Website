import math
from PIL import Image, ImageDraw, ImageFilter

def create_creator_avatar(output_path, size=200):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Warm studio gradient background
    for y in range(size):
        r = int(220 - (y / size) * 80)
        g = int(140 - (y / size) * 60)
        b = int(100 - (y / size) * 40)
        draw.line([(0, y), (size, y)], fill=(r, g, b, 255))
    
    # Headphone band arch
    cx, cy = size // 2, int(size * 0.48)
    draw.arc([cx - 45, cy - 65, cx + 45, cy + 25], start=180, end=0, fill=(35, 40, 48, 255), width=8)
    
    # Head silhouette
    draw.ellipse([cx - 32, cy - 38, cx + 32, cy + 30], fill=(24, 28, 35, 255))
    
    # Headphone earcups
    draw.rounded_rectangle([cx - 48, cy - 18, cx - 36, cy + 18], radius=6, fill=(45, 52, 62, 255))
    draw.rounded_rectangle([cx + 36, cy - 18, cx + 48, cy + 18], radius=6, fill=(45, 52, 62, 255))
    
    # Neck and shoulders
    draw.rectangle([cx - 14, cy + 26, cx + 14, cy + 50], fill=(24, 28, 35, 255))
    draw.ellipse([cx - 56, cy + 42, cx + 56, cy + 120], fill=(24, 28, 35, 255))
    
    # Warm ambient studio rim light glow
    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.arc([cx - 34, cy - 40, cx + 34, cy + 28], start=200, end=340, fill=(255, 180, 110, 180), width=4)
    glow_draw.arc([cx - 58, cy + 40, cx + 58, cy + 118], start=190, end=270, fill=(255, 160, 90, 160), width=4)
    glow = glow.filter(ImageFilter.GaussianBlur(2))
    img.alpha_composite(glow)
    
    # Circular mask with smooth antialiasing
    mask = Image.new('L', (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.ellipse([2, 2, size - 2, size - 2], fill=255)
    
    final_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    final_img.paste(img, (0, 0), mask)
    final_img.save(output_path, 'PNG')
    print(f"Saved {output_path}")

def create_second_avatar(output_path, size=120):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Cool emerald-teal gradient background
    for y in range(size):
        r = int(24 + (y / size) * 30)
        g = int(80 + (y / size) * 70)
        b = int(70 + (y / size) * 60)
        draw.line([(0, y), (size, y)], fill=(r, g, b, 255))
    
    cx, cy = size // 2, int(size * 0.46)
    # Head silhouette
    draw.ellipse([cx - 20, cy - 26, cx + 20, cy + 20], fill=(22, 26, 32, 255))
    # Modern glasses rim
    draw.rectangle([cx - 16, cy - 6, cx - 4, cy + 2], outline=(100, 220, 180, 240), width=2)
    draw.rectangle([cx + 4, cy - 6, cx + 16, cy + 2], outline=(100, 220, 180, 240), width=2)
    draw.line([(cx - 4, cy - 2), (cx + 4, cy - 2)], fill=(100, 220, 180, 240), width=2)
    # Neck and shoulders
    draw.rectangle([cx - 9, cy + 18, cx + 9, cy + 32], fill=(22, 26, 32, 255))
    draw.ellipse([cx - 38, cy + 28, cx + 38, cy + 85], fill=(22, 26, 32, 255))
    
    # Circular mask
    mask = Image.new('L', (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.ellipse([1, 1, size - 1, size - 1], fill=255)
    
    final_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    final_img.paste(img, (0, 0), mask)
    final_img.save(output_path, 'PNG')
    print(f"Saved {output_path}")

create_creator_avatar('public/images/voice_creator_card6.png', 200)
create_second_avatar('public/images/voice_avatar_2.png', 120)

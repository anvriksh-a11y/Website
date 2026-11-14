import os
from PIL import Image

src_uploads = [
    ("reel_voice_ai.webp", "media_1794641451684_8febb72d.jpg"),
    ("reel_web_dev.webp", "media_1794641548302_f5dbf24b.jpg"),
    ("reel_custom_software.webp", "media_1794641629290_e6ae51dd.jpg"),
    ("reel_gen_ai.webp", "media_1794641743595_3a5582a1.jpg"),
    ("reel_agentic_ai.webp", "media_1794641841466_32491b1f.jpg"),
    ("reel_app_dev.webp", "media_1794641926629_104c7a4c.jpg"),
]

uploads_dir = r"C:\Users\rajma\.gemini\antigravity\brain\7e8838f3-344b-4c9a-9ffe-7d889e49d55d\.user_uploaded"
dest_dir = r"public\services\reels"
os.makedirs(dest_dir, exist_ok=True)

for dest_name, src_name in src_uploads:
    src_path = os.path.join(uploads_dir, src_name)
    im = Image.open(src_path)
    print(f"{src_name} original size: {im.size}")
    
    # Save optimized webp
    dest_webp = os.path.join(dest_dir, dest_name)
    im.save(dest_webp, "WEBP", quality=92)
    
    # Also save png
    dest_png = os.path.join(dest_dir, dest_name.replace(".webp", ".png"))
    im.save(dest_png, "PNG", optimize=True)
    
    print(f"Saved {dest_webp} ({os.path.getsize(dest_webp)} bytes) and {dest_png}")


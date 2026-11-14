import os
from PIL import Image

src_dir = r"C:\Users\rajma\.gemini\antigravity\brain\7e8838f3-344b-4c9a-9ffe-7d889e49d55d"
dest_dir = r"public\services\reels"
os.makedirs(dest_dir, exist_ok=True)

files = [
    ("service_voice.png", "service_voice_1794640865739.jpg"),
    ("service_web.png", "service_web_1794640886052.jpg"),
    ("service_agentic.png", "service_agentic_1794640908028.jpg"),
    ("service_software.png", "service_software_1794640929563.jpg"),
    ("service_genai.png", "service_genai_1794640950961.jpg"),
    ("service_security.png", "service_security_1794640975851.jpg"),
    ("service_outreach.png", "service_outreach_1794640993983.jpg"),
]

for dest_name, src_name in files:
    src_path = os.path.join(src_dir, src_name)
    im = Image.open(src_path)
    dest_path = os.path.join(dest_dir, dest_name)
    im.save(dest_path, "PNG", optimize=True)
    webp_name = dest_name.replace(".png", ".webp")
    dest_webp = os.path.join(dest_dir, webp_name)
    im.save(dest_webp, "WEBP", quality=90)
    print(f"Processed {dest_name} ({im.size}) -> {dest_path} & {dest_webp}")


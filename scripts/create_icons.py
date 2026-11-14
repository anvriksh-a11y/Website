import os

icons_dir = 'public/images/icons'
os.makedirs(icons_dir, exist_ok=True)

# 1. ChatGPT official spiral icon
chatgpt_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2 16.3c-.4-2.8-2.3-5-4.9-5.9-.6-2.1-2.2-3.8-4.2-4.6-2.6-1-5.6-.6-7.8 1-1.2-.6-2.6-.9-4-.8-3.1.2-5.7 2.3-6.6 5.3-2.2 1.3-3.6 3.7-3.6 6.3 0 2.2 1 4.3 2.7 5.7.4 2.8 2.3 5 4.9 5.9.6 2.1 2.2 3.8 4.2 4.6 2.6 1 5.6.6 7.8-1 1.2.6 2.6.9 4 .8 3.1-.2 5.7-2.3 6.6-5.3 2.2-1.3 3.6-3.7 3.6-6.3.1-2.3-.9-4.5-2.7-5.7zm-14.8-5c1.4-.9 3.2-1.1 4.8-.5 1 .4 1.8 1.1 2.4 2-1.8 1-3.6 2.1-5.4 3.1-.4-.2-.8-.4-1.3-.5-.9-.2-1.8-.1-2.7.2.5-2 1.2-3.3 2.2-4.3zm-6.2 3.9c.7-.5 1.5-.8 2.4-.9v7.1l-2.7 1.6c-.6-.7-1-1.6-1-2.6.1-2.1 1.3-4.2 1.3-5.2zm-2.8 10.9c0-1.2.5-2.3 1.3-3.1 1.8 1.1 3.6 2.1 5.4 3.1v1.1c0 1 .4 1.9 1 2.6l-2.7 1.6c-1.4-1.1-2.4-2.6-3.3-3.9-.9-.5-1.7-1.4-1.7-1.4zm10.7 7.7c-1.4.9-3.2 1.1-4.8.5-1-.4-1.8-1.1-2.4-2 1.8-1 3.6-2.1 5.4-3.1.4.2.8.4 1.3.5.9.2 1.8.1 2.7-.2-.5 2-1.2 3.3-2.2 4.3zm6.2-3.9c-.7.5-1.5.8-2.4.9v-7.1l2.7-1.6c.6.7 1 1.6 1 2.6-.1 2.1-1.3 4.2-1.3 5.2zm7.6-5.4c0 1.2-.5 2.3-1.3 3.1-1.8-1.1-3.6-2.1-5.4-3.1v-1.1c0-1-.4-1.9-1-2.6l2.7-1.6c1.4 1.1 2.4 2.6 3.3 3.9.7.5 1.7 1.4 1.7 1.4z" fill="#10A37F"/>
</svg>'''

# 2. Gemini official starburst
gemini_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <defs>
    <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4285F4"/>
      <stop offset="50%" stop-color="#9B72CB"/>
      <stop offset="100%" stop-color="#D96570"/>
    </linearGradient>
  </defs>
  <path d="M20 2C20 11.94 11.94 20 2 20C11.94 20 20 28.06 20 38C20 28.06 28.06 20 38 20C28.06 20 20 11.94 20 2Z" fill="url(#gemGrad)"/>
</svg>'''

# 3. Claude AI (Anthropic)
claude_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="M20 5 L23 15 L33 13 L26 21 L32 29 L22 27 L18 36 L16 26 L6 27 L12 19 L6 11 L16 14 Z" fill="#D97706"/>
  <circle cx="20" cy="20" r="5" fill="#FFF"/>
</svg>'''

# 4. DeepSeek
deepseek_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="M8 24 C10 14, 22 10, 32 14 C34 22, 28 30, 18 30 C12 30, 8 28, 8 24 Z" fill="#0066FF"/>
  <path d="M28 14 C32 10, 36 12, 34 18 C30 18, 28 16, 28 14 Z" fill="#00D4FF"/>
  <circle cx="16" cy="20" r="2.5" fill="#FFFFFF"/>
</svg>'''

# 5. Mistral AI
mistral_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <rect x="8" y="8" width="6" height="6" fill="#FF7000"/>
  <rect x="26" y="8" width="6" height="6" fill="#FF7000"/>
  <rect x="8" y="14" width="6" height="6" fill="#FF7000"/>
  <rect x="14" y="14" width="6" height="6" fill="#FF7000"/>
  <rect x="20" y="14" width="6" height="6" fill="#FF7000"/>
  <rect x="26" y="14" width="6" height="6" fill="#FF7000"/>
  <rect x="8" y="20" width="6" height="6" fill="#FF7000"/>
  <rect x="20" y="20" width="6" height="6" fill="#FF7000"/>
  <rect x="26" y="20" width="6" height="6" fill="#FF7000"/>
  <rect x="8" y="26" width="6" height="6" fill="#FF7000"/>
  <rect x="26" y="26" width="6" height="6" fill="#FF7000"/>
</svg>'''

# 6. Grok
grok_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="M10 30 L22 10 L30 10 L18 30 Z" fill="#FFFFFF"/>
  <path d="M16 10 L22 18 L18 24 L12 16 Z" fill="#999999"/>
</svg>'''

# 7. Perplexity
perplexity_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="M20 6 L20 34 M6 20 L34 20 M10 10 L30 30 M10 30 L30 10" stroke="#22B8CD" stroke-width="3.5" stroke-linecap="round"/>
</svg>'''

# 8. GitHub
github_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#FFFFFF">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 6C12.27 6 6 12.27 6 20c0 6.19 4.01 11.43 9.58 13.28.7.13.96-.3.96-.67v-2.36c-3.9.85-4.72-1.88-4.72-1.88-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.14 3.28 1.52 4.08 1.16.13-.9.49-1.52.89-1.87-3.11-.35-6.38-1.56-6.38-6.93 0-1.53.55-2.78 1.44-3.76-.14-.35-.63-1.78.14-3.71 0 0 1.18-.38 3.85 1.44 1.12-.31 2.32-.47 3.51-.47 1.19 0 2.39.16 3.51.47 2.67-1.82 3.85-1.44 3.85-1.44.77 1.93.28 3.36.14 3.71.9.98 1.44 2.23 1.44 3.76 0 5.38-3.28 6.57-6.4 6.92.5.43.95 1.29.95 2.6v3.86c0 .38.25.81.96.67C29.99 31.43 34 26.19 34 20c0-7.73-6.27-14-14-14z"/>
</svg>'''

# 9. Lovable
lovable_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <defs>
    <linearGradient id="lovGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF4B72"/>
      <stop offset="100%" stop-color="#FF7E40"/>
    </linearGradient>
  </defs>
  <path d="M20 32 C12 24, 7 19, 7 14 C7 9.5, 10.5 6, 15 6 C17.5 6, 19.5 7.5, 20 9 C20.5 7.5, 22.5 6, 25 6 C29.5 6, 33 9.5, 33 14 C33 19, 28 24, 20 32 Z" fill="url(#lovGrad)"/>
</svg>'''

# 10. Runway
runway_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <rect x="8" y="10" width="7" height="20" rx="2" fill="#FFFFFF"/>
  <path d="M15 10 H24 C28 10, 30 13, 30 17 C30 21, 28 24, 24 24 H15 Z" fill="#FFFFFF"/>
  <path d="M21 24 L29 30 H23 L16 24 Z" fill="#FFFFFF"/>
</svg>'''

# 11. Qwen AI
qwen_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="M20 6 L32 14 L32 26 L20 34 L8 26 L8 14 Z" stroke="#8B5CF6" stroke-width="3" fill="none"/>
  <circle cx="20" cy="20" r="5" fill="#8B5CF6"/>
</svg>'''

# 12. Mocha AI
mocha_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="14" stroke="#EC4899" stroke-width="3"/>
  <path d="M14 20 Q 20 12, 26 20 T 30 22" stroke="#EC4899" stroke-width="2.5" stroke-linecap="round" fill="none"/>
</svg>'''

files = {
    'chatgpt-ai.svg': chatgpt_svg,
    'gemini.svg': gemini_svg,
    'claude-ai.svg': claude_svg,
    'deepseek.svg': deepseek_svg,
    'mistral-ai.svg': mistral_svg,
    'grok-ai.svg': grok_svg,
    'perplexity-ai.svg': perplexity_svg,
    'github.svg': github_svg,
    'lovable.svg': lovable_svg,
    'runway.svg': runway_svg,
    'qwen-ai.svg': qwen_svg,
    'mocha-ai.svg': mocha_svg,
}

for name, content in files.items():
    path = os.path.join(icons_dir, name)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip())
    print('Created icon:', path)

import os
import re

header_astro = """---
---
<nav id="main-header" class="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-sm bg-black/20 transition-colors duration-300">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <div class="flex items-center gap-4 text-white">
            <div class="size-6 text-primary">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 19h20L12 2zm0 3.8L18.4 17H5.6L12 5.8z"></path>
                    <path d="M12 7l-4 7h8l-4-7z" opacity="0.5"></path>
                </svg>
            </div>
            <a href="/" class="text-white text-xl font-bold tracking-[0.2em] uppercase">LUXE DR</a>
        </div>
        <div class="hidden lg:flex items-center gap-8 ml-auto mr-8">
            <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium tracking-widest uppercase" href="/elite_vehicle_fleet_gallery">Fleet</a>
            <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium tracking-widest uppercase" href="/vip_services_concierge">Services</a>
            <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium tracking-widest uppercase" href="/contacto_vip">Concierge</a>
            <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium tracking-widest uppercase" href="/contacto_vip">Membership</a>
        </div>
        <div class="flex items-center gap-4">
            <button class="hidden md:flex text-white hover:text-primary transition-colors">
                <span class="material-symbols-outlined">search</span>
            </button>
            <button class="flex items-center justify-center rounded bg-primary/90 hover:bg-primary text-[#181611] px-5 py-2 text-sm font-bold tracking-wide transition-colors">
                LOG IN
            </button>
            <button class="lg:hidden text-white">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    </div>
</nav>

<script>
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.remove('bg-black/20', 'backdrop-blur-sm', 'border-white/10');
            header.classList.add('bg-background-dark', 'border-border-dark', 'shadow-md');
        } else {
            header.classList.add('bg-black/20', 'backdrop-blur-sm', 'border-white/10');
            header.classList.remove('bg-background-dark', 'border-border-dark', 'shadow-md');
        }
    });
</script>
"""

os.makedirs('src/components', exist_ok=True)
with open('src/components/Header.astro', 'w') as f:
    f.write(header_astro)

# Update Layout.astro to import and use Header
with open('src/layouts/Layout.astro', 'r') as f:
    layout_content = f.read()

if "import Header" not in layout_content:
    layout_content = layout_content.replace(
        "import '../styles/global.css';",
        "import '../styles/global.css';\nimport Header from '../components/Header.astro';"
    )
    layout_content = layout_content.replace(
        "<slot />",
        "<Header />\n    <slot />"
    )
    with open('src/layouts/Layout.astro', 'w') as f:
        f.write(layout_content)

# Remove the old headers from pages
pages_dir = 'src/pages'
for filename in os.listdir(pages_dir):
    if not filename.endswith('.astro'):
        continue
    filepath = os.path.join(pages_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Remove <nav> block
    content = re.sub(r'<nav.*?</nav>', '', content, flags=re.DOTALL)
    # Remove <header> block
    content = re.sub(r'<header.*?</header>', '', content, flags=re.DOTALL)
    # Remove the script that we just moved from index.astro
    content = re.sub(r'<script>\s*// JS block header logic.*?</script>', '', content, flags=re.DOTALL)
    
    with open(filepath, 'w') as f:
        f.write(content)

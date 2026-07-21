import re

with open('src/pages/index.astro', 'r') as f:
    content = f.read()

# Make the nav sticky and add an ID for JS
content = content.replace(
    '<nav class="absolute top-0 w-full z-50 border-b border-white/10 backdrop-blur-sm bg-black/20">',
    '<nav id="main-header" class="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-sm bg-black/20 transition-colors duration-300">'
)

# Right-justify the navigation by changing how the 3 elements flex
# Let's group the links and buttons together or use ml-auto
content = content.replace(
    '<div class="hidden lg:flex items-center gap-8">',
    '<div class="hidden lg:flex items-center gap-8 ml-auto mr-8">'
)

# Add the JS block header script at the end of the file before </Layout>
script_code = """
<script>
    // JS block header logic
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
</Layout>
"""

content = content.replace('</Layout>', script_code)

with open('src/pages/index.astro', 'w') as f:
    f.write(content)

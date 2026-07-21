import os
import re

files_to_process = [
    "index.html",
    "contacto_vip/code.html",
    "dashboard_de_reserva/code.html",
    "elite_vehicle_fleet_gallery/code.html",
    "premium_vehicle_details_booking/code.html",
    "vip_services_concierge/code.html"
]

replacements = [
    (r'>Fleet</a>', r' href="/elite_vehicle_fleet_gallery/code.html">Fleet</a>'),
    (r'>Services</a>', r' href="/vip_services_concierge/code.html">Services</a>'),
    (r'>Concierge</a>', r' href="/vip_services_concierge/code.html">Concierge</a>'),
    (r'>Membership</a>', r' href="/contacto_vip/code.html">Membership</a>'),
]

for filepath in files_to_process:
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace href="#" for each specific link text
    # We'll use a regex that looks for href="#" followed by the class and then the text, 
    # but since classes vary, we can just look for the text and then backtrack to the href, OR
    # just do a simple replace if we assume href="#" is right before it, or somewhere in the tag.
    
    # A more robust regex:
    content = re.sub(r'href="[^"]*"\s*([^>]*>Fleet</a>)', r'href="/elite_vehicle_fleet_gallery/code.html" \1', content)
    content = re.sub(r'href="[^"]*"\s*([^>]*>Services</a>)', r'href="/vip_services_concierge/code.html" \1', content)
    content = re.sub(r'href="[^"]*"\s*([^>]*>Concierge</a>)', r'href="/contacto_vip/code.html" \1', content)
    content = re.sub(r'href="[^"]*"\s*([^>]*>Membership</a>)', r'href="/contacto_vip/code.html" \1', content)
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Links updated")

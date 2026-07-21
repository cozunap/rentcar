import os

def tr(file, changes):
    with open(file, 'r') as f:
        content = f.read()
    for old, new in changes:
        content = content.replace(old, new)
    with open(file, 'w') as f:
        f.write(content)

tr('src/pages/elite_vehicle_fleet_gallery.astro', [
    ('The Elite Fleet', 'La Flota Élite'),
    ('Experience Punta Cana in Power &amp; Style. Choose from our exclusive collection of high-end vehicles tailored for executives and VIPs.', 'Experimenta Punta Cana con Poder y Estilo. Elige de nuestra exclusiva colección de vehículos de alta gama diseñados para ejecutivos y VIPs.'),
    ('All Models', 'Todos los Modelos'),
    ('SUVs', 'SUVs'),
    ('Sports', 'Deportivos'),
    ('Convertibles', 'Convertibles'),
    ('Sedans', 'Sedanes'),
    ('View Details', 'Ver Detalles'),
    ('Seats', 'Asientos'),
    ('/ day', '/ día'),
    ('Auto', 'Auto'),
    ('Manual', 'Manual'),
    ('Reserve Now', 'Reservar Ahora')
])

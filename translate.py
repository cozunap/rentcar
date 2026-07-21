import os
import re

def tr(file, changes):
    with open(file, 'r') as f:
        content = f.read()
    for old, new in changes:
        content = content.replace(old, new)
    with open(file, 'w') as f:
        f.write(content)

tr('src/pages/index.astro', [
    ('The Elite Fleet', 'La Flota Élite'),
    ('The Collection', 'La Colección'),
    ('View Full Inventory', 'Ver Inventario Completo'),
    ('Iconic design meeting rugged luxury.', 'Diseño icónico combinado con lujo resistente.'),
    ('Unmatched comfort and sophistication.', 'Confort y sofisticación inigualables.'),
    ('Spacious executive travel.', 'Viaje ejecutivo espacioso.'),
    ('"The service was impeccable. The vehicle was pristine. Luxe DR defines Caribbean luxury."', '"El servicio fue impecable. El vehículo estaba prístino. Luxe DR define el lujo caribeño."'),
    ('Why Choose Luxe DR?', '¿Por Qué Elegir Luxe DR?'),
    ('Impeccable Standards', 'Estándares Impecables'),
    ('Every vehicle is meticulously maintained', 'Cada vehículo es mantenido meticulosamente'),
    ('Ultimate Discretion', 'Discreción Absoluta'),
    ('Total privacy and confidentiality', 'Privacidad y confidencialidad total'),
    ('Chauffeur Service', 'Servicio de Chofer'),
    ('Executive Protection', 'Protección Ejecutiva'),
    ('Premium SUVs', 'SUVs Premium'),
    ('Exotic Sports', 'Deportivos Exóticos'),
    ('Executive Sedans', 'Sedanes Ejecutivos')
])

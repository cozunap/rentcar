import os

def tr(file, changes):
    with open(file, 'r') as f:
        content = f.read()
    for old, new in changes:
        content = content.replace(old, new)
    with open(file, 'w') as f:
        f.write(content)

tr('src/pages/vip_services_concierge.astro', [
    ('VIP Services &amp; Concierge', 'Servicios VIP y Concierge'),
    ('Elevate your stay with our bespoke concierge services.', 'Eleva tu estadía con nuestros servicios de concierge a medida.'),
    ('From armed protection to yacht charters, we handle every detail.', 'Desde protección armada hasta alquiler de yates, nos encargamos de cada detalle.'),
    ('Executive Chauffeur', 'Chofer Ejecutivo'),
    ('Armed Security', 'Seguridad Armada'),
    ('Aviation &amp; Yachts', 'Aviación y Yates'),
    ('Professional, bilingual drivers trained in evasive driving and VIP protocol.', 'Choferes profesionales y bilingües entrenados en manejo evasivo y protocolo VIP.'),
    ('Book Service', 'Reservar Servicio')
])

tr('src/pages/premium_vehicle_details_booking.astro', [
    ('Premium Vehicle Details &amp; Booking', 'Detalles de Vehículo Premium y Reserva'),
    ('Specifications', 'Especificaciones'),
    ('Engine', 'Motor'),
    ('0-60 mph', '0-60 mph'),
    ('Top Speed', 'Velocidad Máxima'),
    ('Interior', 'Interior'),
    ('Features', 'Características'),
    ('Bulletproof Glass', 'Cristal Antibalas'),
    ('Run-flat Tires', 'Llantas Run-flat'),
    ('GPS Tracking', 'Rastreo GPS'),
    ('Wi-Fi', 'Wi-Fi'),
    ('Booking Summary', 'Resumen de Reserva'),
    ('Daily Rate', 'Tarifa Diaria'),
    ('Total', 'Total'),
    ('Confirm Reservation', 'Confirmar Reserva')
])

tr('src/pages/contacto_vip.astro', [
    ('VIP Contact &amp; Membership', 'Contacto VIP y Membresía'),
    ('Exclusive Access', 'Acceso Exclusivo'),
    ('Join the Luxe DR Elite', 'Únete a la Élite de Luxe DR'),
    ('First Name', 'Nombre'),
    ('Last Name', 'Apellido'),
    ('Email', 'Correo Electrónico'),
    ('Phone', 'Teléfono'),
    ('Message', 'Mensaje'),
    ('Submit Inquiry', 'Enviar Consulta'),
    ('Membership Tiers', 'Niveles de Membresía'),
    ('Gold', 'Oro'),
    ('Platinum', 'Platino'),
    ('Black', 'Negro')
])

tr('src/pages/dashboard_de_reserva.astro', [
    ('Client Dashboard', 'Panel de Cliente'),
    ('Welcome back', 'Bienvenido de nuevo'),
    ('Active Reservations', 'Reservas Activas'),
    ('Past Reservations', 'Reservas Pasadas'),
    ('Account Settings', 'Configuración de Cuenta'),
    ('Logout', 'Cerrar Sesión')
])

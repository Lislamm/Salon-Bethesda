// ===== AÑO DEL FOOTER =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.remove('active'))
);

// ===== GALERÍA DINÁMICA =====
// Cambia los nombres por tus imágenes reales dentro de assets/img/galeria/
const galleryImages = [
  'assets/img/galeria/foto1.jpg',
  'assets/img/galeria/foto2.jpg',
  'assets/img/galeria/foto3.jpg',
  'assets/img/galeria/foto4.jpg',
  'assets/img/galeria/foto5.jpg',
  'assets/img/galeria/foto6.jpg',
  'assets/img/galeria/foto7.jpg',
  'assets/img/galeria/foto8.jpg',
];

const galleryGrid = document.getElementById('gallery-grid');
galleryImages.forEach((src, i) => {
  const div = document.createElement('div');
  div.className = 'gallery-item';
  div.innerHTML = `<img src="${src}" alt="Trabajo ${i + 1}" loading="lazy">`;
  div.addEventListener('click', () => openLightbox(src));
  galleryGrid.appendChild(div);
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
}
closeLightbox.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.classList.remove('active');
});

// ===== FORMULARIO CITAS → WHATSAPP =====
const WHATSAPP_NUMBER = '5358512770'; // ⚠️ CAMBIA por tu número real (código país + número)

document.getElementById('cita-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre   = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const servicio = document.getElementById('servicio').value;
  const fecha    = document.getElementById('fecha').value;
  const hora     = document.getElementById('hora').value;
  const mensaje  = document.getElementById('mensaje').value.trim();

  const texto =
    `Hola Salón Bethesda 💫%0A` +
    `Quisiera agendar una cita:%0A%0A` +
    `👤 *Nombre:* ${nombre}%0A` +
    `📞 *Teléfono:* ${telefono}%0A` +
    `💅 *Servicio:* ${servicio}%0A` +
    `📅 *Fecha:* ${fecha}%0A` +
    `🕐 *Hora:* ${hora}%0A` +
    (mensaje ? `📝 *Comentarios:* ${mensaje}` : '');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
});
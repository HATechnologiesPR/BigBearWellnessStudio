// Menú para elegir número de WhatsApp
function mostrarMenuWhatsapp() {
  document.getElementById('menu-whatsapp').style.display = 'block';
}
function cerrarMenuWhatsapp() {
  document.getElementById('menu-whatsapp').style.display = 'none';
}
function enviarWhatsapp(numero) {
  window.open('https://wa.me/' + numero, '_blank');
  cerrarMenuWhatsapp();
}
// Menú para elegir número de llamada
function mostrarMenuLlamada() {
  document.getElementById('menu-llamada').style.display = 'block';
}
function cerrarMenuLlamada() {
  document.getElementById('menu-llamada').style.display = 'none';
}
function llamarNumero(numero) {
  window.location.href = 'tel:+' + numero;
  cerrarMenuLlamada();
}
/* === FUNCIONES JAVASCRIPT === */

// Carrusel de banners
const bannerImages = [
  'images/Banner.png',
  'images/Banner1.png',
  'images/Banner2.png'
];
let currentBanner = 0;
function showNextBanner() {
  const banner = document.getElementById('banner-carousel');
  if (banner) {
    currentBanner = (currentBanner + 1) % bannerImages.length;
    banner.src = bannerImages[currentBanner];
  }
}
setInterval(showNextBanner, 5000);
/* Función para compartir el enlace en móviles */
function compartirEnlace() {
  const url = window.location.href;
  const title = document.title || "Business Card";
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(() => {
      alert("No se pudo compartir el enlace.");
    });
  } else {
    // Fallback para desktop o navegadores sin soporte
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles: " + url);
  }
}

/* Función que muestra la lista de servicios disponibles */
/* PARA EDITAR: Cambiar el texto dentro de alert() por tus servicios */
function mostrarServicios() {
  alert("En Big Bear Wellness Studio nos dedicamos a encaminarte en el proceso de desarrollar tu mejor versión, por eso ofrecemos: \n\n• Evaluación de bienestar y pruebas de rendimiento\n• Entrenamiento Personal\n• \"Bootcamps\"\n• Calendario mensual de actividades dentro y fuera de nuestras facilidades\n• Talleres sobre bienestar físico, mental y espiritual");
}

/* Función para agregar contacto - Compatible con móviles */
function agregarContacto() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Josue A. Borges Vázquez
N:Borges;Josue A.;;;;
ORG:Big Bear Wellness Studio
TEL;TYPE=CELL:787-413-2327
TEL;TYPE=CELL:939-265-5306
EMAIL:bigbearwellness@gmail.com
URL:https://bigbearwellnessstudio.github.io/
ADR:;;San Lorenzo;Puerto Rico;;;
NOTE:Nos especializamos en acondicionamiento físico y fortalecimiento mental, con programas que integran cuerpo, mente y espíritu.
END:VCARD`;

  // Detectar si es un dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Para dispositivos móviles, crear un enlace temporal y hacer click
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'big_bear_wellness_studio_contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    
    // Limpiar después de un breve delay
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  } else {
    // Para desktop, usar el método tradicional
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'big_bear_wellness_studio_contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}

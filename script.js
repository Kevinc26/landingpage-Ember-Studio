const DEMO_EMAIL = 'kevincascante26@outlook.com';
const DEMO_SUBJECT = 'Solicitud de demo ClearBiz';

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const message = document.getElementById('formMessage');
  const body = [
    `Nombre: ${formData.get('name')}`,
    `Correo: ${formData.get('email')}`,
    `Teléfono: ${formData.get('phone')}`,
    `Empresa: ${formData.get('company')}`,
    `Tipo de negocio: ${formData.get('businessType')}`,
    '',
    'Mensaje:',
    formData.get('message') || 'Sin mensaje adicional.'
  ].join('\n');

  const mailtoUrl = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}&body=${encodeURIComponent(body)}`;

  message.textContent = `Se abrirá tu correo para enviar la solicitud a ${DEMO_EMAIL}.`;
  window.location.href = mailtoUrl;

  return false;
}

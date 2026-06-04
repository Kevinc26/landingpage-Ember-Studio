function handleSubmit(event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.textContent = 'Solicitud lista. Te contactaremos para coordinar la demo o implementación de ClearBiz.';
  event.target.reset();
  return false;
}

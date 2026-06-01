function handleSubmit(event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.textContent = 'Solicitud lista. Conectá este formulario a WhatsApp, email o Supabase cuando lo publiques.';
  event.target.reset();
  return false;
}

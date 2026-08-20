const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const datos = new FormData(formulario);

  const respuesta = await fetch('/api/sugerencias', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre: datos.get('nombre'),
      categoria: datos.get('categoria'),
      mensaje: datos.get('mensaje')
    })
  });

  if (!respuesta.ok) {
    alert('No se pudo enviar la sugerencia. Revisa el mensaje.');
    return;
  }

  formulario.reset();
  alert('¡Gracias por tu sugerencia!');
});
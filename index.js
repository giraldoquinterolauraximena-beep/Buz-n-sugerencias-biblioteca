const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let sugerencias = [];

// recibir una sugerencia nueva
app.post('/api/sugerencias', (req, res) => {
  const { nombre, categoria, mensaje } = req.body;

  // validación: el mensaje es obligatorio
  if (!mensaje || mensaje.trim() === '') {
    return res.status(400).json({ error: 'El mensaje no puede estar vacío' });
  }

  sugerencias.push({ nombre, categoria, mensaje, fecha: new Date() });
  res.status(201).json({ ok: true });
});

// listar las sugerencias (panel admin)
app.get('/api/sugerencias', (req, res) => {
  res.json(sugerencias);
});

// manejo de rutas que no existen (siempre al final)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Buzón activo');
});

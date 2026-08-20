# Buzón de Sugerencias · Biblioteca

Aplicación web (Node.js + Express) que permite a los usuarios de la biblioteca
enviar sugerencias de forma anónima o con su nombre, y consultar todas las
sugerencias recibidas desde un panel de administración.

Proyecto desarrollado como parte del taller de Programación Aplicada.

##  Enlaces

- **App publicada:** https://buz-n-sugerencias-biblioteca.onrender.com
- **Panel de administración:** https://buz-n-sugerencias-biblioteca.onrender.com/admin.html
- **Repositorio:** https://github.com/giraldoquinterolauraximena-beep/Buz-n-sugerencias-biblioteca

## Estructura del proyecto

```
├── 📁 public
│   ├── index.html     
│   ├── script.js       
│   └── admin.html      
├── index.js             
└── package.json
```

## Cómo correrlo en local

```bash
npm install
node index.js
```

El servidor queda disponible en `http://localhost:3000`.

## Historias de usuario

- Como estudiante, quiero enviar una sugerencia sobre el servicio de la
  biblioteca, para que el equipo bibliotecario la revise y mejore el servicio.
- Como usuario frecuente de la biblioteca, quiero poder enviar mi sugerencia
  de forma anónima, para sentirme libre de opinar sin dar mi nombre.
- Como encargado de la biblioteca, quiero ver todas las sugerencias recibidas
  en un panel, para priorizar qué cambios hacer primero.

## Casos de prueba

- Enviar sugerencia completa → Resultado esperado: se guarda y limpia el formulario. ¿Pasó? ✅
- Enviar con mensaje vacío → Resultado esperado: el servidor no la guarda (error 400). ¿Pasó? ✅
- Ver panel de administración → Resultado esperado: aparece la lista completa. ¿Pasó? ✅
- Visitar una ruta inexistente → Resultado esperado: devuelve error 404 en JSON. ¿Pasó? ✅

##  Retrospectiva

**¿Qué funcionó bien?**
El flujo de trabajo por etapas ayudó a no intentar hacer todo a la vez:
primero el servidor, luego el formulario, luego las pruebas.

**¿Qué nos costó más trabajo?**
Entender por qué el middleware de error 404 debe ir *después* de todas las
rutas y no antes, ya que Express evalúa el código de arriba hacia abajo.
Tambien la parte de subir el codigo para mi fue muy dificil.

**¿Qué harían distinto si empezaran de nuevo?**
Escribir los casos de prueba antes de terminar el código del servidor, para
tenerlos en mente desde el inicio.
Revisar tambien el link de la terminal por que casi que no me funcioana.

**¿Qué le agregarían en una siguiente versión?**
Guardar las sugerencias en una base de datos real (para que no se pierdan al
reiniciar el servidor) y un botón para marcarlas como "atendidas".

## Tecnologías

- Node.js
- Express
- HTML / CSS / JavaScript (vanilla)
- Despliegue: Render

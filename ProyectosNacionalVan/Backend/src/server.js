// src/server.js
const app = require('./app'); // Asegúrate de que apunta a `app.js` correctamente
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

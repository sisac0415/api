// En este caso, no es necesario tener un archivo separado para rutas si no tienes rutas adicionales.
// Sin embargo, si decides mantenerlo por consistencia, aquí está un ejemplo de cómo podrías hacerlo.

const express = require('express');
const { getStandings, createTeam } = require('./controllers');

const router = express.Router();

// Definir rutas
router.get('/standings', getStandings); // Obtener la tabla de posiciones
router.post('/standings', createTeam); // Crear un nuevo equipo

module.exports = router;

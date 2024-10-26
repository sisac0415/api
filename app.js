const express = require('express');
const mongoose = require('mongoose');
const { Team } = require('./model'); // Asegúrate de que el modelo esté importado
const { getStandings, createTeam } = require('./controllers'); // Importar controladores
const { jwtMiddleware } = require('./middleware'); // Importar middleware

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb+srv://user:user@cluster0.1ubff.mongodb.net/premier-league?retryWrites=true&w=majority')
.then(async () => {
    console.log('Conexión a MongoDB exitosa');

    // Insertar datos de ejemplo si la colección está vacía
    const count = await Team.countDocuments(); // Asegúrate de que Team está definido aquí
    if (count === 0) {
        await Team.insertMany([
            { name: 'Manchester City', points: 75, playedGames: 30, won: 24, drawn: 3, lost: 3 },
            { name: 'Liverpool', points: 70, playedGames: 30, won: 21, drawn: 7, lost: 2 },
            { name: 'Chelsea', points: 60, playedGames: 30, won: 18, drawn: 6, lost: 6 },
        ]);
        console.log('Datos de la tabla de posiciones insertados');
    } else {
        console.log('La tabla de posiciones ya contiene datos');
    }
})
.catch((error) => console.error('Error al conectar a MongoDB', error));

// Definir rutas
app.get('/api/standings', getStandings); // Obtener la tabla de posiciones
app.post('/api/standings', jwtMiddleware, createTeam); // Crear un nuevo equipo

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

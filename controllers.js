const { Team } = require('./model'); // Asegúrate de que el modelo esté importado

const getStandings = async (req, res) => {
    try {
        const teams = await Team.find().sort({ points: -1 }); // Ordenar por puntos
        res.json(teams);
    } catch (error) {
        console.error('Error al obtener la tabla de posiciones', error);
        res.status(500).json({ message: 'Error al obtener la tabla de posiciones' });
    }
};

const createTeam = async (req, res) => {
    try {
        const newTeam = new Team(req.body);
        await newTeam.save();
        res.status(201).json(newTeam); // Código 201 para creación exitosa
    } catch (error) {
        console.error('Error al crear el equipo', error);
        res.status(500).json({ message: 'Error al crear el equipo' });
    }
};

module.exports = {
    getStandings,
    createTeam,
};

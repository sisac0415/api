const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Team, User } = require('./model'); // Importar ambos modelos

const secret = 'tu_secreto_jwt'; // Asegúrate de usar un secreto seguro

// Funciones existentes
const getStandings = async (req, res) => {
    // Tu lógica existente
};

const createTeam = async (req, res) => {
    // Tu lógica existente
};

// Nueva función para registrar usuario
const register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'Usuario creado con éxito' });
};

// Nueva función para iniciar sesión y generar un token
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Generar el token
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
    res.json({ token });
};

// Exportar todas las funciones
module.exports = {
    getStandings,
    createTeam,
    register,
    login,
};

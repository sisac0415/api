const jwt = require('jsonwebtoken');
const secret = 'tu_secreto_jwt'; // Asegúrate de usar un secreto seguro

const jwtMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token requerido');

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(401).send('Token inválido');
        req.userId = decoded.id;
        next();
    });
};

module.exports = {
    jwtMiddleware,
};

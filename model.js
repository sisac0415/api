const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    playedGames: { type: Number, required: true },
    won: { type: Number, required: true },
    drawn: { type: Number, required: true },
    lost: { type: Number, required: true },
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Team = mongoose.model('Team', teamSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Team,
    User,
};

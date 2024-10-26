const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    playedGames: { type: Number, required: true },
    won: { type: Number, required: true },
    drawn: { type: Number, required: true },
    lost: { type: Number, required: true },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = {
    Team,
};

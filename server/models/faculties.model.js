const mongoose = require('mongoose');

const Faculties = new mongoose.model(
    "Faculties",
    new mongoose.Schema({
        name: {
            type: String
        }
    })
);

module.exports = Faculties;
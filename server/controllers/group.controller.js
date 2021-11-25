const db = require('../models');
const uuid = require('uuid');
const Group = db.group;

exports.getGroups = (req, res) => {
    Group.findAll({ raw: true} ).then(group => {
        res.status(200).send(group);
    }).catch(err => {
        res.status(500).send({ message: err });
    });
};

exports.setGroups = (req, res) => {
    Group.create({
        id: uuid.v4(),
        name: req.body.name,
        studentDigit: req.body.studentDigit,
        facultieId: req.body.facultieId
    }).then(() => {
        res.status(200).send({ message: "Facultie was created successfully!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};
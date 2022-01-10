const sequelize = require('sequelize');
const users = require('../models').users;

module.exports = {
    retrieveAll (req,res) {
        return users.findAll()
            .then(users => {
                return res.send(users);
            })
            .catch(err => res.status(400).send(err))
    },
    create (req,res) {
        return users.create({
            name:'coucou scorni'
        }).then(usersCreated => {
            res.send(usersCreated);
        })
            .catch(err => res.status(400).send(err))
    }
}
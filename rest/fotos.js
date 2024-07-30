var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Usuario = require('../models').usuario;
const Perfil = require('../models').perfil;

router.get('/json',
    function (req, res, next) {
        Usuario.findAll({

            attributes: {
                exclude:
                    ["updatedAt", "createdAt"]
            },
            include: [{
                model: Perfil,
                attributes: ['texto'],
                through: { attributes: [] }
            }],
        })
            .then(usuarios => {
                res.json(usuarios);
            })
            .catch(error =>
                res.status(400).send(error))
    });

router.get('/view', (req, res, next) => {
    Usuario.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        },
        include: [{
            model: Perfil,
            attributes: ['texto'],
            through: { attributes: [] }
        }],
    })
    .then(usuarios => {
        res.render('usuarios', { title: 'Usuarios', usuarios });
    })
    .catch(error => res.status(400).send(error));
});


router.get('/json/:id', function (req, res, next) {

    let id = parseInt(req.params.id);
    Usuario.findAll({
        attributes: { exclude: ["updatedAt"] },
        include: [{
            model: Perfil,
            attributes: ['texto'],
            through: { attributes: [] }
        }],
        where: {
            id: { [Op.and]: [id] }
        }
    })
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(error =>
            res.status(400).send(error))
});

router.post('/save', function (req, res, next) {
    let { titulo, descripcion,
        calificacion, ruta } = req.body;
    Usuario.create({
        titulo: titulo,
        descripcion: descripcion,
        calificacion: parseFloat(calificacion),
        ruta: ruta,
        createdAt: new Date(),
        updatedAt: new Date()

    })
        .then(usuario => {
            res.json(usuario);
        })
        .catch(error =>
            res.status(400).send(error))
});

router.put('/update', function (req, res, next) {
    let { id, titulo, descripcion, calificacion, ruta } =
        req.body;
    Usuario.update({
        titulo: titulo,
        descripcion: descripcion,
        calificacion: parseFloat(calificacion),
        ruta: ruta,
        createdAt: new Date(),
        updatedAt: new Date()
    },
        {
            where: {
                id: parseInt(id)
            }
        })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(error => res.status(400).send(error))
});

router.delete('/delete/:id', function (req, res, next) {
    let id = parseInt(req.params.id);
    Usuario.destroy({
        where: {
            id: id
        }
    })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(error =>
            res.status(400).send(error))
});
module.exports = router;
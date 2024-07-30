var express = require('express');
var router = express.Router();

// const Sequelize = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const Usuario = require('../models').usuario;
const Perfil = require('../models').perfil;

// router.get('/findAll/json',
//     function (req, res, next) {
//         Usuario.findAll({
//             attributes: { exclude: ["updatedAt"] },
//             include: [{
//                 model: Perfil,
//                 attributes: ['texto'],
//                 through: { attributes: [] }
//             }],
//         })
//             .then(usuarios => {
//                 res.json(usuarios);
//             })
//             .catch(error =>
//                 res.status(400).send(error))
//     });

// router.get('/findAll/view', function (req, res, next) {
//     Usuario.findAll({
//         attributes: { exclude: ["updatedAt"] },
//         include: [{
//             model: Perfil,
//             attributes: ['texto'],
//             through: { attributes: [] }
//         }],
//     })
//         .then(usuarios => {
//             res.render('usuarios', { title: 'Usuarios', arrFotos: usuarios });
//         })
//         .catch(error => res.status(400).send(error))
// });

// router.get('/findAllByRate/json', function (req, res, next) {
//     let lower = parseFloat(req.query.lower);
//     let higher = parseFloat(req.query.upper);

//     Usuario.findAll({
//         attributes: {
//             exclude: ["updatedAt"]
//         },
//         include: [{
//             model: Perfil,
//             attributes: ['texto'],
//             through: { attributes: [] }
//         }],
//         where: {
//             calificacion: { [Op.between]: [lower, higher] }
//         }
//     })
//         .then(usuarios => {
//             res.json(usuarios);
//         })
//         .catch(error =>
//             res.status(400).send(error))
// });


// router.get('/findAllByRate/view', function (req, res, next) {
//     let lower = parseFloat(req.query.lower);
//     let higher = parseFloat(req.query.upper);
//     Usuario.findAll({
//         attributes: { exclude: ["updatedAt"] },
//         include: [{
//             model: Perfil,
//             attributes: ['texto'],
//             through: { attributes: [] }
//         }],
//         where: {
//             calificacion: { [Op.between]: [lower, higher] }
//         }
//     })
//         .then(usuarios => {
//             res.render('usuarios', { title: 'Usuarios', arrFotos: usuarios });
//         })
//         .catch(error => res.status(400).send(error))
    
// });


// router.get('/findById/:id/json', function (req, res, next) {

//     let id = parseInt(req.params.id);
//     Usuario.findAll({
//         attributes: { exclude: ["updatedAt"] },
//         include: [{
//             model: Perfil,
//             attributes: ['texto'],
//             through: { attributes: [] }
//         }],
//         where: {
//             id: { [Op.and]: [id] }
//         }
//     })
//         .then(usuarios => {
//             res.json(usuarios);
//         })
//         .catch(error =>
//             res.status(400).send(error))
// });


// router.get('/findById/:id', function (req, res, next) {
//     let id = parseInt(req.params.id);
//     Usuario.findAll({
//         attributes: { exclude: ["updatedAt"] },
//         include: [{
//             model: Perfil,
//             attributes: ['texto'],
//             through: { attributes: [] }
//         }],
//         where: {
//             id: { [Op.and]: [id] }
//         }
//     })
//         .then(usuarios => {
//             res.render('usuario', { title: 'Usuario', usuarios: usuarios });
//         })
//         .catch(error => res.status(400).send(error))
// });

module.exports = router;
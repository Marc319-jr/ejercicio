const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

//llamo al modelo, En nuestro caso el de Genres
const Genre = db.Genres;

const controller ={
    list: (req,res) => {
        db.Genre.findAll()
        .then(genres => {
            let respuesta = {
                meta: {
                    status:200,
                    total: genres.length,
                    url: 'api/genres'
                },
                data: genres
            }
            res.json(respuesta)
        })
    },
    detail: (req,res) => {
        db.Genre.findByPk(req.params.id)
        .then(genre => {
            let respuesta = {
                meta: {
                    status:200,
                    total: genre.length > 1 ? genre.lenght: 'es unico' ,
                    url: '/api/genre/:id'
                },
                data:genre
            }
            res.json(respuesta)
        })
    }
}


module.exports = controller
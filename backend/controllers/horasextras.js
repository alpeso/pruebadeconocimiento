'use strict'

var Horaextra = require('../models/horaextra');
var fs = require('fs');
var path = require('path');

var controller = {

    home: function(req, res) {
        return res.status(200).send({
            message: 'Soy el home'
        });
    },

    test: function(req, res) {
        return res.status(200).send({
            message: "Soy el metodo o accion test del controlador de project"
        });
    },

    saveHoraextra: function(req, res) {
        var horaextra = new Horaextra();

        var params = req.body;
        horaextra.document = params.document;
        horaextra.name = params.name;
        horaextra.startdate = params.startdate;
        horaextra.enddate = params.enddate;
        horaextra.startturn = params.startturn;
        horaextra.endturn = params.endturn;
        horaextra.overtimestart = params.overtimestart;
        horaextra.overtimeend = params.overtimeend;
        horaextra.detail = params.detail;


        horaextra.save((err, horaextraStored) => {
            if (err) return res.status(500).send({ message: 'Error al guardar la hora extra.' });

            if (!horaextraStored) return res.status(404).send({ message: 'No se ha podido registrar la hora extra.' });

            return res.status(200).send({ horaextra: horaextraStored });
        });
    },

    getHoraextra: function(req, res) {

        Horaextra.find({}).sort('-year').exec((err, Horaextra) => {

            if (err) return res.status(500).send({ message: 'Error al devolver los datos.' });

            if (!Horaextra) return res.status(404).send({ message: 'No hay horas extras que mostrar.' });

            return res.status(200).send({ Horaextra });
        });

    }



};

module.exports = controller;
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HoraextraSchema = Schema({
    document: String,
    name: String,
    startdate: Date,
    enddate: Date,
    startturn: Date,
    endturn: Date,
    overtimestart: Date,
    overtimeend: Date,
    detail: String
});

module.exports = mongoose.model('Horaextra', HoraextraSchema);
// projects  --> guarda los documents en la coleccion
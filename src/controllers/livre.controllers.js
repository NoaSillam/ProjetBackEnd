const { response } = require('express');
const livreModel = require('../models/livre.model');

getAllLivres = (request, response) =>
{
    livreModel.getAllLivres((error, data) =>{
        if(error)
            response.status(500).send({
                message:
                    error.message || "erreur table livre"
            });
         else response.send(data);
    
            
    });
};
module.exports = {
    getAllLivres
}
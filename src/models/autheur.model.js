const dataBase = require('../db/db-connect');

const AutheurConstructor = function (autheur){
    this.id_autheur = autheur.id_autheur;
    this.nom_autheur = autheur.nom_autheur;
    this.prenom_autheur = autheur.prenom_autheur;
};

getAllAutheurs = result_bdd_request =>{
    dataBase.query("SELECT * FROM autheur", (error, response)=>{
        if(error){
            result_bdd_request(error)
        }
        result_bdd_request(null, response);
        });
};


getAutheurById = (id, result_bdd_request) => {
    dataBase.query("SELECT * FROM autheur WHERE idAutheur = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response);
        }
    });
};
updateAutheur = (id, autheur, result_bdd_request) => {
    const { nom, prenom } = autheur;
    const query = "UPDATE autheur SET nom = ?, prenom = ? WHERE idAutheur = ?";
    dataBase.query(query, [nom, prenom, id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};
createAutheur = (nouveauAutheur, result_bdd_request) => {
    const { nom, prenom } = nouveauAutheur;
    const query = "INSERT INTO autheur (nom, prenom) VALUES (?, ?)";
    dataBase.query(query, [nom, prenom], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.insertId);
        }
    });
};

deleteAutheur = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM autheur WHERE idAutheur = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};

module.exports = { getAllAutheurs, getAutheurById, updateAutheur, createAutheur, deleteAutheur };
const dataBase = require('../db/db-connect');

const AutheurConstructor = function (autheur){
    this.id_autheur = autheur.id_autheur;
    this.nom_autheur = autheur.nom_autheur;
    this.prenom_autheur = autheur.prenom_autheur;
};

// ----------------------------------------------
// Récupérer tous les auteurs
// ----------------------------------------------
getAllAutheurs = result_bdd_request =>{
    dataBase.query("SELECT * FROM autheur", (error, response)=>{
        if(error){
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        }
        result_bdd_request(null, response);// Renvoyer le résultat de la requête
        });
};


// ----------------------------------------------
// Récupérer un auteur par son identifiant
// ----------------------------------------------
getAutheurById = (id, result_bdd_request) => {
    dataBase.query("SELECT * FROM autheur WHERE idAutheur = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response);// Renvoyer le résultat de la requête
        }
    });
};


// ----------------------------------------------
// Mettre à jour un auteur par son identifiant
// ----------------------------------------------
updateAutheur = (id, autheur, result_bdd_request) => {
    const { nom, prenom } = autheur;
    const query = "UPDATE autheur SET nom = ?, prenom = ? WHERE idAutheur = ?";
    dataBase.query(query, [nom, prenom, id], (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response.affectedRows);// Renvoyer le résultat de la requête
        }
    });
};


// ----------------------------------------------
// Créer un nouvel auteur
// ----------------------------------------------
createAutheur = (nouveauAutheur, result_bdd_request) => {
    const { nom, prenom } = nouveauAutheur;
    const query = "INSERT INTO autheur (nom, prenom) VALUES (?, ?)";
    dataBase.query(query, [nom, prenom], (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response.insertId);// Renvoyer l'identifiant du nouvel auteur inséré
        }
    });
};


// ----------------------------------------------
// Supprimer un auteur par son identifiant
// ----------------------------------------------
deleteAutheur = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM autheur WHERE idAutheur = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response.affectedRows);// Renvoyer le résultat de la requête
        }
    });
};


// ----------------------------------------------
// Exporte les différentes fonctions en tant que module
// ----------------------------------------------
module.exports = { getAllAutheurs, // Fonction pour récupérer tous les auteurs de la base de données
                    getAutheurById, // Fonction pour récupérer un auteur par son identifiant
                    updateAutheur,// Fonction pour mettre à jour un auteur par son identifiant
                     createAutheur,// Fonction pour créer un nouvel auteur
                     deleteAutheur // Fonction pour supprimer un auteur par son identifiant
                    };
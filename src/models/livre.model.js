const dataBase = require('../db/db-connect');

const LivreConstructor = function (livre){
    this.id_livre = livre.id_livre;
    this.titre_livre = livre.titre_livre;
    this.description_livre = livre.description_livre;
};

// ----------------------------------------------
//  Récupérer tous les livres
// ----------------------------------------------
getAllLivres = result_bdd_request =>{
    dataBase.query("SELECT livre.*, autheur.nom AS nom_autheur, autheur.prenom AS prenom_autheur FROM livre left join autheur on livre.idAuthor = autheur.idAutheur", (error, response)=>{
        if(error){
            result_bdd_request(error)// Renvoyer une erreur en cas d'erreur lors de la requête
        }
        result_bdd_request(null, response);// Renvoyer le résultat de la requête
        });
};


// ----------------------------------------------
//  Récupérer un livre par son identifiant
// ----------------------------------------------
getLivreById = (id, result_bdd_request) => {
    const query = "SELECT livre.*, autheur.nom AS nom_autheur, autheur.prenom AS prenom_autheur FROM livre LEFT JOIN autheur ON livre.idAuthor = autheur.idAutheur WHERE livre.idLivre = ?";
    dataBase.query(query, id, (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response);// Renvoyer le résultat de la requête
        }
    });
};

// ----------------------------------------------
//  Mettre à jour un livre par son identifiant
// ----------------------------------------------
updateLivre = (id, livre, result_bdd_request) => {
    const { titre, description, idAuthor } = livre;
    const query = "UPDATE livre SET titre = ?, description = ?, idAuthor = ? WHERE idLivre = ?";
    dataBase.query(query, [titre, description, idAuthor, id], (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response.affectedRows);// Renvoyer le résultat de la requête
        }
    });
};


// ----------------------------------------------
//  Créer un nouveau livre
// ----------------------------------------------
createLivre = (nouveauLivre, result_bdd_request) => {
    const { titre, description, idAuthor } = nouveauLivre;
    let query;
    let values;

    if (idAuthor) {
        query = "INSERT INTO livre (titre, description, idAuthor) VALUES (?, ?, ?)";
        values = [titre, description, idAuthor];
    } else {
        query = "INSERT INTO livre (titre, description) VALUES (?, ?)";
        values = [titre, description];
    }

    dataBase.query(query, values, (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response.insertId);// Renvoyer l'identifiant du nouveau livre inséré
        }
    });
};

// ----------------------------------------------
//  Supprimer un livre par son identifiant
// ----------------------------------------------
deleteLivre = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM livre WHERE idLivre = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response.affectedRows);// Renvoyer le résultat de la requête
        }
    });
};

// ----------------------------------------------
//  Exporte les différentes fonctions en tant que module
// ----------------------------------------------
module.exports = { getAllLivres, // Fonction pour récupérer tous les livres de la base de données
                    getLivreById,// Fonction pour récupérer un livre par son identifiant
                    updateLivre,// Fonction pour mettre à jour un livre par son identifiant
                     createLivre, // Fonction pour créer un nouveau livre
                     deleteLivre // Fonction pour supprimer un livre par son identifiant
                    };
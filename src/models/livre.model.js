const dataBase = require('../db/db-connect');

const LivreConstructor = function (livre){
    this.id_livre = livre.id_livre;
    this.titre_livre = livre.titre_livre;
    this.description_livre = livre.description_livre;
};


/**
 * @swagger
 * components:
 *   schemas:
 *     Livre:
 *       type: object
 *       properties:
 *         id_livre:
 *           type: integer
 *         titre_livre:
 *           type: string
 *         description_livre:
 *           type: string
 */

/** Exemple d'écriture pour la documentation swagger du GET /animes
 * @swagger
 * /animes:
 *   get:
 *     summary: Permet de récupérer l'enssemble des animes présent dans la table
 *     tags:
 *      - Animes
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID dans la BDD.
 *                         example: 1
 *                       ref_auteur_id:
 *                         type: integer
 *                         description: Chemin de la ressource correspondante en BDD.
 *                         example: 1
 *                       titre:
 *                         type: string
 *                         description: Le nom de l'anime.
 *                         example: One Piece
 *                       nb_saisons:
 *                         type: integer
 *                         description: Nombre de saisons de l'anime.
 *                         example: 20
 *                       nb_episodes:
 *                         type: integer
 *                         description: Nombre d'épisodes de l'anime.
 *                         example: 1013
 *                       description:
 *                         type: string
 *                         description: Description de l'anime.
 *                         example: Description anime one piece
 */
getAllLivres = result_bdd_request =>{
    dataBase.query("SELECT livre.*, autheur.nom AS nom_autheur, autheur.prenom AS prenom_autheur FROM livre left join autheur on livre.idAuthor = autheur.idAutheur", (error, response)=>{
        if(error){
            result_bdd_request(error)
        }
        result_bdd_request(null, response);
        });
};

/**
 * @swagger
 * /livres/{id}:
 *   get:
 *     summary: Récupère un livre par ID
 *     description: Récupère un livre de la base de données en utilisant son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du livre à récupérer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec le livre récupéré.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livre'
 */

getLivreById = (id, result_bdd_request) => {
    const query = "SELECT livre.*, autheur.nom AS nom_autheur, autheur.prenom AS prenom_autheur FROM livre LEFT JOIN autheur ON livre.idAuthor = autheur.idAutheur WHERE livre.idLivre = ?";
    dataBase.query(query, id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response);
        }
    });
};
updateLivre = (id, livre, result_bdd_request) => {
    const { titre, description, idAuthor } = livre;
    const query = "UPDATE livre SET titre = ?, description = ?, idAuthor = ? WHERE idLivre = ?";
    dataBase.query(query, [titre, description, idAuthor, id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};




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
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.insertId);
        }
    });
};




deleteLivre = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM livre WHERE idLivre = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};

module.exports = { getAllLivres, getLivreById, updateLivre, createLivre, deleteLivre };
const livreModel = require('../models/livre.model');

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
const getAllLivres = (req, res) => {
    livreModel.getAllLivres((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer les livres"
            });
        } else {
            res.send(data);
        }
    });
};


const getLivreById = (req, res) => {
    const livreId = req.params.id;
  
    livreModel.getLivreById(livreId, (error, livre) => {
      if (error) {
        res.status(500).send({
          message: error.message || "Une erreur est survenue en essayant de récupérer le livre"
        });
      } else {
        if (livre) {
          res.send(livre);
        } else {
          res.status(404).send({
            message: "Livre non trouvé"
          });
        }
      }
    });
  };
  const updateLivre = (req, res) => {
    const livreId = req.params.id;
    const nouveauLivre = {
        titre: req.body.titre,
        description: req.body.description,
        idAuthor: req.body.idAuthor
    };

    livreModel.updateLivre(livreId, nouveauLivre, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour du livre"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: livreId, ...nouveauLivre });
            } else {
                res.status(404).send({
                    message: "Livre non trouvé"
                });
            }
        }
    });
};



const createLivre = (req, res) => {
    const nouveauLivre = {
        titre: req.body.titre,
        description: req.body.description,
        idAuthor: req.body.idAuthor
    };

    livreModel.createLivre(nouveauLivre, (error, livreId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création du livre"
            });
        } else {
            res.send({ id: livreId, ...nouveauLivre });
        }
    });
};




const deleteLivre = (req, res) => {
    const livreId = req.params.id;

    livreModel.deleteLivre(livreId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression du livre"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ message: "Livre supprimé avec succès" });
            } else {
                res.status(404).send({
                    message: "Livre non trouvé"
                });
            }
        }
    });
};
module.exports = {
    getAllLivres,
    getLivreById,
    updateLivre,
    createLivre,
    deleteLivre
};
const livreModel = require('../models/livre.model');


// ----------------------------------------------
//  Récupérer tous les livres
// ----------------------------------------------
const getAllLivres = (req, res) => {
    livreModel.getAllLivres((error, data) => {
        if (error) {
            // En cas d'erreur lors de la récupération des livres, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer les livres"
            });
        } else {
            // Si la récupération des livres est réussie, renvoyer les données des livres
            res.send(data);
        }
    });
};


// ----------------------------------------------
//  Récupérer un livre par son identifiant
// ----------------------------------------------
const getLivreById = (req, res) => {
    const livreId = req.params.id;
  
    livreModel.getLivreById(livreId, (error, livre) => {
      if (error) {
        // En cas d'erreur lors de la récupération du livre, renvoyer une réponse d'erreur avec un message approprié
        res.status(500).send({
          message: error.message || "Une erreur est survenue en essayant de récupérer le livre"
        });
      } else {
        if (livre) {
             // Si le livre est trouvé, renvoyer les données du livre
          res.send(livre);
        } else {
            // Si le livre n'est pas trouvé, renvoyer une réponse d'erreur avec un message approprié
          res.status(404).send({
            message: "Livre non trouvé"
          });
        }
      }
    });
  };

// ----------------------------------------------
//  Mettre à jour un livre
// ----------------------------------------------
  const updateLivre = (req, res) => {
    const livreId = req.params.id;
    const nouveauLivre = {
        titre: req.body.titre,
        description: req.body.description,
        idAuthor: req.body.idAuthor
    };

    livreModel.updateLivre(livreId, nouveauLivre, (error, rowsAffected) => {
        if (error) {
            // En cas d'erreur lors de la mise à jour du livre, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour du livre"
            });
        } else {
            if (rowsAffected > 0) {
                // Si la mise à jour est réussie et des lignes ont été affectées, renvoyer les informations mises à jour du livre
                res.send({ id: livreId, ...nouveauLivre });
            } else {
                // Si le livre n'est pas trouvé, renvoyer une réponse d'erreur avec un message approprié
                res.status(404).send({
                    message: "Livre non trouvé"
                });
            }
        }
    });
};


// ----------------------------------------------
//  Créer un livre
// ----------------------------------------------
const createLivre = (req, res) => {
    const nouveauLivre = {
        titre: req.body.titre,
        description: req.body.description,
        idAuthor: req.body.idAuthor
    };

    livreModel.createLivre(nouveauLivre, (error, livreId) => {
        if (error) {
            // En cas d'erreur lors de la création du livre, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création du livre"
            });
        } else {
              // Si la création du livre est réussie, renvoyer les informations du livre créé
            res.send({ id: livreId, ...nouveauLivre });
        }
    });
};



// ----------------------------------------------
//  Supprimer un livre
// ----------------------------------------------
const deleteLivre = (req, res) => {
    const livreId = req.params.id;

    livreModel.deleteLivre(livreId, (error, rowsAffected) => {
        if (error) {
            // En cas d'erreur lors de la suppression du livre, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression du livre"
            });
        } else {
            if (rowsAffected > 0) {
                 // Si la suppression est réussie et des lignes ont été affectées, renvoyer un message de succès
                res.send({ message: "Livre supprimé avec succès" });
            } else {
                 // Si le livre n'est pas trouvé, renvoyer une réponse d'erreur avec un message approprié
                res.status(404).send({
                    message: "Livre non trouvé"
                });
            }
        }
    });
};

// ----------------------------------------------
//  Exporter les fonctions du contrôleur des livres
// ----------------------------------------------
module.exports = {
    getAllLivres, // Fonction pour récupérer tous les livres du controllers
    getLivreById, // Fonction pour récupérer un livre par son identifiant du contrôleur
    updateLivre, // Fonction pour mettre à jour un livre du contrôleur
    createLivre, // Fonction pour créer un nouveau livre du contrôleur
    deleteLivre // Fonction pour supprimer un livre du contrôleur
};
const autheurModel = require('../models/autheur.model');


// ----------------------------------------------
//  Fonction pour récupérer tous les auteurs
// ----------------------------------------------
const getAllAutheurs = (req, res) => {
    autheurModel.getAllAutheurs((error, data) => {
        if (error) {
            // En cas d'erreur lors de la récupération des autheurs, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer les autheurs"
            });
        } else {
         // Si la récupération des autheurs est réussie, renvoyer les données des autheurs
            res.send(data);
        }
    });
};

// ----------------------------------------------
//  Fonction pour récupérer un auteur par son identifiant
// ----------------------------------------------
const getAutheurById = (req, res) => {
    const autheurId = req.params.id;
  
    autheurModel.getAutheurById(autheurId, (error, autheur) => {
      if (error) {
     // En cas d'erreur lors de la récupération des autheurs, renvoyer une réponse d'erreur avec un message approprié
        res.status(500).send({
          message: error.message || "Une erreur est survenue en essayant de récupérer l'autheur"
        });
      } else {
        if (autheur) {
         // Si le autheur est trouvé, renvoyer les données du autheurs
          res.send(autheur);
        } else {
        // Si l'autheur n'est pas trouvé, renvoyer une réponse d'erreur avec un message approprié
          res.status(404).send({
            message: "autheur non trouvé"
          });
        }
      }
    });
  };

// ----------------------------------------------
//  Fonction pour mettre à jour un auteur
// ----------------------------------------------
  const updateAutheur = (req, res) => {
    const autheurId = req.params.id;
    const nouveauAutheur = {
        nom: req.body.nom,
        prenom: req.body.prenom
    };

    autheurModel.updateAutheur(autheurId, nouveauAutheur, (error, rowsAffected) => {
        if (error) {
         // En cas d'erreur lors de la récupération des autheurs, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour de l'autheur"
            });
        } else {
            if (rowsAffected > 0) {
            // Si la mise à jour est réussie et des lignes ont été affectées, renvoyer les informations mises à jour de l'autheur
                res.send({ id: autheurId, ...nouveauAutheur });
            } else {
            // Si l'autheur n'est pas trouvé, renvoyer une réponse d'erreur avec un message approprié
                res.status(404).send({
                    message: "Autheur non trouvé"
                });
            }
        }
    });
};

// ----------------------------------------------
//  Fonction pour créer un nouvel auteur
// ----------------------------------------------
const createAutheur = (req, res) => {
    const nouveauAutheur = {
        nom: req.body.nom,
        prenom: req.body.prenom
    };

    autheurModel.createAutheur(nouveauAutheur, (error, autheurId) => {
        if (error) {
         // En cas d'erreur lors de la récupération des autheurs, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création de l'autheur"
            });
        } else {
            // Si la création de l'autheur est réussie, renvoyer les informations de l'autheur créé
            res.send({ id: autheurId, ...nouveauAutheur });
        }
    });
};

// ----------------------------------------------
//  Fonction pour supprimer un auteur
// ----------------------------------------------
const deleteAutheur = (req, res) => {
    const autheurId = req.params.id;

    autheurModel.deleteAutheur(autheurId, (error, rowsAffected) => {
        if (error) {
         // En cas d'erreur lors de la récupération des autheurs, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression de l'autheur"
            });
        } else {
            if (rowsAffected > 0) {
                // Si la suppression est réussie et des lignes ont été affectées, renvoyer un message de succès
                res.send({ message: "Autheur supprimé avec succès" });
            } else {
                // Si l'autheur n'est pas trouvé, renvoyer une réponse d'erreur avec un message approprié
                res.status(404).send({
                    message: "Autheur non trouvé"
                });
            }
        }
    });
};


// ----------------------------------------------
//  Export des fonctions du contrôleur des auteurs
// ----------------------------------------------
module.exports = {
    getAllAutheurs, // Fonction pour récupérer tous les autheurs du controllers
    getAutheurById, // Fonction pour récupérer un autheur par son identifiant du contrôleur
    updateAutheur, // Fonction pour mettre à jour un autheur du contrôleur
    createAutheur, // Fonction pour créer un nouveau autheur du contrôleur
    deleteAutheur // Fonction pour supprimer un livre du contrôleur
};
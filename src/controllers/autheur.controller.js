const autheurModel = require('../models/autheur.model');

const getAllAutheurs = (req, res) => {
    autheurModel.getAllAutheurs((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer les autheurs"
            });
        } else {
            res.send(data);
        }
    });
};
const getAutheurById = (req, res) => {
    const autheurId = req.params.id;
  
    autheurModel.getAutheurById(autheurId, (error, autheur) => {
      if (error) {
        res.status(500).send({
          message: error.message || "Une erreur est survenue en essayant de récupérer l'autheur"
        });
      } else {
        if (autheur) {
          res.send(autheur);
        } else {
          res.status(404).send({
            message: "autheur non trouvé"
          });
        }
      }
    });
  };
  const updateAutheur = (req, res) => {
    const autheurId = req.params.id;
    const nouveauAutheur = {
        nom: req.body.nom,
        prenom: req.body.prenom
    };

    autheurModel.updateAutheur(autheurId, nouveauAutheur, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour de l'autheur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: autheurId, ...nouveauAutheur });
            } else {
                res.status(404).send({
                    message: "Autheur non trouvé"
                });
            }
        }
    });
};
const createAutheur = (req, res) => {
    const nouveauAutheur = {
        nom: req.body.nom,
        prenom: req.body.prenom
    };

    autheurModel.createAutheur(nouveauAutheur, (error, autheurId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création de l'autheur"
            });
        } else {
            res.send({ id: autheurId, ...nouveauAutheur });
        }
    });
};

  
const deleteAutheur = (req, res) => {
    const autheurId = req.params.id;

    autheurModel.deleteAutheur(autheurId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression de l'autheur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ message: "Autheur supprimé avec succès" });
            } else {
                res.status(404).send({
                    message: "Autheur non trouvé"
                });
            }
        }
    });
};
module.exports = {
    getAllAutheurs,
    getAutheurById,
    updateAutheur,
    createAutheur,
    deleteAutheur
};
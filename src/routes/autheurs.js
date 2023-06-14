// ----------------------------------------------
// Import du module Router d'Express pour la gestion des routes
// ----------------------------------------------
const router = require('express').Router();

// ----------------------------------------------
// Import des fonctions du contrôleur des auteurs
// ----------------------------------------------
const {
    getAllAutheurs,
    getAutheurById,
    updateAutheur,
    createAutheur,
    deleteAutheur

} = require('../controllers/autheur.controller');

// ----------------------------------------------
// Récupérer l'ensembles des autheurs
// ----------------------------------------------
/**
 * @swagger
 * /autheurs:
 *   get:
 *     tags:
 *       - Auteur
 *     summary: Récupérer tous les auteurs.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les auteurs récupérés.
 */
router.get('/', getAllAutheurs);


// ----------------------------------------------
// Récupérer un autheur par l'identifiant
// ----------------------------------------------
/**
 * @swagger
 * /autheurs/{id}:
 *   get:
 *     tags:
 *       - Auteur
 *     summary: Récupérer un auteur par ID.
 *     description: Récupérer un auteur de la base de données en utilisant son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l'auteur à récupérer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec l'auteur récupéré.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autheur'
 */
router.get('/:id', getAutheurById);

// ----------------------------------------------
// ajouter un autheur
// ----------------------------------------------
/**
 * @swagger
 * /autheurs:
 *   post:
 *     tags:
 *       - Auteur
 *     summary: Créer un auteur.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AutheurInput'
 *     responses:
 *       200:
 *         description: Succès de la requête avec l'auteur créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autheur'
 */
router.post('/', createAutheur);


// ----------------------------------------------
// modifier un autheur par son identifiant
// ----------------------------------------------
/**
 * @swagger
 * /autheurs/{id}:
 *   put:
 *     tags:
 *       - Auteur
 *     summary: Mettre à jour un auteur par ID.
 *     description: Mettre à jour un auteur de la base de données en utilisant son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l'auteur à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AutheurInput'
 *     responses:
 *       200:
 *         description: Succès de la requête avec l'auteur mis à jour.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autheur'
 */
router.put('/:id', updateAutheur);


// ----------------------------------------------
// supprimer un autheur par son identifiant
// ----------------------------------------------
/**
 * @swagger
 * /autheurs/{id}:
 *   delete:
 *     tags:
 *       - Auteur
 *     summary: Supprimer un auteur par ID.
 *     description: Supprimer un auteur de la base de données en utilisant son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l'auteur à supprimer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec l'auteur supprimé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autheur'
 */
router.delete('/:id', deleteAutheur);

module.exports = router;
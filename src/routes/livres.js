// ----------------------------------------------
// Import du module Router d'Express pour la gestion des routes
// ----------------------------------------------
const router = require('express').Router();

// ----------------------------------------------
// Import des fonctions du contrôleur des livres
// ----------------------------------------------
const {
    getAllLivres,
    getLivreById,
    updateLivre,
    createLivre,
    deleteLivre

} = require('../controllers/livre.controller');
// ----------------------------------------------
// Récupérer l'ensembles des livre
// ----------------------------------------------
/**
 * @swagger
 * /livres:
 *   get:
 *     tags:
 *       - Livre
 *     summary: Récupérer toutes les livres.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les livres récupérées.
 */
router.get('/', getAllLivres);

// ----------------------------------------------
// Récupérer un livre par l'identifiant
// ----------------------------------------------
/**
 * @swagger
 * /livres/{id}:
 *   get:
 *     tags:
 *       - Livre
 *     summary: Récupérer un livre par ID
 *     description: Récupérer un livre de la base de données en utilisant son ID.
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
router.get('/:id', getLivreById);

// ----------------------------------------------
// ajouter un livre
// ----------------------------------------------
/**
 * @swagger
 * /livres:
 *   post:
 *     tags:
 *       - Livre
 *     summary: Créer un livre
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LivreInput'
 *     responses:
 *       200:
 *         description: Succès de la requête avec le livre créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livre'
 */
router.post('/', createLivre);

// ----------------------------------------------
// modifier un livre par son identifiant
// ----------------------------------------------
/**
 * @swagger
 * /livres/{id}:
 *   put:
 *     tags:
 *       - Livre
 *     summary: Mettre à jour un livre par ID
 *     description: Mettre à jour un livre de la base de données en utilisant son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du livre à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LivreInput'
 *     responses:
 *       200:
 *         description: Succès de la requête avec le livre mis à jour.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livre'
 */
router.put('/:id', updateLivre);

// ----------------------------------------------
// supprimer un livre par son identifiant
// ----------------------------------------------
/**
 * @swagger
 * /livres/{id}:
 *   delete:
 *     tags:
 *       - Livre
 *     summary: Supprimer un livre par ID
 *     description: Supprimer un livre de la base de données en utilisant son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du livre à supprimer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec le livre supprimé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livre'
 */
router.delete('/:id', deleteLivre);

module.exports = router;

 

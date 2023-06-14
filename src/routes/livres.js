const router = require('express').Router();

const {
    getAllLivres,
    getLivreById,
    updateLivre,
    createLivre,
    deleteLivre

} = require('../controllers/livre.controller');
// ----------------------------------------------
// Récupérer l'enssembles des livre
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

 

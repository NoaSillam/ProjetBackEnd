const router = require('express').Router();

const {
    getAllLivres
} = require('../controllers/livre.controllers');

router.get('/', getAllLivres);


module.exports = router;
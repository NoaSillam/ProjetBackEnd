const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

const getConfigSwagger = require('../middlewares/swagger.middlewares');
const livreRoutes = require('./livre.route');

router.use('/doc', swaggerUi.serve);
router.get('/doc', swaggerUi.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest));
router.use('/livre', livreRoutes);
module.exports = router;
const router = require('express').Router();
const seedRoutes = require('./seedRoutes');
const plantRoutes = require('./plantRoutes');

router.use('/seeds', seedRoutes);
router.use('/plants', plantRoutes);

module.exports = router;
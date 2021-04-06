const router = require('express').Router();
const seedController = require('../../controllers/seedController');

router.route('/')
  .get( seedController.findAll )
  .post( seedController.create );

/* router.route('/:id')
  .get()
  .put()
  .patch()
  .delete(); */

/* router.route('/search')
  .get(); */

module.exports = router;
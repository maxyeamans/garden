const router = require('express').Router();
const plantController = require('../../controllers/plantController');

router.route('/')
  .get( plantController.findAll )
  .post( plantController.create );

/* router.route('/:id')
  .get()
  .put()
  .patch()
  .delete(); */

/* router.route('/search')
  .get(); */

module.exports = router;
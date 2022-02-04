const router = require("express").Router();
const apiController = require('../controllers/apiControllers');

router.post('/user', apiController.addUser)
router.get('/users',apiController.getUser)
router.get('/users/identitynumber', apiController.getUserbyID)

module.exports = router;
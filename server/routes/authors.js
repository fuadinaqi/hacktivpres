var express = require('express');
var router = express.Router();
var controllerAuthor = require('../controllers/controllerAuthor')
var middleware = require('../middleware/authLogin')

router.post('/signup', controllerAuthor.signUp)
router.post('/signin', controllerAuthor.signIn)

module.exports = router;

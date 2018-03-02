var express = require('express');
var router = express.Router();
var controllerArticle = require('../controllers/controllerArticle')
var middleware = require('../middleware/authLogin')
var images = require('../helpers/image')

router.get('/', controllerArticle.getAll)
router.get('/profile', middleware.authLogin, controllerArticle.getProfile)
router.post('/create', middleware.authLogin, controllerArticle.create)
router.post('/upload', middleware.authLogin, images.multer.single('image'), images.sendUploadToGCS)
router.get('/category', controllerArticle.getByCategory)
router.get('/:id', controllerArticle.getById)
router.put('/:id', middleware.authLogin, controllerArticle.update)
router.delete('/:id', middleware.authLogin, controllerArticle.destroy)

module.exports = router;

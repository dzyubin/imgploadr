const path = require('path'),
  express = require('express'),
  router = express.Router(),
  home = require('../controllers/home'),
  image = require('../controllers/image'),
  multer = require('multer');

module.exports = (app) => {
  router.get('/', home.index);
  router.get('/images/:image_id', image.index);

  // router.post('/images', image.create);

  router.post('/images', multer({
    dest: path.join(__dirname, '../public/upload/temp')
  }).single('file'), image.create);

  router.post('/images/:image_id/like', image.like);
  router.post('/images/:image_id/comment', image.comment);

  router.delete('/images/:image_id', image.remove);

  app.use(router);
};
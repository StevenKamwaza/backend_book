const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const myGalleyItems = require("../services/myGalleryItems");



// Set up multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../images");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });

/* GET all images */
router.get('/', async function(req, res, next) {
  try {
    res.json(await myGalleyItems.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting galleys `, err.message);
    next(err);
  }
});
/* GET a galley */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await myGalleyItems.postItem(req.params.id));
  } catch (err) {
    console.error(`Error while getting single galley `, err.message);
    next(err);
  }
});

/* insert a galley */
router.post('/',upload.single("image"), async function(req, res, next) {
  try {
    res.json(await myGalleyItems.create(req.body,req.file.filename));
  } catch (err) {
    console.error(`Error while creating galley`, err.message);
    next(err);
  }
});
/* update/edit a galley */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await myGalleyItems.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating galley`, err.message);
    next(err);
  }
});
/* deleting  a galley */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await myGalleyItems.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting galley`, err.message);
    next(err);
  }
});
module.exports = router;
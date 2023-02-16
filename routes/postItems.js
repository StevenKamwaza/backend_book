const express = require('express');
const router = express.Router();
const myPostItems = require("../services/myPostItems");

/* GET all posts */
router.get('/', async function(req, res, next) {
  try {
    res.json(await myPostItems.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting posts `, err.message);
    next(err);
  }
});
/* GET a post */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await myPostItems.postItem(req.params.id));
  } catch (err) {
    console.error(`Error while getting single post post`, err.message);
    next(err);
  }
});

/* insert a post */
router.post('/', async function(req, res, next) {
  try {
    res.json(await myPostItems.create(req.body));
  } catch (err) {
    console.error(`Error while creating post`, err.message);
    next(err);
  }
});
/* update/edit a post */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await myPostItems.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating post`, err.message);
    next(err);
  }
});
/* deleting  a post */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await myPostItems.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting post`, err.message);
    next(err);
  }
});
module.exports = router;
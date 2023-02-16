const express = require('express');
const router = express.Router();
const ourPartners = require("../services/ourPartners");

/* GET all partners */
router.get('/', async function(req, res, next) {
  try {
    res.json(await ourPartners.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting partners `, err.message);
    next(err);
  }
});
/* GET a partner */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await ourPartners.postItem(req.params.id));
  } catch (err) {
    console.error(`Error while getting single partner`, err.message);
    next(err);
  }
});

/* insert a partner */
router.post('/', async function(req, res, next) {
  try {
    res.json(await ourPartners.create(req.body));
  } catch (err) {
    console.error(`Error while creating partner`, err.message);
    next(err);
  }
});
/* update/edit a partner */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await ourPartners.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating partner`, err.message);
    next(err);
  }
});
/* deleting  a partner */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await ourPartners.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting partner`, err.message);
    next(err);
  }
});
module.exports = router;
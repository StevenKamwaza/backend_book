const express = require('express');
const router = express.Router();
const myTestimonials = require("../services/myTestimonials");

/* GET all testmonials */
router.get('/', async function(req, res, next) {
  try {
    res.json(await myTestimonials.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting testmonials `, err.message);
    next(err);
  }
});
/* GET a testmonial */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await myTestimonials.postItem(req.params.id));
  } catch (err) {
    console.error(`Error while getting single testmonial testmonial`, err.message);
    next(err);
  }
});

/* insert a testmonial */
router.post('/', async function(req, res, next) {
  try {
    res.json(await myTestimonials.create(req.body));
  } catch (err) {
    console.error(`Error while creating testmonial`, err.message);
    next(err);
  }
});
/* update/edit a testmonial */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await myTestimonials.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating testmonial`, err.message);
    next(err);
  }
});
/* deleting  a testmonial */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await myTestimonials.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting testmonial`, err.message);
    next(err);
  }
});
module.exports = router;
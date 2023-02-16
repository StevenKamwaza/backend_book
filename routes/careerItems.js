const express = require('express');
const router = express.Router();
const availableCareers = require("../services/availableCareers");

/* GET all careers */
router.get('/', async function(req, res, next) {
  try {
    res.json(await availableCareers.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting careers `, err.message);
    next(err);
  }
});
/* GET a career */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await availableCareers.careerItem(req.params.id));
  } catch (err) {
    console.error(`Error while getting single career career`, err.message);
    next(err);
  }
});

/* insert a career */
router.post('/', async function(req, res, next) {
  try {
    res.json(await availableCareers.create(req.body));
  } catch (err) {
    console.error(`Error while creating career`, err.message);
    next(err);
  }
});
/* update/edit a career */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await availableCareers.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating career`, err.message);
    next(err);
  }
});
/* deleting  a career */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await availableCareers.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting career`, err.message);
    next(err);
  }
});
module.exports = router;
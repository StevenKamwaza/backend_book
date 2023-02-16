const express = require('express');
const router = express.Router();
const ourVacancies = require("../services/ourVacancies");

/* GET all vacancys */
router.get('/', async function(req, res, next) {
  try {
    res.json(await ourVacancies.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting vacancys `, err.message);
    next(err);
  }
});
/* GET a vacancy */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await ourVacancies.vacancyItem(req.params.id));
  } catch (err) {
    console.error(`Error while getting single vacancy vacancy`, err.message);
    next(err);
  }
});

/* insert a vacancy */
router.post('/', async function(req, res, next) {
  try {
    res.json(await ourVacancies.create(req.body));
  } catch (err) {
    console.error(`Error while creating vacancy`, err.message);
    next(err);
  }
});
/* update/edit a vacancy */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await ourVacancies.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating vacancy`, err.message);
    next(err);
  }
});
/* deleting  a vacancy */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await ourVacancies.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting vacancy`, err.message);
    next(err);
  }
});
module.exports = router;
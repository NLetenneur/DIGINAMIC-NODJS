const {
  destroy,
  getAll,
  update,
  store,
} = require("../controler/taskControler");
const {
  validateIdParam,
  validateBodyParam,
  validate,
} = require("../validator/taskValidator");

const express = require("express");
const router = express.Router();

router.get("/task", getAll);
router.post("/task", validateBodyParam, validate, store);
router.put("/task/:id", validateIdParam, validateBodyParam, validate, update);
router.delete("/task/:id", validateIdParam, validate, destroy);

module.exports = router;

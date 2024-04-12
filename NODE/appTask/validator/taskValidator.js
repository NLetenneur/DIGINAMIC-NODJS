const { body, param, validationResult } = require("express-validator");
const tasks = require("../repository/taskRepository");

const validateIdParam = [
  param("id")
    .notEmpty()
    .isNumeric()
    .custom((id) => tasks.findIndex((task) => task.id === parseInt(id)) !== -1),
];

const validateBodyParam = [
  body("titre")
    .notEmpty()
    .isString()
    .withMessage("Le titre doit être en lettres"),
  body("description")
    .isString()
    .optional({ nullable: true })
    .withMessage("La description doit être en lettres"),
  body("date_debut")
    .isDate()
    .optional({ nullable: true })
    .withMessage("La date n'est pas une date"),
  body("date_fin")
    .isDate()
    .optional({ nullable: true })
    .withMessage("La date n'est pas une date"),
  body("done").isBoolean().optional({ nullable: true }),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array() });
  }

  next();
};

module.exports = { validateIdParam, validate, validateBodyParam };

const controller = require("../controler/taskController.js");
const express = require("express");
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;

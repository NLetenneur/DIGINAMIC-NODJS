const Task = require("../model/task.js");
const controller = {};

controller.getAll = (req, res) => {
  Task.findAll().then((queryResult) => {
    res.render("index", { tasks: queryResult });
  });
};

controller.create = (req, res) => {
  res.render("create");
};

controller.edit = (req, res) => {
  Task.findByPk(req.params.id).then((task) => {
    res.render("edit", { task: task });
  });
};

controller.store = (req, res) => {
  const task = {
    titre: req.body.titre,
    description: req.body.description,
    date_debut:
      req.body.date_debut ?? new Date(Date.now()).toLocaleString("en-US"),
    date_fin: Date.parse(req.body.date_fin),
    done: Boolean(req.body.done),
  };

  console.log(task);

  Task.create(task)
    .then((task) => {
      res.redirect("/task");
    })
    .catch((err) => {
      res.send(err);
    });
};

controller.update = (req, res) => {
  const task = {
    titre: req.body.titre,
    description: req.body.description,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    done: req.body.done,
  };

  Task.update(task, { where: { id: req.params.id } })
    .then((task) => res.redirect("/task"))
    .catch((err) => {
      res.send(err);
    });
};

controller.destroy = (req, res) => {
  Task.destroy({ where: { id: req.params.id } }).then(() =>
    res.redirect("/task")
  );
};

module.exports = controller;

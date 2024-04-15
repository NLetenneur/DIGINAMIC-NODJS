const controller = {};
const Task = require("../model/task.js");

controller.getAll = (req, res) => {
  Task.find()
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};

controller.store = (req, res) => {
  const task_data = {
    titre: req.body.titre,
    description: req.body.description,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    done: req.body.done,
  };

  Task.create(task_data)
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};

controller.update = (req, res) => {
  const task_data = {};

  if (req.body.titre != undefined) task_data.titre = req.body.titre;
  if (req.body.description != undefined)
    task_data.description = req.body.description;
  if (req.body.date_debut != undefined)
    task_data.date_debut = req.body.date_debut;
  if (req.body.date_fin != undefined) task_data.date_fin = req.body.date_fin;
  if (req.body.done != undefined) task_data.date_done = req.body.done;

  Task.updateOne({ _id: req.params.id }, task_data)
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};

controller.destroy = (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.json(err));
};

module.exports = controller;

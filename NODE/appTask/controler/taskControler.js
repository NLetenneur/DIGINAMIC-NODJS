const Task = require("../model/task.js");

const getAll = (req, res) => {
  Task.findAll().then((tasks) => res.json(tasks));
};

const store = (req, res) => {
  console.log("Body :");

  console.log(req.body);
  const task = {
    id: Date.now(),
    titre: req.body.titre,
    description: req.body.description,
    date_debut:
      req.body.date_debut ?? new Date(Date.now()).toLocaleString("en-US"),
    date_fin: Date.parse(req.body.date_fin),
    done: Boolean(req.body.done),
  };
  Task.create(task)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      res.send(err);
    });
}; // Créer une tâche

const update = (req, res) => {
  const task = {
    titre: req.body.titre,
    description: req.body.description,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    done: req.body.done,
  };

  Task.update(task, { where: { id: req.params.id } })
    .then((task) => res.send(task))
    .catch((err) => {
      res.send(err);
    });

  res.send(task);
}; // modifier

const destroy = (req, res) => {
  Task.destroy({ where: { id: req.params.id } }).then(() =>
    res.send("task deleted")
  );
}; // supprimer

module.exports = { destroy, getAll, update, store };

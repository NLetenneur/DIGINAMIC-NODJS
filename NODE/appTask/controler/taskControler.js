const tasks = require("../repository/taskRepository");

const getAll = (req, res) => {
  res.json(tasks);
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
  tasks.push(task);
  res.send(task);
}; // Créer une tâche

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  const task = {
    id: id,
    titre: req.body.titre ?? tasks[index].titre,
    description: req.body.description ?? tasks[index].description,
    date_debut: req.body.date_debut ?? tasks[index].date_debut,
    date_fin: req.body.date_fin ?? tasks[index].date_fin,
    done: req.body.done ?? tasks[index].done,
  };

  tasks[index] = task;

  res.send(task);
}; // modifier

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);

  res.send("task deleted");
}; // supprimer

module.exports = { destroy, getAll, update, store };

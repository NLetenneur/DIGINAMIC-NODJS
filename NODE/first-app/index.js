const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("App running on port 3000");
});

// // localhost:3000/
// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

// // localhost:3000/hello/tata
// app.get("/hello/:name", (req, res) => {
//   const name = req.params.name
//   res.send(`Hello ${name}`);
// })

// // localhost:3000/params?name=toto
// app.get("/param", (req, res) => {
//   const name = req.query.name
//   const lastname = req.query.lastname
//   res.send(`Hello ${name} ${lastname}`);
// })

/* app.post("/body", (req, res) => {
  console.log(req.body);
  res.send(products);
}); */

/* const products = [
  {
    id: new Date.now(),
    name: req.query.name,
    quantity: parseInt(req.query.quantity),
    price: parseFloat(req.query.price),
  },
]; */

// CRUD

// Create POST
// Read GET
// Update PUT/PATCH
// Delete DELETE

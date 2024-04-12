const products = [
  { id: 1, name: "souris", quantity: 12, price: 15.5 },
  { id: 2, name: "souris", quantity: 12, price: 15.5 },
];

const getAll = (req, res) => {
  app.get("/product", (req, res) => {
    res.send(products);
  });
}; // Liste

const store = (req, res) => {
  app.post("/product", (req, res) => {
    console.log("Body :");

    console.log(req.body);
    const product = {
      id: Date.now(),
      quantity: req.body.quantity,
      name: req.body.name,
      price: req.body.price,
    };
    products.push(product);
    res.send(product);
  }); // Créer un produit
};

const update = (req, res) => {
  app.put("/product/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex((product) => product.id === id);
    const product = {
      id: id,
      quantity: parseInt(req.body.quantity),
      name: req.body.name,
      price: parseFloat(req.body.price),
    };

    products[index] = product;

    res.send(product);
  }); // modifier
};

const erase = (req, res) => {
  app.delete("/product/:id", (req, res) => {
    const id = parseInt(req.body.id);
    const index = products.findIndex((product) => product.id === id);
    products.splice(index, 1);

    res.send("Product deleted");
  }); // supprimer
};

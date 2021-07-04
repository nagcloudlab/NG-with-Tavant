var express = require("express");
var router = express.Router();

let items = [
  {
    id: 1,
    name: "Laptop",
    price: 1000.0,
    description: "New Mac pro",
  },
  {
    id: 2,
    name: "Mobile",
    price: 2000.0,
    description: "New pro",
  },
];

router
  .get("/", function (req, res, next) {
    setTimeout(() => {
      res.json(items);
    }, 0);
  })
  .delete("/:itemId", function (req, res, next) {
    let itemId = Number.parseInt(req.params.itemId);
    items = items.filter((item) => item.id !== itemId);
    res.json({ count: 1 });
  })
  .post("/", (req, res, next) => {
    let item = req.body;
    item.id = items.length + 1;
    items.push(item);
    res.status(201).json({ message: "item saved" });
  });

module.exports = router;

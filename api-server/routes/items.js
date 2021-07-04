var express = require("express");
var router = express.Router();

const items = [
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

router.get("/", function (req, res, next) {
  setTimeout(() => {
    res.json(items);
  }, 0);
});

module.exports = router;

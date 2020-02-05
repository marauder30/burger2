const db = require("../models");

module.exports = function(app) {

    // GET route for getting all burgers
    app.get("/api/burgers/", function(req, res) {
        db.Burger.findAll({})
        .then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    // POST route for saving a new burger
    app.post("api/burgers/", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        })
          .then(function(dbBurger) {
              res.json(dbBurger);
          });
    });

    // PUT route for updating burger to devoured
    app.put("/api/burgers/", function(req, res) {
        db.Burger.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
              .then(function(dbBurger) {
                  res.json(dbBurger);
              });
    });
};
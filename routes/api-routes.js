const db = require("../models");

module.exports = function(app) {

    app.get("/api/burgers/", function(req, res) {
        db.Burger.findAll({})
        .then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.post("api/burgers/", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        })
          .then(function(dbBurger) {
              res.json(dbBurger);
          });
    });

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
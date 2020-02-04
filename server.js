let express = require("express");
let app = express();
let PORT = process.env.PORT || 8080;

let db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

// let exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");

app.use(routes);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`Server listening on: http://localhost: ${PORT}`);
    });
});

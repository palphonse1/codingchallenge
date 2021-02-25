const routes = require('./routes/routes');
const port = process.env.PORT || 3000;

var express = require("express");
var app = express();

app.use(express.json());

routes(app);

module.exports = app.listen(port, () => {
    console.log("Server running on port " + port);
});
var express = require("express")
var mongoose = require("mongoose")
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect("mongodb://localhost/dbFitness", { useNewUrlParser: true });


//require("./routes/api_routes")(app);
require("./routes/html_routes")(app);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
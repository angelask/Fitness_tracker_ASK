var express = require("express");
var mongoose = require("mongoose");

const PORT = process.env.PORT || 3003;

const app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbFitness", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(require("./routes/api_routes"));
require("./routes/html_routes")(app);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
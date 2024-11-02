const express = require('express');
const app = express();

app.all("/", (req, res) => res.send("Compute Controls under development."))

app.listen(3100, () => console.log("App is being listened at port 3100"))
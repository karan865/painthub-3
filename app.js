const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config({ path: "./config.env" });

require('./db/conn');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(
	cors({
		credentials: true
	})
);

app.use(require('./router/auth'));

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`backend is running at port no ${port}`);
});


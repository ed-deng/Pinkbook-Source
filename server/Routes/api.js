const express = require("express");
const router = express.Router();

const notebookController = require("../Controllers/notebookController");

//CONNECT with Faraz and Cindy to identify endpoints

//GET request

router.get("/", notebookController.getNotebooks, (req, res) =>
  res.status(200).json(res.locals)
);

//POST request

//PUT request

//DELETE request

module.exports = router;

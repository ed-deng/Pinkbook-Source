const express = require("express");
const router = express.Router();

const notebookController = require("../Controllers/notebookController");

//CONNECT with Faraz and Cindy to identify endpoints

//GET request

router.get("/", notebookController.getNotebooks, (req, res) =>
  res.status(200).json(res.locals)
);

//POST request

router.post("/", notebookController.addNotebook, (req, res) =>
  res.status(200).json(res.locals)
);

//PUT request
router.put("/:id", notebookController.updateNotebook, (req, res) => {
  res.status(200).json(res.locals.updateNotebook);
});
//DELETE request

router.delete("/:id", notebookController.deleteNotebook, (req, res) =>
  res.status(200).json({ msg: "deleted succesfully" })
);

module.exports = router;

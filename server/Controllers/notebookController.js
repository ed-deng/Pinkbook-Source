const db = require("../Models/pinkbooksql.js");

const notebookController = {};

console.log("test");
console.log("test");
console.log("test");
console.log("test");
console.log("test");
console.log("test");
console.log("test");
console.log("test");

//Get all notebooks

notebookController.getNotebooks = (req, res, next) => {
  const allNotebooksSQL = "SELECT * FROM notebook";
  db.query(allNotebooksSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows;
    next();
  });
};

//Add notebooks

notebookController.addNotebook = (req, res, next) => {
  const addNotebookSQL = {
    text:
      "INSERT INTO notebook (_id, name, description, date_created, page_number, date_updated, shared_with) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    values: [
      req.body["_id"],
      req.body.name,
      req.body.description,
      req.body["date_created"],
      req.body["page_number"],
      req.body["date_updated"],
      req.body["shared_with"],
    ],
  };

  db.query(addNotebookSQL, notebookInfo, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows[0];
    next();
  });
};

//Update notebook
notebookController.updateNotebook = (req, res, next) => {
  const updateNotebookSQL = {
    text:
      "UPDATE notebook SET (_id, name, description, date_updated, shared_with) = ($1, $2, $3, $4, $5) WHERE _id = $6 ",
    values: [
      req.body._id,
      req.body.description,
      req.body.date_updated,
      req.body.shared_with,
    ],
  };

  db.query(updateNotebookSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    return next;
  });
};

//Delete notebooks
notebookController.deleteNotebook = (req, res, next) => {
  const deleteNotebookSQL = {
    text: "DELETE FROM notebook WHERE _id = ($1)",
    values: [req.params._id],
  };
  db.query(deleteNotebookSQL, (error, response) => {});
};

//---------------------------------------------------------------------------------------------------------------------------------

//Get all Notes, Skills, Reminders

//Add notes

//Update notes

//Delete notes

//---------------------------------------------------------------------------------------------------------------------------------

//Add skills

//Update skills

//Delete notebook

//---------------------------------------------------------------------------------------------------------------------------------

//Add reminders

//Update reminders

//Delete reminders

notebookController.module.exports = notebookController;

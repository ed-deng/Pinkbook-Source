const db = require("../Models/pinkbooksql.js");

const notebookController = {};

//Get all notebooks

notebookController.getNotebooks = (req, res, next) => {
  const allNotebooksSQL = "SELECT * FROM notebook";
  db.query(allNotebooksSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows;
    return next();
  });
};

//Add notebooks

notebookController.addNotebook = (req, res, next) => {
  const addNotebookSQL = {
    text:
      "INSERT INTO notebook (name, description, date_created, page_number, date_updated, shared_with) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    values: [
      req.body.name,
      req.body.description,
      req.body["date_created"],
      req.body["page_number"],
      req.body["date_updated"],
      req.body["shared_with"],
    ],
  };

  db.query(addNotebookSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    console.log(response);
    res.locals = response.rows[0];
    return next();
  });
};

//Update notebook
notebookController.updateNotebook = (req, res, next) => {
  const updateNotebookSQL = {
    text:
      "UPDATE notebook SET (_id, name, description, date_updated, shared_with) = ($1, $2, $3, $4, $5) WHERE _id = $1 RETURNING *",
    values: [
      req.params.id,
      req.body.name,
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
    res.locals.updateNotebook = response.rows[0];
    return next();
  });
};

//Delete notebooks
notebookController.deleteNotebook = (req, res, next) => {
  const deleteNotebookSQL = {
    text: "DELETE FROM notebook WHERE _id = ($1)",
    values: [req.params.id],
  };
  db.query(deleteNotebookSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(err);
    }
    return next();
  });
};

//---------------------------------------------------------------------------------------------------------------------------------

//Get all Notes, Skills, Reminders

notebookController.allComponents = (req, res, next) => {};

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

module.exports = notebookController;

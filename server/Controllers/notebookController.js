const { response } = require("express");
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

//When adding a new notebook, we also add in a new row into our notes, reminders, and skills tables
//to ensure that those components will render on the page after adding in a new notebook

//Add notebooks
notebookController.addNotebook = (req, res, next) => {
  const addNotebookSQL = {
    text:
      "INSERT INTO notebook (_id, name, description, date_created, page_number, date_updated, shared_with) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    values: [
      req.body._id,
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

//Adding notes when adding a new notebook
notebookController.addNotesForAddingNotebook = (req, res, next) => {
  const addNotesSQL = {
    text: "INSERT INTO notes (notebook_id) VALUES ($1)",
    values: [req.body._id],
  };
  db.query(addNotesSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows[0];
    return next();
  });
};

//Adding skills when adding a new notebook
notebookController.addSkillsForAddingNotebook = (req, res, next) => {
  const addSkillsForAddingNotebookSQL = {
    text: "INSERT INTO skills (notebook_id) VALUES ($1)",
    values: [req.body._id],
  };
  db.query(addSkillsForAddingNotebookSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows[0];
    return next();
  });
};

//Adding reminders when adding a new notebook
notebookController.addRemindersForAddingNotebook = (req, res, next) => {
  const addRemindersSQL = {
    text: "INSERT INTO reminders (notebook_id) VALUES ($1)",
    values: [req.body._id],
  };
  db.query(addRemindersSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
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

//When deleting a notebook, we also need to make sure to remove any corresponding rows
//from our notes, reminders and skills tables that are related to that notebook

//Delete notebooks part 4, deleting actual notebook
notebookController.deleteNotebook = (req, res, next) => {
  const deleteNotebookSQL = {
    text: "DELETE FROM notebook WHERE _id = ($1)",
    values: [req.params.id],
  };
  db.query(deleteNotebookSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    return next();
  });
};

//Delete corresponding notes when deleting a notebook
notebookController.deleteNotesForDeletingNotebook = (req, res, next) => {
  const deleteNotesSQL = {
    text: "DELETE FROM notes WHERE notebook_id = ($1)",
    values: [req.params.id],
  };
  db.query(deleteNotesSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(err);
    }
    return next();
  });
};

//Delete corresponding skills when deleting a notebook
notebookController.deleteSkillsForDeletingNotebook = (req, res, next) => {
  const deleteSkillsSQL = {
    text: "DELETE FROM skills WHERE notebook_id = ($1)",
    values: [req.params.id],
  };
  db.query(deleteSkillsSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    return next();
  });
};

//Delete corresponding reminders when deleting a notebook
notebookController.deleteRemindersForDeletingNotebook = (req, res, next) => {
  const deleteRemindersSQL = {
    text: "DELETE FROM reminders WHERE notebook_id = ($1)",
    values: [req.params.id],
  };
  db.query(deleteRemindersSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    return next();
  });
};

//---------------------------------------------------------------------------------------------------------------------------------

//Get all Notes, Skills, Reminders

notebookController.allComponents = (req, res, next) => {
  const allComponentsSQL =
    "SELECT notes._id as notes_id, notes.notebook_id, notes.textbox as notes_textbox, notes.date_created as notes_date_created,  notes.page_number, notes.shared_with, skills._id as skill_id, skills.name as skill_name, skills.rating as skill_rating, reminders.description as reminder_description, reminders.date_created as reminders_date_created, reminders.time as reminder_time FROM notes LEFT OUTER JOIN skills ON notes.notebook_id = skills.notebook_id LEFT OUTER JOIN reminders ON notes.notebook_id = reminders.notebook_id";

  db.query(allComponentsSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows;
    return next();
  });
};

//Add notes
notebookController.addNotes = (req, res, next) => {
  const addNotesSQL = {
    text:
      "INSERT INTO notes (_id, notebook_id, textbox, date_created, page_number,date_updated, shared_with) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    values: [
      req.body._id,
      req.body.notebook_id,
      req.body.textbox,
      req.body.date_created,
      req.body.page_number,
      req.body.date_updated,
      req.body.shared_with,
    ],
  };
  db.query(addNotesSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows[0];
    return next();
  });
};
//Update notes

notebookController.updateNotes = (req, res, next) => {
  const updateNotesSQL = {
    text:
      "UPDATE notes SET (_id, textbox, date_created, page_number, date_updated, shared_with) = ($1, $2, $3, $4, $5, $6) WHERE _id = $1 RETURNING *",
    values: [
      req.params.id,
      req.body.textbox,
      req.body.date_created,
      req.body.page_number,
      req.body.date_updated,
      req.body.shared_with,
    ],
  };
  db.query(updateNotesSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals.updateNotebook = response.rows[0];
    return next();
  });
};

//Delete notes

notebookController.deleteNotes = (req, res, next) => {
  const deleteNotesSQL = {
    text: "DELETE FROM notes WHERE _id = ($1)",
    values: [req.params.id],
  };
  db.query(deleteNotesSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    return next();
  });
};

//---------------------------------------------------------------------------------------------------------------------------------

//Add skills
notebookController.addSkills = (req, res, next) => {
  const addSkillsSQL = {
    text:
      "INSERT INTO skills (_id, notebook_id, name, rating) VALUES ($1, $2, $3, $4)",
    values: [
      req.body._id,
      req.body.notebook_id,
      req.body.name,
      req.body.rating,
    ],
  };
  db.query(addSkillsSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows[0];
    return next();
  });
};

//Update skills
notebookController.updateSkills = (req, res, next) => {
  const updateSkillsSQL = {
    text:
      "UPDATE SKILLS SET (_id, notebook_id, name, rating) = ($1, $2, $3, $4) WHERE _id = $1 RETURNING *",
    values: [
      req.body._id,
      req.body.notebook_id,
      req.body.name,
      req.body.rating,
    ],
  };
  db.query(updateSkillsSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals.updateSkills = response.rows[0];
    return next();
  });
};

//Delete notebook
notebookController.deleteSkills = (req, res, next) => {
  const deleteSkillsSQL = {
    text: "DELETE FROM skills WHERE _id = ($1)",
    values: [req.params.id],
  };
  db.query(deleteSkillsSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    return next();
  });
};

//---------------------------------------------------------------------------------------------------------------------------------

//Add reminders

notebookController.addReminders = (req, res, next) => {
  const addRemindersSQL = {
    text:
      "INSERT INTO reminders (_id, notebook_id, description, date_created, time) VALUES ($1, $2, $3, $4, $5)",
    values: [
      req.body._id,
      req.body.notebook_id,
      req.body.description,
      req.body.date_created,
      req.body.time,
    ],
  };
  db.query(addRemindersSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals = response.rows[0];
    return next();
  });
};

//Update reminders
notebookController.updateReminders = (req, res, next) => {
  const updateRemindersSQL = {
    text:
      "UPDATE REMINDERS SET (_id, notebook_id, description, date_created, time) = ($1, $2, $3, $4, $5) WHERE _id = $1",
    values: [
      req.body._id,
      req.body.notebook_id,
      req.body.description,
      req.body.date_created,
      req.body.time,
    ],
  };
  db.query(updateRemindersSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.locals.updateReminders = response.rows[0];
    return next();
  });
};
//Delete reminders
notebookController.deleteReminders = (req, res, next) => {
  const deleteRemindersSQL = {
    text: "DELETE FROM reminders WHERE _id = ($1)",
    values: [req.params.id],
  };
  db.query(deleteRemindersSQL, (error, response) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    return next();
  });
};

module.exports = notebookController;

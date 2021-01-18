const express = require("express");
const router = express.Router();

const notebookController = require("../Controllers/notebookController");

//CONNECT with Faraz and Cindy to identify endpoints

//GET request

router.get("/", notebookController.getNotebooks, (req, res) =>
  res.status(200).json(res.locals)
);

//POST request

router.post(
  "/",
  notebookController.addNotebook,
  notebookController.addNotesForAddingNotebook,
  notebookController.addSkillsForAddingNotebook,
  notebookController.addRemindersForAddingNotebook,
  (req, res) => res.status(200).json(res.locals)
);

//PUT request
router.put("/:id", notebookController.updateNotebook, (req, res) => {
  res.status(200).json(res.locals.updateNotebook);
});
//DELETE request

router.delete(
  "/:id",
  notebookController.deleteNotesForDeletingNotebook,
  notebookController.deleteSkillsForDeletingNotebook,
  notebookController.deleteRemindersForDeletingNotebook,
  notebookController.deleteNotebook,
  (req, res) => res.status(200).json({ msg: "notebook deleted" })
);

//GET REQUEST FOR ALL NOTES, SKILLS, REMINDERS

router.get("/all", notebookController.allComponents, (req, res) =>
  res.status(200).json(res.locals)
);

//Post request to add notes
router.post("/notes", notebookController.addNotes, (req, res) => {
  res.status(200).json(res.locals);
});
//Put request to update notes
router.put("/notes/:id", notebookController.updateNotes, (req, res) =>
  res.status(200).json(res.locals.updateNotebook)
);

router.delete("/notes/:id", notebookController.deleteNotes, (req, res) =>
  res.status(200).json({ msg: "note deleted" })
);

//Post request to add skills

router.post("/skills", notebookController.addSkills, (req, res) =>
  res.status(200).json(res.locals)
);

//Put request to update skills
router.put("/skills/:id", notebookController.updateSkills, (req, res) =>
  res.status(200).json(res.locals.updateSkills)
);

//Delete request to delete skills
router.delete("/skills/:id", notebookController.deleteSkills, (req, res) => {
  res.status(200).json({ msg: "skills deleted" });
});

//Post request to add reminders
router.post("/reminders", notebookController.addReminders, (req, res) => {
  res.status(200).json(res.locals);
});
//Put request to update reminders
router.put("/reminders/:id", notebookController.updateReminders, (req, res) => {
  res.status(200).json(res.locals.updateReminders);
});

//Delete request to delete reminders
router.delete(
  "/reminders/:id",
  notebookController.deleteReminders,
  (req, res) => {
    res.status(200).json({ msg: "reminders deleted" });
  }
);

module.exports = router;

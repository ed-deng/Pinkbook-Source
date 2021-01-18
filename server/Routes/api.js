const express = require('express');
const router = express.Router();

const notebookController = require('../Controllers/notebookController');

//CONNECT with Faraz and Cindy to identify endpoints

//GET request

router.get('/', notebookController.getNotebooks, (req, res) => {
  res.status(200).json(res.locals);
});

//POST request

router.post(
  '/',
  notebookController.addNotebook,
  notebookController.addNotesForAddingNotebook,
  notebookController.addSkillsForAddingNotebook,
  notebookController.addRemindersForAddingNotebook,
  (req, res) => res.status(200).json(res.locals)
);

//PUT request
router.put('/:id', notebookController.updateNotebook, (req, res) => {
  res.status(200).json(res.locals.updateNotebook);
});
//DELETE request

router.delete(
  '/:id',
  notebookController.deleteNotesForDeletingNotebook,
  notebookController.deleteSkillsForDeletingNotebook,
  notebookController.deleteRemindersForDeletingNotebook,
  notebookController.deleteNotebook,
  (req, res) => res.status(200).json({ msg: 'notebook deleted' })
);

//GET REQUEST FOR ALL NOTES, SKILLS, REMINDERS
router.get(
  "/all",
  notebookController.notebookDetails,
  notebookController.notesDetails,
  notebookController.skillsDetails,
  notebookController.remindersDetails,
  (req, res) => res.status(200).json(res.locals)
);

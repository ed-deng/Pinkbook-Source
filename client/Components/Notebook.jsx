import React, { useState } from 'react';

import Skills from './Skills.jsx';
import Reminders from './Reminders.jsx';
import Notes from './Notes.jsx';

const Notebook = (props) => {
  const [skill, setSkill] = useState('');
  // console.log('Skill in notebook.js', skill)
  const [rating, setRating] = useState('');
  // console.log('Rating in notebook', rating)
  const [id, setId] = useState('');
  const [data, setData] = useState([]);

  console.log(props);

  // const cardStyling = {
  //   border: 'solid',
  //   textAlign: 'center',
  // };

  const flexBox = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  };

  const generateSkills = props.skills.map((element) => {
    const { _id: id, _id: reactKey, name, rating } = element;
    return (
      <Skills
        key={reactKey}
        id={id}
        name={name}
        rating={rating}
        deleteSkillsCard={props.deleteSkillsCard}
        submitChanges={props.submitChanges}
        notebook_id={props.notebook_id}
      />
    );
  });

  return (
    <div>
      <h4>{props.description}</h4>
      <h2>Skills</h2>
      <div style={flexBox}>{generateSkills}</div>
      <div>
        <label>Enter Skill</label>
        <input
          type="text"
          placeholder="Skill Name"
          onChange={(e) => setSkill(e.target.value)}
        />
        <label>Enter Rating</label>
        <input
          type="number"
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          onClick={(events) => {
            // console.log("skill in button", skill)
            // console.log('rating in button', rating)
            props.handleSubmit(events, skill, rating, props.notebook_id);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <Reminders id={props.id} reminders={props.reminders} />
      </div>
      <div>
        <Notes id={props.id} />
      </div>
    </div>
  );
};

export default Notebook;

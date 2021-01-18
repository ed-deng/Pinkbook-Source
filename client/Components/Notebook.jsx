import React, { useState } from 'react';

import Skills from './Skills.jsx';
import Reminders from './Reminders.jsx';
import Notes from './Notes.jsx';

const Notebook = (props) => {
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
      />
    );
  });

  return (
    <div>
      <h4>{props.description}</h4>
      <h2>Skills</h2>
      <div style={flexBox}>{generateSkills}</div>
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

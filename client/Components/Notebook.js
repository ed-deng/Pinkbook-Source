import React, { useState } from 'react';

import Skills from './Skills';
// import Reminders from './Reminders';
import Notes from './Notes';

const Notebook = (props) => {
  return (
    <div>
      <h2>Description of Notebook: {props.description}</h2>
      <div>
        <Skills id={props.id} skills={props.skills} />
      </div>
      <div>{/* <Reminders /> */}</div>
      <div>
        <Notes id={props.id} />
      </div>
    </div>
  );
};

export default Notebook;

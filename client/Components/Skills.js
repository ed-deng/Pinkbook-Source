import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Skills = (props) => {
  const [skill, setSkill] = useState('');
  const [rating, setRanking] = useState('');

  const handleSubmit = (e) => {
    console.log(props);

    fetch('/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        notebook_id: props.id,
        name: skill,
        rating: rating,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => {
        console.error('Error:', error);
      });
    e.preventDefault();
  };

  const generateSkills = props.skills.map((element) => {
    const { _id: id, _id: reactKey, name, rating } = element;
    return (
      <li key={reactKey}>
        {name} : {rating}
      </li>
    );
  });

  return (
    <div>
      <form>
        <h2>Skills</h2>
        <label>Skill Name and Rating</label>
        {generateSkills}
        <input
          type="text"
          placeholder="Skill Name"
          onChange={(e) => setSkill(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          onChange={(e) => setRanking(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Skills;

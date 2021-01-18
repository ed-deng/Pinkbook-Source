import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Skills = (props) => {
  const [skill, setSkill] = useState('');
  const [rating, setRating] = useState('');

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

  // const generateSkills = props.skills.map((element) => {
  //   const { _id: id, _id: reactKey, name, rating } = element;
  //   return (
  //     <li key={reactKey}>
  //       {name} : {rating}
  //     </li>
  //   );
  // });

  //   <form style={cardStyling}>
  //   <h2>Skills</h2>
  //   <label>Skill Name and Rating</label>
  //   <input
  //     type="text"
  //     placeholder="Skill Name"
  //     onChange={(e) => setSkill(e.target.value)}
  //   />
  //   <input
  //     type="number"
  //     placeholder="Rating"
  //     onChange={(e) => setRating(e.target.value)}
  //   />
  //   <button onClick={handleSubmit}>Submit</button>
  // </form>

  const cardStyling = {
    border: 'solid',
    textAlign: 'center',
    width: '200px',
    height: '150px',
    padding: '16px',
    margin: '16px',
  };

  // const stars = [];
  // for (let i = 0; i < props.rating; i += 1) {
  //   stars.push(<i class="fa fa-star" aria-hidden="true"></i>);
  // }
  // console.log(stars);

  console.log(props);

  return (
    <div style={cardStyling}>
      <div>{props.name}</div>
      <div>Rating: {props.rating}</div>
      <button onClick={(events) => props.deleteSkillsCard(events, id)}>
        Edit
      </button>
      <button onClick={(events) => props.deleteSkillsCard(events, props.id)}>
        Delete
      </button>
    </div>
  );
};

export default Skills;

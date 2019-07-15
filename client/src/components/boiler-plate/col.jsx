import React from 'react';

const Column = (props) => (
  <div className="col" id="col">
    <img src={props.imgURL} alt={props.name} title={props.name} />
    <br />
    <h4>{props.name}</h4>
    <p>
      {props.desc}
    </p>
  </div>
)

export default Column;
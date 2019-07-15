import React from 'react';

const RelatedSearches = (props) =>
  <li className={``}>
    <a href={props.url}>{props.name}</a>
  </li>

export default RelatedSearches;
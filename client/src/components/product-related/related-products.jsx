import React from 'react';

const RelatedProducts = (props) =>
  <li id={`br`} className={`br-more-widget `} >
    <a href={props.url}><img src={props.imgURL} />
    {props.name}
    <p>{props.desc}</p>
    </a>
  </li>

export default RelatedProducts;
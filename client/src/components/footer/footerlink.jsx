import React from 'react';
import { SignupSVG } from './svgs/svgs.jsx';

const FooterLinks = (props) => {
  if (props.sublinks.length === 0) { // if we've reached the furthest right of the footer

    return (
      <SignupSVG />
    )
  }

  return (
    <ul className={`hover-it`}>
      {
        props.sublinks.map((link, key) => {
          var { name, url } = link;
          if (!Array.isArray(name)) { // if nested 'name' is not an array (address)
            if (name === 'Give Us FeedBack') {
              <li className="footer-link" key={`id_${key}`}>
                <a href={url} className="footer-link__title-link">{name}</a>
              </li>
            }
            return (
              <li className="footer-link" key={`id_${key}`}>
                <a href={url} className="footer-link__title-link">
                  <span>
                    {name}
                  </span>
                </a>
              </li>
            )
          } else { // is an array (address)
            return name.map((line, i) =>
              <li className="footer-address" key={`sublinkid_${i}`}>{line}</li>
            )
          }
        })
      }
    </ul>
  )
}

export default FooterLinks;
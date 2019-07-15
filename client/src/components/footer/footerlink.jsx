import React from 'react';

const FooterLinks = (props) => {
  // console.log('FooterLinks(props):', props);
  if (props.sublinks.length === 0) { // if we've reached the furthest right of the footer
    return (
      <div class="footer-email-wrapper">
        <div class="footer-email-form">
          <input type="text" name="email" id="footer-email-signup" class="input-email" maxlength="50" size="25" placeholder="Enter your email" />
          <button class="btn_sign-up" type="image" src="https://www.westelm.com/weimgs/rk/images/i/201928/0139/images/common/transparent.png" alt="Submit email address">
            <svg width="17px" height="16px" viewBox="0 0 17 16" role="img" aria-labelledby="title" class="icon-submitArrow">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(5.000000, 1.000000)">
                  <polygon id="QTY-MORE" transform="translate(3.885000, 6.846516) rotate(-360.000000) translate(-3.885000, -6.846516) "
                    points="0.923483604 2.13162821e-14 -1.42108547e-14 0.891639342 5.95487703 6.84651638 -1.42108547e-14 12.8013934 0.923483604 13.6930328 7.76999998 6.84651638">
                  </polygon>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    )
  }
  return (
    <ul className={`hover-it`}>
      {
        props.sublinks.map((link, i) => {
          var { name, url } = link;
          if (!Array.isArray(name)) { // if nested 'name' is not an array (address)
            return (
              <li className="footer-link">
                <a href={url} className="footer-link__title-link">{name}</a>
              </li>
            )
          } else { // is an array (address)
            return name.map((line, i) =>
              <li className="footer-address">{line}</li>
            )
          }
        })
      }
    </ul>
  )
}

export default FooterLinks;
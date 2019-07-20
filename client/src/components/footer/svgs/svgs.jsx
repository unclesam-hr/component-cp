import React from 'react';
import Popup from 'reactjs-popup';

const SignupSVG = () => {
  return (
    <div className="footer-email-wrapper">
      <div className="footer-email-form">
        <input type="text" name="email" id="footer-email-signup" className="input-email" maxLength="50" size="25" placeholder="Enter your email" />
        <Popup trigger={<button className="btn_sign-up" type="image" src="https://www.westelm.com/weimgs/rk/images/i/201928/0139/images/common/transparent.png" alt="Submit email address">
          <svg width="17px" height="16px" viewBox="0 0 17 16" role="img" aria-labelledby="title" className="icon-submitArrow">
            <g stroke="none" strokeWidth="1" fill="black" fillRule="evenodd">
              <g transform="translate(5.000000, 1.000000)">
                <polygon id="QTY-MORE" transform="translate(3.885000, 6.846516) rotate(-360.000000) translate(-3.885000, -6.846516) "
                  points="0.923483604 2.13162821e-14 -1.42108547e-14 0.891639342 5.95487703 6.84651638 -1.42108547e-14 12.8013934 0.923483604 13.6930328 7.76999998 6.84651638">
                </polygon>
              </g>
            </g>
          </svg>
        </button>} modal>
          {close => (
            <div className="modal-cp">
              <a className="close" onClick={close}>
                &times;
              </a>
              <h2>
                sign up + get <span>15% off</span>
              </h2>
              <div className="content">
                <form className="campaign-form" >
                  <fieldset className="campaign-fieldset">
                    <input type="email" id="emailAddr" name="emailAddr"
                      className="email-field"
                      placeholder="enter your email address"
                      data-validate="true" maxLength="75" />
                  </fieldset>
                  <input className="btn" type="submit" alt="SUBMIT" title="SUBMIT" value="SUBMIT" />
                </form>
              </div>
            </div>
          )}

        </Popup>
        
      </div>
    </div>
  )
}

// MVP+
const FeedbackSVG = () => {
  return (
    <div className="feedback">
      
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(51, 51, 51);">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
        </path>
      </svg>
    </div>
  )
}

export { SignupSVG, FeedbackSVG };
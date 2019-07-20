import React from 'react';

const CarouselItem = ({ image, idx }) => {

  var calculatePrice = (offer, min, max) => {
    // if 0 no special deal
    if (offer === 0) {
      return (
        <span>
          <p>
            ${min} - ${max}
          </p>
        </span>
      )
    } else if (offer === 1) { // if 1 then limited time offer
      return (

        <span className="price-special">
          <p className="strikethrough">${min} - ${max}</p>
          Limited Time Offer ${min - Math.ceil(min * .2)} - ${max - Math.ceil(max * .2)}
        </span>
      )
    } else { // if 2 then on sale
      return (
        <span className="price-special">
          <p className="strikethrough">${min} - ${max}</p>
          On Sale ${min - Math.ceil(min * .15)} - ${max - Math.ceil(max * .15)}
        </span>
      )
    }
  }

  return (
    <div className="swiper-slide">
      <a href=''>
        <span id={`img ${idx}`}>
          <img src={image['url']} />
          {image['name']}
          {image['limited_offer'] ? calculatePrice(1, image['min_price'], image['max_price']) :
            (image['on_sale'] ? calculatePrice(2, image['min_price'], image['max_price']) :
              (calculatePrice(0, image['min_price'], image['max_price'])))
          }

        </span>
      </a>
    </div>
  )
}

export default CarouselItem;
import React from 'react';

const CarouselItem = ({image, idx}) => (
  <div className="swiper-slide">
    <span id={`img ${idx}`}>
      <img src={image['url']} /> <br />
      {image['name']}
    </span>
  </div>
)

export default CarouselItem;
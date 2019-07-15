import React from 'react';
import {render} from 'react-dom';
import Swiper from "react-id-swiper";
import axios from 'axios';
// import Scroller from './scroller.jsx';
import CarouselItem from './carouselItem.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.getAllImagesAPI = this.getAllImagesAPI.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
  }

  componentDidMount() {
    console.log('Carousel component mounting...');
    this.getAllImagesAPI();
    
  }


  getAllImagesAPI() {
    axios.get('/products-cp/')
      .then(({ data }) => { // can deconstruct object just for the data property
        // var { data } = resp;
        this.setState({
          images: data
        }, () => render(this.renderCarousel(), document.getElementById('carousel-container')))
      })
      .catch((err) => {
        console.log('Error grabbing images.', err);
      })
  }

  renderCarousel() {
    console.log('Attempting to render Carousel...');
    const params = {
      spaceBetween: 20, // 20px
      initialSlide: 0,
      slidesPerView: 4,
      slidesPerGroup: 4,
      pagination: {
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    return ( 
      <Swiper {...params}>
      {
        this.state.images.map((image, key) => {
          return (
            <CarouselItem image={image} key={`img_${key}`} idx={key} />
          )
        }
        )
      }
    </Swiper>
    )
  }

  render() { 

    return (
      <div className="carousel-container" id="carousel-container">
      </div>
    )
  }
}

// style={{ width: 225 + 'px', height: 247 + 'px' }}
export default Carousel;

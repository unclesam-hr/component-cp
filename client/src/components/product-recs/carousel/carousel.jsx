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
    this.getAllImagesByCollectionID = this.getAllImagesByCollectionID.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
  }

  componentDidMount() {
    // this.getAllImagesAPI();
    this.getAllImagesByCollectionID();
  }


  getAllImagesAPI() {
    axios.get(`http://localhost:3002/products-cp/`)
      .then(({ data }) => { // can deconstruct object just for the data property
        // var { data } = resp;
        this.setState({
          images: data
        }, () => render(this.renderCarousel(), document.getElementById('carousel-container')))
      })
      .catch((err) => {
        console.log('Error grabbing images(getAllImagesAPI).', err);
      })
  }

  getAllImagesByCollectionID(id) {
    
    function randNum () {
      return Math.floor(Math.random() * 5)+1;
    }
    var id = id || randNum();

    axios.get(`http://localhost:3002/products-cp/${id}`)
      .then(({ data }) => { 
        this.setState({
          images: data
        }, () => render(this.renderCarousel(), document.getElementById('carousel-container')))
      })
      .catch((err) => {
        console.log('Error grabbing images(getAllImagesByCollectionID).', err);
      })
  }

  renderCarousel() {
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

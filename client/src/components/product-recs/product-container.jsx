import React from 'react';
import Carousel from './carousel/carousel.jsx';
import SectionHeader from './carousel/section-header.jsx';
import CollectionContainer from './added-collection/collection-container.jsx';

// ProductContainer both parent of section-header and carousel 
  const ProductContainer = (props) => ( // reminder: use ES6 syntax for stateless components
      <section className="product-Container" id="product-Container">
        <div className="products">
        <SectionHeader />
        <Carousel />
        <CollectionContainer />
        </div>
      </section>
    )


export default ProductContainer;
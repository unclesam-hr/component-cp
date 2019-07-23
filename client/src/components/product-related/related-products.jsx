import React from 'react';
import {render} from 'react-dom';

// const RelatedProducts = (props) =>
// <li id={`br`} className={`br-more-widget `} >
//   <a href={props.url}><img src={props.imgURL} />
//   {props.name}
//   <p>{props.desc}</p>
//   </a>
// </li>

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewMoreClicked: false,
      name: '',
      url: '',
      imgURL: '',
      desc: '',
      briefdesc: ''
    }
    this.handleViewMoreClick = this.handleViewMoreClick.bind(this);
    this.displayDescription = this.displayDescription.bind(this);
    this.revertDescription = this.revertDescription.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      url: this.props.url,
      imgURL: this.props.imgURL,
      desc: this.props.desc,
      briefdesc: this.state.desc.substring(0, 25),
    })
  }

  handleViewMoreClick() {
    // this.state.isViewMoreClicked ? 
    //   render(displayDescription(), document.getElementById('rp-desc')) : 
    //   render(revertDescription(), document.getElementById('rp-desc'));
    this.setState({
      isViewMoreClicked: !this.state.isViewMoreClicked
    }, ()=> console.log('isViewMoreClicked:', this.state.isViewMoreClicked))
  }

  displayDescription() {
    return (
      <div>
        
      </div>
    )
  }

  revertDescription() {
    return (
      <div>

      </div>
    )
  }
  render() {
    return (
      <li id={`br`} className={`br-more-widget `} >
        <a href={this.state.url}><img src={this.state.imgURL} />
          {this.state.name}
        </a>
        <p>{this.state.desc}</p>
        <a href={`#br_${this.props.i}`} className="view-more" onClick={this.handleViewMoreClick}>
          View More
        </a>
      </li>
    )
  }
}

export default RelatedProducts;
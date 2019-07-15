import React from 'react';
import Column from './col.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colData: [
        {
          header: 'Original Designs',
          imgURL: 'https://storage.cloud.google.com/afucktonofchairs/desktop-what-makes-us-different-1.png',
          desc: 'In our studios, we design 90% of the products we sell—allowing us to create exclusive designs and source the best materials at a great value.'
        },
        {
          header: 'Doing Good',
          imgURL: 'https://storage.cloud.google.com/afucktonofchairs/desktop-what-makes-us-different-2.png',
          desc: 'We prioritize using Sustainably Sourced Woods and Organic Cotton, and work with Fair Trade factories that protect workers and improve lives.'
        },
        {
          header: 'Design Services',
          imgURL: 'https://storage.cloud.google.com/afucktonofchairs/desktop-what-makes-us-different-3.png',
          desc: 'Our FREE on-staff Design Crew at every west elm store is here to help you create a space you love, from creating room plans to choosing fabrics.'
        }
      ]
    }
  }

  render() {
    return (
      <div className="container" id="container">
        {
          this.state.colData.map((colData, i) => {
            var { header, imgURL, desc } = colData;
            return (
              <Column header={header} imgURL={imgURL} desc={desc} key={i} />
            )
          })
        }
      </div>
    )
  }
}

// const Container = (props) => (

// )

export default Container;
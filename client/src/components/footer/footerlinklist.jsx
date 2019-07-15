import React from 'react';
import FooterLinks from './footerlink.jsx';


class FooterLinkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [ // mock data (maybe)
        [
          { // col 1
            column_id: 1,
            category: `We're Here to Help`,
            sublinks: [
              {
                name: 'Customer Service',
                url: 'http://www.test.com/'
              },
              {
                name: 'Track Your Order',
                url: 'http://www.test.com/'
              },
              {
                name: 'Returns',
                url: 'http://www.test.com/'
              },
              {
                name: 'Shipping Information',
                url: 'http://www.test.com/'
              },
              {
                name: 'International Orders',
                url: 'http://www.test.com/'
              },
              {
                name: 'Help Topics',
                url: 'http://www.test.com/'
              },
              {
                name: 'Give Us Feedback',
                url: 'http://www.test.com/'
              },
              {
                name: 'Contact Us',
                url: 'http://www.test.com/'
              },
            ]
          },
          {
            column_id: 1,
            category: `About Us`,
            sublinks: [
              {
                name: 'Our Story',
                url: 'http://www.test.com/'
              },
              {
                name: 'Our Commitments',
                url: 'http://www.test.com/'
              },
              {
                name: 'Our Partnerships',
                url: 'http://www.test.com/'
              },
              {
                name: 'west elm Hotels',
                url: 'http://www.test.com/'
              },
              {
                name: 'Pressroom',
                url: 'http://www.test.com/'
              },
              {
                name: 'Designers',
                url: 'http://www.test.com/'
              },
              {
                name: 'Responsible Detail Glossary',
                url: 'http://www.test.com/'
              },
              {
                name: 'Careers',
                url: 'http://www.test.com/'
              },
              {
                name: 'Safety Recalls',
                url: 'http://www.test.com/'
              },
            ]
          }
        ],
        [
          { // col 2
            column_id: 2,
            category: `Our Cards + Rewards`,
            sublinks: [
              {
                name: 'The Key',
                url: ''
              },
              {
                name: 'west elm Credit Card',
                url: 'http://www.test.com/'
              },
              {
                name: 'View Credit Card Account',
                url: 'http://www.test.com/'
              },
              {
                name: 'Pay Bill Online',
                url: 'http://www.test.com/'
              },
              {
                name: 'Gift Cards',
                url: 'http://www.test.com/'
              },
            ]
          },
          {
            column_id: 2,
            category: `Catalog`,
            sublinks: [
              {
                name: 'View Online Catalog',
                url: 'http://www.test.com/'
              },
              {
                name: 'Request A Catalog',
                url: 'http://www.test.com/'
              },
            ]
          },
          {
            column_id: 2,
            category: `BTB Programs`,
            sublinks: [
              {
                name: 'Overview',
                url: 'http://www.test.com/'
              },
              {
                name: 'west elm TRADE',
                url: 'http://www.test.com/'
              },
              {
                name: 'west elm CONTRACT',
                url: 'http://www.test.com/'
              },
              {
                name: 'west elm WORK',
                url: 'http://www.test.com/'
              },
            ]
          }
        ], // col 3
        [
          {
            column_id: 3,
            category: `Your Local Store`,
            sublinks: [
              {
                name: ['3333 Bear St', 'Space 231', 'Costa Mesa CA 92626'],
                url: 'http://www.test.com/'
              },
            ]
          },
          {
            column_id: 3,
            category: `Stores`,
            sublinks: [
              {
                name: 'Find A Store',
                url: 'http://www.test.com/'
              },
              {
                name: 'Design Crew',
                url: 'http://www.test.com/'
              },
            ]
          }
        ],
        [
          { // col 4
            column_id: 4,
            category: `Sign Up For Sale + New Arrivals`,
            sublinks: [
            ]
          },
        ]
      ]
    }
    this.mapLinks = this.mapLinks.bind(this);
  }

  mapLinks() {
    console.log('mapLinks invoked.', Array.isArray(this.state.links));
    if (this.state.links) {
      return this.state.links.map((column, index) => {
        return (
          <div className={`footer-column ${index + 1}`}>
            {
              column.map((content, key) => {
                var { column_id, sublinks, category } = content;
                return (
                  <ul>
                    <li className="footer-header">
                      <h3>{category}</h3>
                    </li>
                    <FooterLinks column_id={column_id} category={category} sublinks={sublinks} key={key} />
                  </ul>
                )
              })
            }
          </div>
        )
      })
    }
  }
  // return (
  //   <div className={`footer-column ${column_id}`}>
  //   </div>
  // )

  render() {
    return (
      <div className="footer-link-container" id="footer-link-container">
        {
          this.state.links ? this.mapLinks() : null
        }
      </div>
    )
  }
}

export default FooterLinkList;
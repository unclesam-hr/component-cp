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
                url: ''
              },
              {
                name: 'Track Your Order',
                url: ''
              },
              {
                name: 'Returns',
                url: ''
              },
              {
                name: 'Shipping Information',
                url: ''
              },
              {
                name: 'International Orders',
                url: ''
              },
              {
                name: 'Help Topics',
                url: ''
              },
              {
                name: 'Give Us Feedback',
                url: ''
              },
              {
                name: 'Contact Us',
                url: ''
              },
            ]
          },
          {
            column_id: 1,
            category: `About Us`,
            sublinks: [
              {
                name: 'Our Story',
                url: ''
              },
              {
                name: 'Our Commitments',
                url: ''
              },
              {
                name: 'Our Partnerships',
                url: ''
              },
              {
                name: 'west elm Hotels',
                url: ''
              },
              {
                name: 'Pressroom',
                url: ''
              },
              {
                name: 'Designers',
                url: ''
              },
              {
                name: 'Responsible Detail Glossary',
                url: ''
              },
              {
                name: 'Careers',
                url: ''
              },
              {
                name: 'Safety Recalls',
                url: ''
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
                url: ''
              },
              {
                name: 'View Credit Card Account',
                url: ''
              },
              {
                name: 'Pay Bill Online',
                url: ''
              },
              {
                name: 'Gift Cards',
                url: ''
              },
            ]
          },
          {
            column_id: 2,
            category: `Catalog`,
            sublinks: [
              {
                name: 'View Online Catalog',
                url: ''
              },
              {
                name: 'Request A Catalog',
                url: ''
              },
            ]
          },
          {
            column_id: 2,
            category: `BTB Programs`,
            sublinks: [
              {
                name: 'Overview',
                url: ''
              },
              {
                name: 'west elm TRADE',
                url: ''
              },
              {
                name: 'west elm CONTRACT',
                url: ''
              },
              {
                name: 'west elm WORK',
                url: ''
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
                url: ''
              },
            ]
          },
          {
            column_id: 3,
            category: `Stores`,
            sublinks: [
              {
                name: 'Find A Store',
                url: ''
              },
              {
                name: 'Design Crew',
                url: ''
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
    if (this.state.links) {
      return this.state.links.map((column, index) => {
        return (
          <div className={`footer-column ${index + 1}`} key={`div_id${index}`}>
            {
              column.map((content, key) => {
                var { column_id, sublinks, category } = content;
                return (
                  <ul key={`ul_${key}`}>
                    <li className="footer-header">
                      <h3>{category}</h3>
                    </li>
                    <FooterLinks key={`id_${key}`} column_id={column_id} category={category} sublinks={sublinks} />
                  </ul>
                )
              })
            }
          </div>
        )
      })
    }
  }

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
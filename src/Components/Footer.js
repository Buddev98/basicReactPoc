import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <React.Fragment>
        <footer className="footer-row2 footer-menu-container">
          <div className="container">
            <div className="col-xs-12 col-sd-12 footer-inner-container">
              <nav
                className="col-sd-3"
                role="region"
                aria-labelledby="companyMenu"
              >
                <div className="nav-main-menu">
                  <h2 className="menu-heading" id="companyMenu">
                    <a className="headerlink text-icon arrow-down">Our Company</a>
                  </h2>
                  <ul className="nav-sub-menu open">
                    <li>
                      <a
                        href="https://bluetriton.com/sustainability"
                        target="_blank"
                      >
                        Sustainability
                      </a>
                    </li>
                    <li>
                      <a href="/en/good-hydration">Carbon Neutrality</a>
                    </li>
                    <li>
                      <a href="/en/latestnews">News &amp; Events</a>
                    </li>
                    <li>
                      <a
                        href="https://www.bluetritoncareers.com/"
                        target="_blank"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="/en/w9form">W9 Form</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <nav
                className="col-sd-3"
                role="region"
                aria-labelledby="myAccountMenu"
              >
                <div className="nav-main-menu">
                  <h2 className="menu-heading" id="myAccountMenu">
                    <a className="headerlink text-icon arrow-down">My Account</a>
                  </h2>
                  <ul className="nav-sub-menu open">
                    <li>
                      <a href="/en/dashboard">Manage Orders &amp; Deliveries</a>
                    </li>
                    <li>
                      <a href="/en/my-account/profile#myBalance">Billing</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <nav
                className="col-sd-3"
                role="region"
                aria-labelledby="servicesMenu"
              >
                <div className="nav-main-menu">
                  <h2 className="menu-heading" id="servicesMenu">
                    <a className="headerlink text-icon arrow-down">Services</a>
                  </h2>
                  <ul className="nav-sub-menu open">
                    <li>
                      <a href="/en/filtration">Water Filtration</a>
                    </li>
                    <li>
                      <a href="/en/procleaning">
                        Professional Dispenser Cleaning Services
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <nav className="col-sd-3" role="region" aria-labelledby="helpMenu">
                <div className="nav-main-menu">
                  <h2 className="menu-heading" id="helpMenu">
                    <a className="headerlink text-icon arrow-down">Support</a>
                  </h2>
                  <ul className="nav-sub-menu open">
                    <li>
                      <a href="/en/helpcenter">Help Center</a>
                    </li>
                    <li>
                      <a href="/en/faq">FAQ’s</a>
                    </li>
                    <li>
                      <a href="/en/safety">Bottled Water Safety &amp; Storage</a>
                    </li>
                    <li>
                      <a href="/en/covid-19">COVID-19</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </footer>
  
      </React.Fragment>
    )
  }
}

import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    const logoStyle = {
      fontFamily: 'fira-sans, sans-serif',
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: '30px',
    };

    const fontStyle = {
      fontFamily: 'MuseoSans,sans-serif',
      fontSize: '15px',
      fontWeight: '500',
      fontStyle: 'normal',
    };

    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-info"
          style={{ background: '#01b2ee' }}
        >
          <div className="container">
            <a className="navbar-brand" href="#" style={logoStyle}>
              GrapOne
            </a>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" style={fontStyle}>
                  <a className="nav-link" href="#">
                    <i className="fas fa-map-marker-alt"></i> Dropdown
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <i class="far fa-user" style={{ marginRight: '7px' }}></i>
                    <i class="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <i
                      class="far fa-envelope"
                      style={{ marginRight: '7px' }}
                    ></i>
                    Subscribe
                  </a>
                </li>
                <li className="nav-item active">
                  <div
                    style={{ borderLeft: '1px solid #fff', height: '37px' }}
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;

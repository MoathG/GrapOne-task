import React, { Component } from 'react';

class SecondHeader extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Browse Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  What's New
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Trending
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">
                  For You
                </a>
              </li>
            </ul>
            <form className="form-group w-50">
              <input
                className="form-control"
                type="search"
                placeholder="&#xf002; Search GrapOne"
              ></input>
            </form>
          </div>
        </nav>
      </>
    );
  }
}

export default SecondHeader;

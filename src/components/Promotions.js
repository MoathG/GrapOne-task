import React, { Component } from 'react';

class Promotions extends Component {
  state = {};
  render() {
    

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src="//main-cdn.grabone.co.nz/goimage/495x343/fa474144314f23fe5b3d1ed1931f5415b75c9941.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    Six-Course Signature Menu Dining Experience
                  </h5>
                  <p className="card-text text-info">
                    Sails Restaurent, Westhaven Marina
                  </p>
                  <p className="card-text text-secondary">Auckland</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="//main-cdn.grabone.co.nz/goimage/495x343/942e23addc6a58d0aebc9aa23cd821a890dc3951.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    Six-Course Signature Menu Dining Experience
                  </h5>
                  <p className="card-text text-info">
                    Sails Restaurent, Westhaven Marina
                  </p>
                  <p className="card-text text-secondary">Auckland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Promotions;

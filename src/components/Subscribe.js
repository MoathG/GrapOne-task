import React, { Component } from 'react';

class Subscribe extends Component {
  state = {};
  render() {
    const cardStyle = {
      width: '98%',
      background: '#fff',
      padding: '30px',
      margin: '10px ',
    };

    return (
      <>
        {/* <div style={cardStyle}>
          <div style={{ display: 'inline' }}>
            <p
              style={{
                color: '#01b2ee',
                fontSize: '24px',
                fontWeight: '700',
              }}
            >
              Get the best deals delivered direct to your inbox each day
            </p>

          </div>
        </div> */}
        <div class="form-group form-inline" style={cardStyle}>
          <label
            class="control-label col-sm-7"
            style={{
              color: '#01b2ee',
              fontSize: '24px',
              fontWeight: '700',
            }}
          >
            Get the best deals delivered direct to your inbox each day
          </label>
          <div class="input-group col-sm-4">
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email Address"
            ></input>
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Subscribe;

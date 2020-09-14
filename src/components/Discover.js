import React, { Component } from 'react';

class Discover extends Component {
  state = {};
  render() {
    const borderStyle = {
      width: '100%',
      marginLeft: '25px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #dce3ed',
      borderRadius: '3px 3px 0 0',
    };

    const headerStyle = {
      fontSize: '28px',
      fontWeight: '700',
      borderBottom: '1px solid #dce3ed',
      borderRadius: '3px 3px 0 0',
      padding: '15px 20px',
      color: '#01b2ee',
    };

    const listInfo = [
      {
        text: 'Collection',
        amount: '15',
      },
      {
        text: 'Collection',
        amount: '15',
      },
      {
        text: 'Collection',
        amount: '15',
      },
      {
        text: 'Collection',
        amount: '15',
      },
      {
        text: 'Collection',
        amount: '15',
      },
      {
        text: 'Collection',
        amount: '15',
      },
      {
        text: 'Collection',
        amount: '15',
      },
      {
        text: 'Collection',
        amount: '15',
      },
    ];

    const renderList = (list, index) => {
      return (
        <li class="list-group-item" key={index}>
          {list.text}
          <span style={{ float: 'right', color: '#92a2ad', fontSize: '12px' }}>
            {list.amount}
          </span>
        </li>
      );
    };

    return (
      <>
        <ul class="list-group list-group-flush" style={borderStyle}>
          <header style={headerStyle}>Discover</header>
          {listInfo.map(renderList)}
        </ul>
      </>
    );
  }
}

export default Discover;

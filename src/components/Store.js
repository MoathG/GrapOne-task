import React from 'react';

const Store = () => {
  const cardStyle = {
    float: 'right',
    color: '#1eb3ec',
    fontSize: '1.6rem',
    fontWeight: '400',
  };

  const boughtStyle = {
    display: 'inline',
    fontSize: '14px',
    marginbottom: '5px',
  };

  const cardInfo = [
    {
      image:
        '//main-cdn.grabone.co.nz/goimage/325x225/1d43f73ea5e61771af9efa416efce05bf2206642.jpg',
      title: '$50 Dining & Drinks Voucher',
      price: '$15',
    },
    {
      image:
        '//main-cdn.grabone.co.nz/goimage/325x225/1d43f73ea5e61771af9efa416efce05bf2206642.jpg',
      title: '$50 Dining & Drinks Voucher',
      price: '$15',
    },
    {
      image:
        '//main-cdn.grabone.co.nz/goimage/325x225/1d43f73ea5e61771af9efa416efce05bf2206642.jpg',
      title: '$50 Dining & Drinks Voucher',
      price: '$15',
    },
    {
      image:
        '//main-cdn.grabone.co.nz/goimage/325x225/1d43f73ea5e61771af9efa416efce05bf2206642.jpg',
      title: '$50 Dining & Drinks Voucher',
      price: '$15',
    },
  ];

  const cardRender = (card, index) => {
    return (
      <div className="card col-md-4" key={index}>
        <img src={card.image} className="card-img" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <div>
            <p className="card-text text-muted" style={boughtStyle}>
              7940 bought
            </p>
            <div style={cardStyle}>
              <span>from</span>
              <div>{card.price}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div style={{ margin: '5px' }}>
        <h3
          style={{
            display: 'inline',
            fontSize: '32px',
            fontWeight: '700',
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        >
          Store
        </h3>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ margin: '30px', background: '#01b2ee', fontWeight: '300' }}
        >
          View More
        </button>
      </div>
      <div className="card-deck">{cardInfo.map(cardRender)}</div>
    </div>
  );
};

export default Store;

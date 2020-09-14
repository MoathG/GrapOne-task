import React from 'react';

const Footer = () => {
  const mainFooter = {
    background: '#fff',
    borderTop: '1px solid #eaf1f5',
    width: '100%',
  };

  const mainFooterCol = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingLeft: '1.2rem',
    paddingRight: '1.2rem',
    paddingBottom: '20px',
    maxWidth: '1385px',
    margin: 'auto',
  };

  const mainFooterColumn = {
    flexBasis: 'auto',
    order: '1',
    paddingTop: '30px',
    paddingLeft: '5px',
    paddingRight: '5px',
  };

  const header = {
    fontSize: '14px',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const icons = {
    display: 'flex',
    marginBottom: '20px',
  };

  const icon = {
    width: '44px',
    height: '39px',
    marginRight: '4px',
    fill: '#4f5864',
  };

  const btn = {
    backgroundColor: '#01b2ee',
    borderRadius: '5px',
    color: '#fff',
    display: 'inline-block',
    fontSize: '15px',
    fontWeight: '500',
    padding: '16px 16px 16px 40px',
    position: 'relative',
    boxShadow: '0 0 8px 0 rgba(1,178,238,.5)',
  };

  const iconBtn = {
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: '20px',
    left: '10px',
  };

  const link = {
    display: 'block',
    paddingTop: '6px',
    paddingBottom: '6px',
    color: '#4f5864',
  };

  const subscribe = {
    flexBasis: '420px',
    borderBottom: 'none',
    paddingBottom: '0',
    order: '2',
    paddingTop: '30px',
    paddingLeft: '5px',
    paddingRight: '5px',
  };

  const subscribeMesseage = {};

  const formStyle = {};

  const copyright = {
    margin: 'auto',
    display: 'flex',
    paddingLeft: '10px',
    paddingRight: '10px',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid #dce3ed',
    backgroundColor: '#fff',
  };

  return (
    <section className="main-footer" style={mainFooter}>
      <div className="main-footer-col" style={mainFooterCol}>
        <nav className="main-footer-column" style={mainFooterColumn}>
          <h4 className="header" style={header}>
            Follow us on
          </h4>
          <div className="icons" style={icons}>
            <i class="fab fa-facebook" style={icon}></i>
            <i class="fab fa-twitter" style={icon}></i>
            <i class="fab fa-instagram" style={icon}></i>
            <i class="fab fa-youtube" style={icon}></i>
          </div>
          <h4 style={header}> Get app exclusive deals </h4>
          <button className="btn" style={btn}>
            <i class="fas fa-mobile-alt" style={iconBtn}></i>
            Download our app
          </button>
        </nav>
        <nav style={mainFooterColumn}>
          <h4 style={header}> GrapOne </h4>
          <a style={link} href="#">
            GrapOne Guarantee
          </a>
          <a style={link} href="#">
            Contact Us
          </a>
          <a style={link} href="#">
            About Us
          </a>
          <a style={link} href="#">
            Terms and Return
          </a>
          <a style={link} href="#">
            Blog
          </a>
          <a style={link} href="#">
            Gift Cards
          </a>
        </nav>
        <nav style={mainFooterColumn}>
          <h4 style={header}> GrapOne </h4>
          <a style={link} href="#">
            GrapOne Guarantee
          </a>
          <a style={link} href="#">
            Contact Us
          </a>
          <a style={link} href="#">
            About Us
          </a>
          <a style={link} href="#">
            Terms and Return
          </a>
          <a style={link} href="#">
            Blog
          </a>
          <a style={link} href="#">
            Gift Cards
          </a>
        </nav>
        <nav style={mainFooterColumn}>
          <h4 style={header}> GrapOne </h4>
          <a style={link} href="#">
            GrapOne Guarantee
          </a>
          <a style={link} href="#">
            Contact Us
          </a>
          <a style={link} href="#">
            About Us
          </a>
          <a style={link} href="#">
            Terms and Return
          </a>
          <a style={link} href="#">
            Blog
          </a>
          <a style={link} href="#">
            Gift Cards
          </a>
        </nav>
        <div style={subscribe}>
          <h4 style={header}> Newsletter Signup </h4>
          <span style={subscribeMesseage}>
            Sign up for our daily emails and we'll send you all the best deals,
            tailored for you.
          </span>
          <form style={formStyle}></form>
        </div>
      </div>
      <div className="copyright" style={copyright}>
        <a href="#" style={{ color: '#1eb3ec', paddingRight: '10px' }}>
          Privacy Policy
        </a>
        <span>© 2020 GrabOne Limited</span>
      </div>
    </section>
  );
};

export default Footer;

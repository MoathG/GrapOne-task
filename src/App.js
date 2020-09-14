import React from 'react';
import './App.css';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import Promotions from './components/Promotions';
import Discover from './components/Discover';
import Subscribe from './components/Subscribe';
import Featureds from './components/Featureds';
import Footer from './components/Footer';
import Store from './components/Store';

function App() {
  return (
    <>
      <div className="fluid-container">
        {/* first row  */}
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        {/* second row  */}
        <div className="row">
          <div className="col">
            <SecondHeader />
          </div>
        </div>

        {/*  third row */}
        <div className="row">
          <div className="col">
            <Discover />
          </div>
          <div className="col-9">
            <Promotions />
          </div>
        </div>
        {/*  forth row */}
        <div className="row">
          <div className="col">
            <Subscribe />
          </div>
        </div>
        {/*  fifth row */}
        <div className="row row-cols-4">
          <div className="col">
            <Featureds />
          </div>
        </div>
        {/*  fifth row */}
        <div className="row row-cols-4">
          <div className="col">
            <Store />
          </div>
        </div>
        {/*  sixth row */}
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

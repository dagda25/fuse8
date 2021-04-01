import React from "react";
import './app.scss';
import Filter from '../filter/filter';
import Header from '../header/header';
import OfferList from '../offer-list/offer-list';

function App() {
  return (
    <div className="app">
      <Header title="Our Latest Developments"/>
      <Filter />
      <OfferList />
    </div>
  );
}

export default App;

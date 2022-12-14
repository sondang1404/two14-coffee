import React from 'react';
import CoffeeCollectionContent from '../CollectionComponents/CoffeeCollectionContent';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';

function CoffeeCollectionScreen(props) {
  return (
    <div>
      <Header />
      <CoffeeCollectionContent />
      <Footer />
    </div>
  );
}

export default CoffeeCollectionScreen;
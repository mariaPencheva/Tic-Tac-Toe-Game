import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

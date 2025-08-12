import React from 'react';
import miau from '../sounds/meow.wav';
import { useState } from 'react';

export default function Maxwell() {
  const playSound = () => {
    const audio = new Audio(miau);
    audio.play();
    setCarinho(c => c + 1);
  };
  const [carinho,setCarinho] = useState(0)

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
    <img
      src="https://media.tenor.com/qJRMLPlR3_8AAAAi/maxwell-cat.gif"
      alt="Maxwell Cat"
      onClick={playSound}
      style={{ cursor: 'pointer' }}
    />
    <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
      {carinho > 0 ? `Você deu ${carinho} carinho${carinho > 1 ? 's' : ''} ao Maxwell!` : 'Clique no Maxwell para dar carinho!'}
    </p>
    </div>
  );
}

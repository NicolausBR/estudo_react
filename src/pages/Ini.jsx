import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Maxwell from '../components/Maxwell';
import '../styles/global.css';

function Ini() {
  useEffect(() => {
    document.title = "Início";
  }, []);

  const playSound = () => {
    const audio = new Audio(miau);
    audio.play();
  };

  return (
    <>
      <header>
        <Maxwell/>
      </header>
      <h1>Boas vindas ao site de gerenciamento de Cursos!</h1>
      <h2>Escolha alguma das opções abaixo:</h2>
      <div className="button-container">
        <Link to="/cursos"><button>Cursos</button></Link>
        <Link to="/info"><button>Info</button></Link>
      </div>
      <footer>
        Nicolas Pereira Ribeiro © All rights reserved.
      </footer>
    </>
  );
}

export default Ini;

import {Link} from 'react-router-dom';
import {Editor} from 'primereact/editor';
import React, { useEffect, useState } from 'react';

function P404() {
  const [val,setVal] = useState(0)
  useEffect(() => { document.title = "Erro 404!" }, [])

return(
  <>
  <header>
    <img src ="https://media.tenor.com/xJQzFjwewOkAAAAM/cat-gato.gif"/>
  </header>

  <h1>Página não encontrada! Erro 404!</h1>
  <h2>
    EITA! Parece que você tentou acessar uma página que não existe, mas não se preocupe, você pode retornar para a página anterior clicando no botão abaixo!
  </h2>

  <div class="button-container">
    <button onClick={() => window.history.back()}>Voltar</button>
  </div>

  <div class="button-container">
    <button onClick={() => Navigate('/')}>Home</button>
  </div>

  <div class="button-container">
    <button onClick={() => setVal(val +1)}>Você ativou o botão secreto {val} vezes!</button>
  </div>

  <div>
    <img src ="https://media.tenor.com/2sU-QjS_hSIAAAAM/klassny-klassni-klassny.gif"/>
  </div>

  <footer>
      Nicolas Pereira Ribeiro © All rigths reserved.
  </footer>
  
  </>
  )

}
export default P404

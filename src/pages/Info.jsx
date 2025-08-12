import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Panel } from 'primereact/panel';


function Info() {
  useEffect(() => { document.title = "Informações" }, [])
  return (
    <>
    <header><img src ="https://media1.giphy.com/media/wTpkLqAZf3NFcgzQ4J/200w.gif?cid=6c09b952u565z8mprcxai4h0ixpzccgy0zb9qt82ulgb8xsy&ep=v1_gifs_search&rid=200w.gif&ct=s" /></header>
    <h1>Info</h1>
    <Panel header='Informações'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita incidunt eveniet placeat labore asperiores. Nobis exercitationem autem inventore?
      Libero qui accusantium commodi dignissimos accusamus delectus obcaecati numquam quis sunt! Dolorum!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae unde atque nobis. Explicabo, assumenda.
      Quaerat similique deserunt laborum perspiciatis repellat numquam, aspernatur distinctio vel, optio vero assumenda. Esse, distinctio optio?
    </Panel>
    <div class="button-container ">
      <Link to="/"><button>Retornar p/ Início</button></Link>
    </div>
    <footer>
      Nicolas Pereira Ribeiro © All rigths reserved.
    </footer>
    </>
  )
}

export default Info

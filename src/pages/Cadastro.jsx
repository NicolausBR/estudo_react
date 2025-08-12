import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import Maxwell from '../components/Maxwell';
        

function Cadastro() {
  useEffect(() => { document.title = "Cadastro" }, [])
  const [data_ini,setDate] = useState(null)
  const [data_fim,setDateFim] = useState(null)
  const [descri,setDescri] = useState('')

  return (
    <>
    <header>
      <Maxwell/>
    </header>
    <h1>Registrar novo curso</h1>
    <h2>Insira os seguintes dados</h2>

    <div>
      <label htmlFor="nome">Nome</label>
      <InputText className='inputText' id="nome" placeholder='Insira o nome do curso.'/>
    </div>

    <div>
      <label htmlFor="sigla">Sigla</label>
      <InputText className='inputText' id="sigla" placeholder='Insira a sigla do curso.'/>
    </div>

    <div>
      <label>Data de Início</label>
      <Calendar value={data_ini} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" placeholder='dd/mm/yyyy'/>
    </div>
    
    <div>
      <label >Data de Fim:</label>
      <Calendar value={data_fim} onChange={(e) => setDateFim(e.value)} dateFormat="dd/mm/yy" placeholder='dd/mm/yyyy'/>
    </div>

    
    <div >
      <label> Descrição: </label>
      <Editor className='editBox' value={descri} onTextChange={(e) => setDescri(e.htmlValue)} style={{ height: '250px', width:'800px' }}/>
    </div>


    <div class="button-container">
      <button>Confirmar</button>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>

    <footer>
      Nicolas Pereira Ribeiro © All rigths reserved.
    </footer>
      
    </>
  )
}

export default Cadastro

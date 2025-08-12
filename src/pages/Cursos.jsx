import React, { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import {Link} from 'react-router-dom'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Maxwell from '../components/Maxwell';


function Cursos() {
  let cursos=[{
    nome: "Engenharia de Computação",
    sigla: "EC",
    dataInicio: "10/09/2024",
    dataFim: "10/09/2028",
    descricao: "Este curso oferece uma base sólida em ciência da computação e engenharia elétrica, preparando os alunos para uma carreira em tecnologia."
  },
  {
    nome: "Administração de Empresas",
    sigla: "ADM",
    dataInicio: "15/08/2024",
    dataFim: "15/08/2027",
    descricao: "O curso de Administração prepara os alunos para gerenciar organizações em um ambiente competitivo, fornecendo uma compreensão abrangente de negócios e habilidades de liderança."
  },
  {
    nome: "Arquitetura e Urbanismo",
    sigla: "AU",
    dataInicio: "20/07/2024",
    dataFim: "20/07/2029",
    descricao: "Este curso capacita os alunos a projetar espaços arquitetônicos funcionais e esteticamente agradáveis, considerando aspectos urbanos e ambientais."
  },
  {
    nome: "Psicologia",
    sigla: "PSI",
    dataInicio: "05/06/2024",
    dataFim: "05/06/2028",
    descricao: "O curso de Psicologia explora os processos mentais e comportamentais humanos, preparando os alunos para entender e auxiliar pessoas em diferentes contextos."
  },
  {
    nome: "Medicina",
    sigla: "MED",
    dataInicio: "03/05/2024",
    dataFim: "03/05/2030",
    descricao: "Este curso forma médicos capazes de diagnosticar, tratar e prevenir doenças, promovendo a saúde e o bem-estar da comunidade."
  },
  {
    nome: "Direito",
    sigla: "DIR",
    dataInicio: "12/04/2024",
    dataFim: "12/04/2028",
    descricao: "O curso de Direito prepara profissionais para entender e aplicar leis, promovendo a justiça e defendendo os direitos individuais e coletivos."
  },
  {
    nome: "Engenharia Civil",
    sigla: "ECI",
    dataInicio: "18/03/2024",
    dataFim: "18/03/2028",
    descricao: "Este curso forma engenheiros capazes de projetar, construir e gerenciar infraestruturas e obras civis, contribuindo para o desenvolvimento urbano e econômico."
  },
  {
    nome: "Educação Física",
    sigla: "EF",
    dataInicio: "25/02/2024",
    dataFim: "25/02/2028",
    descricao: "O curso de Educação Física prepara profissionais para promover a saúde e o condicionamento físico por meio de atividades esportivas e de lazer."
  },
  {
    nome: "Ciências da Computação",
    sigla: "CC",
    dataInicio: "08/01/2024",
    dataFim: "08/01/2028",
    descricao: "Este curso proporciona uma compreensão abrangente da teoria e prática da computação, preparando os alunos para carreiras em tecnologia da informação."
  },
  {
    nome: "Biologia",
    sigla: "BIO",
    dataInicio: "14/12/2023",
    dataFim: "14/12/2027",
    descricao: "O curso de Biologia estuda os organismos vivos e seu ambiente, fornecendo uma base sólida para pesquisa e prática em diversas áreas, como biotecnologia e conservação."
  },
  {
    nome: "Engenharia Elétrica",
    sigla: "EE",
    dataInicio: "19/11/2023",
    dataFim: "19/11/2027",
    descricao: "Este curso prepara engenheiros para projetar, construir e manter sistemas elétricos, eletrônicos e de automação, contribuindo para o avanço da tecnologia em diversas áreas."
  },
  {
    nome: "Letras",
    sigla: "LET",
    dataInicio: "24/10/2023",
    dataFim: "24/10/2027",
    descricao: "O curso de Letras explora a linguagem e a literatura, fornecendo aos alunos habilidades de comunicação avançadas e uma compreensão profunda da cultura e da sociedade."
  },
  {
    nome: "Matemática",
    sigla: "MAT",
    dataInicio: "29/09/2023",
    dataFim: "29/09/2027",
    descricao: "Este curso explora os princípios fundamentais da matemática e suas aplicações em diversas áreas, preparando os alunos para carreiras em pesquisa, ensino e indústria."
  },
  {
    nome: "Química",
    sigla: "QUI",
    dataInicio: "04/08/2023",
    dataFim: "04/08/2027",
    descricao: "O curso de Química estuda a estrutura, propriedades e transformações da matéria, fornecendo uma base sólida para pesquisa e prática em diversas áreas, como indústria, saúde e meio ambiente."
  },
  {
    nome: "Farmácia",
    sigla: "FAR",
    dataInicio: "09/07/2023",
    dataFim: "09/07/2027",
    descricao: "Este curso forma farmacêuticos para compreender e aplicar os princípios da farmacologia e da saúde pública, garantindo a eficácia e a segurança dos medicamentos."
  }
];

  useEffect(() => { document.title = "Cursos" }, [])
  return (
    <>
    <header>
      <Maxwell/>
    </header>
    <h1>Cursos</h1>

    <div className="editBox">
            <DataTable value={cursos} paginator rows={5} rowsPerPageOptions={[5, 10]} stripedRows tableStyle={{ minWidth: '50rem', border:'10px' }}>
                <Column field="nome" sortable header="Nome"></Column>
                <Column field="sigla" sortable header="Sigla"></Column>
                <Column field="dataInicio" sortable header="Início"></Column>
                <Column field="dataFim" sortable header="Fim"></Column>
                <Column field="descricao" header="Descrição"></Column>
            </DataTable>
        </div>

    <div class="button-container ">
      <Link to="/cursos/cadastro"><button>Cadastrar Curso</button></Link>
      <Link to="/"><button>Retornar p/ Início</button></Link>
    </div>
    <footer>
      Nicolas Pereira Ribeiro © All rigths reserved.
    </footer>
    </>
  );
}
export default Cursos;
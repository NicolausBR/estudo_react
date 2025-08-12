import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
        

export default function GroupDemo() {
    const [opcao, setChecked] = useState('');
    const [cursoSelecionado, setCursoSelecionado] = useState('');
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }
  
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: '300px'}}>
            <div style ={{ display: 'flex'}}>
                <RadioButton inputId="check_curso" name="curso" value="unico" onChange={(e) => setChecked(e.value)} checked={opcao === 'unico'} />
                <label htmlFor="check_curso" className="ml-2">Curso</label>
                <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
            </div>

            <div className="flex align-items-center">
                <RadioButton inputId="check_cursos" name="curso" value="todos" onChange={(e) => setChecked(e.value)} checked={opcao === 'todos'} />
                <label htmlFor="check_cursos" className="ml-2">Todos os cursos</label>        
            </div>
            <div>
                <Button label="Ok" className="mt-2" />
                <Button label="Cancelar" className="mt-2" />
            </div>
        </Card>
        </div>
    );
}


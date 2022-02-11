import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';


import * as S from './styles';
import { format } from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//componentes
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task() {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();

    const { cod } = useParams();


    async function LoadTaskDetails() {
        await api.get(`/task/${cod}`)
            .then(response => {
                setType(response.data.type)
                setDone(response.data.done)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHour(format(new Date(response.data.when), 'HH:mm'))

            })
    }

    async function Save() {
        //validação dos dados
        if (!title)
            return alert("Você precisa informar o título da tarefa")
        else if (!description)
            return alert("Você precisa informar a descrição da tarefa")
        else if (!type)
            return alert("Você precisa informar o tipo da tarefa")
        else if (!date)
            return alert("Você precisa informar a data da tarefa")
        else if (!hour)
            return alert("Você precisa informar a hora da tarefa")


        if (cod) {
            await api.put(`/task/${cod}`, {
                macaddress: isConnected,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() =>
                setRedirect(true)
            )

        } else {
            await api.post('/task', {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() =>
                setRedirect(true)

            )
        }
    }

    async function Remove() {
        const res = window.confirm("Deseja realmente remover a tarefa?")
        if(res == true){
            await api.delete(`task/${cod}`)
            .then(() => setRedirect(true));
        }
    }

    useEffect(() => {
        if(!isConnected)
        setRedirect(true);
        
        LoadTaskDetails();
        console.log(cod)
    }, [])

    return (
        <S.Container>
            {redirect && <Navigate to='/' />}
            <Header />
            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => (
                            index > 0 &&
                            <button type='button' onClick={() => setType(index)}>
                                <img src={icon} alt='Tipo da Tarefa' className={type && type != index && 'inative'} />
                            </button>
                        ))
                    }

                </S.TypeIcons>

                <S.Input>
                    <span>Título</span>
                    <input type='text' placeholder='Título da tarefa'
                        onChange={e => setTitle(e.target.value)} value={title} />
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder='Detalhes da Tarefa'
                        onChange={e => setDescription(e.target.value)} value={description} />
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type='date' placeholder='Data da tarefa'
                        onChange={e => setDate(e.target.value)} value={date} />
                    <img src={iconCalendar} alt='Calendario' />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type='time' placeholder='Hora da tarefa'
                        onChange={e => setHour(e.target.value)} value={hour} />
                    <img src={iconClock} alt='Relógio' />
                </S.Input>

                <S.Options>
                    <div>
                        <input type='checkbox' checked={done} onChange={() => setDone(!done)} />
                        <span>CONCLUÍDO</span>
                    </div>
                    {cod && <button type='button' onClick={Remove}>EXCLUIR</button>}
                </S.Options>

                <S.Save>
                    <button type='button' onClick={Save}>SALVAR</button>
                </S.Save>

            </S.Form>

            <Footer />

        </S.Container>
    )
}

export default Task;

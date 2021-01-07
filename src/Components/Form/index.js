import React, {useState} from 'react';
import './style.css';
import {FaSearch} from 'react-icons/fa';
import { render } from '@testing-library/react';

const Form = () => {
const [end, setEnd] = useState([]);
const [search, setSearch] = useState([]);
const [error, setError] = useState(false);
const [showTrack, setTrack] = useState(true);
const [hasit, setHasLoaded] = useState(false);
const bilu = "Bilu"

    const onChangeHandler = event => {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    console.log(search)

    const handlerSubmit = async event => {
        event.preventDefault();
            /* Puxa a API do codigo de rastreio */
            fetch(`https://api.linketrack.com/track/json?user=matheus.g.moreli@gmail.com&token=39fed9f9a76882a1a1cba109fd62dfaacdf426066b6b9166cad6f0ad00c9f52c&codigo=${search}`)

            /* Passa os resultados para JSON */
            .then(trackResult => trackResult.json())
            
            /* Joga os resultados para o setData*/
            .then(data => {

                /* Define que o valor final vem de Data e que não houve erros. */
                setEnd(data)
                setHasLoaded(true)
                
                setError(false)
                setTrack(false)

                console.log(data)

            }).catch(err => {
                setError(true)
                console.log('Erro!') 
            })
    }

    console.log(end)
    
        return (
            <div>
                <form className="search_bar">

                    <input 
                        type="text" 
                        id="pesquisa" 
                        placeholder="código de rastreio"
                        value = {search}
                        onChange = {onChangeHandler}
                        styles="text-transform:uppercase" 
                        >   
                    </input>

                    <button 
                        type="submit" 
                        onClick={handlerSubmit}
                    > 
                    <FaSearch size="20"></FaSearch>
                    
                    </button>

                </form>

                <div className="div-span">
                    <span className={error === false ? 'dontshow' : 'show'}>
                    Código de rastreio inválido. 
                    </span>
                </div>

                {/* Renderizando dados no Front-End. */}
                <br />
                {/* -- */}
                <div>
                    <span className = {hasit === true ? 'show_info' : 'dontshow_info'}>
                       <h4> Código de rastreio: </h4> 
                       {end.codigo}
                    </span> 
                </div>
                {/* -- */}
                <br />
                {/* -- */}
                <div>
                    <span className = {hasit === true ? 'show_info' : 'dontshow_info'}>
                        <h4> Status atual do pedido: </h4>
                        {hasit === true ? end.eventos[0].status : error}<br />
                    </span> 

                    <br />  

                    <span className = {hasit === true ? 'show_info' : 'dontshow_info'}>
                         <h4>
                            Histórico: 
                         </h4>
                    </span>
                    
                    {hasit === true ? end.eventos.forEach(item => { 
                            
                        <span> {item.data} </span>

                        }) : error }

                </div>
                
            </div>
    )
    }

   
export default Form;
import React, {useState} from 'react';
import './style.css';
import {FaSearch} from 'react-icons/fa';

const Form = () => {
const [end, setEnd] = useState([]);
const [search, setSearch] = useState([]);
const [error, setError] = useState(false);
const [showTrack, setTrack] = useState(true);

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
                console.log(data)
                setError(false)
                setTrack(false)
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


            <div >
                <span className = "codeTrack">
                    {end.codigo}
                </span> 
            </div>

            {end.eventos.map((pack) => (
                <span className = "codeLocal">
                    ha   ha  .
                </span>
            ))} 

        </div>
        
       
    )
}

export default Form;
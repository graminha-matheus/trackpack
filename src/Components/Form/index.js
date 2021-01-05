import React, {useState} from 'react';
import './style.css';
import {FaSearch} from 'react-icons/fa';

const Form = () => {
const [end, setEnd] = useState([]);
const [search, setSearch] = useState([]);
const [error, setError] = useState(false);

    const onChangeHandler = event => {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    console.log(search)

    const handlerSubmit = async event => {
        event.preventDefault();
            /* Puxa a API do codigo de rastreio */
            fetch(`https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${search}`)

            /* Passa os resultados para JSON */
            .then(trackResult => trackResult.json())
            
            /* Joga os resultados para o setData*/
            .then(data => {
                /* Define que o valor final vem de Data e que não houve erros. */
                setEnd(data)
                console.log(data)
                setError(false)

            }).catch(err => {
                setError(true)
                console.log('Erro!') 
            })

    }

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
            {<FaSearch size="20"></FaSearch>}
            
            </button>

            </form>

            <div className="div-span">
                <span className={error === false ? 'dontshow' : 'show'}>
                Código de rastreio inválido. 
                </span>
            </div>

       </div>
    )
}

export default Form;
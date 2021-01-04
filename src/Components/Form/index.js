import React, {useState} from 'react';
import './style.css';

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
            fetch(`https://api.postmon.com.br/v1/rastreio/ect/${search}`)
            
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
                console.log(error) 
            })
            
            /* Faz os resultados aparecerem no console caso dê erro (Else) */
            .catch(console.log('Erro.'))

    }

    return (
        <div>
           <form className="search_bar">

            <input 
                type="text" 
                id="pesquisa" 
                placeholder="Código de rastreio"
                value = {search}
                onChange = {onChangeHandler}
                >   
            </input>

            <button 
                type="submit" 
                onClick={handlerSubmit}
            > 
            </button>

            </form>

       </div>
    )
}

export default Form;
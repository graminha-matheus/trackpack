import React, {useState} from 'react';
import './style.css';

const Form = () => {
const {data, setData} = useState([])

    /* Puxa a API do codigo de rastreio */
    fetch('https://api.postmon.com.br/v1/rastreio/ect/' + data)
    /* Passa os resultados para JSON */
    .then(trackResult => trackResult.json())
    /* Joga os resultados para o setData*/
    .then((data) => {
      setData(data)
    })
    /* Faz os resultados aparecerem no console caso dê erro (Else) */
    .catch(console.log('Erro.'))
    console.log(data)

    return (
        <div className="search-bar">
{           <label>
            <input type="text" id="pesquisa" placeholder="Código de rastreio"></input>
            </label>
}       </div>
    )
}

export default Form;
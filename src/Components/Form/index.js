import React, {useState} from 'react';
import './style.css';
import {FaSearch} from 'react-icons/fa';
import {AiOutlineRedo} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';


const Form = () => {
const [end, setEnd] = useState([]);
const [search, setSearch] = useState([]);
const [error, setError] = useState(false);
const [hasit, setHasLoaded] = useState(false);

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

                console.log(data)

            }).catch(err => {
                setError(true)
                console.log('Erro!') 
            })
    }

        return (
            <div>     
                <br />
                <div className="form-container">
                    <form className="search_bar">
                        
                        <input className = {hasit === false ? 'show_info' : 'dontshow_info'}
                            type="text"  
                            placeholder="Código de rastreio"
                            value = {search}
                            onChange = {onChangeHandler} 
                            >
                        </input>

                        <button className = {hasit === false ? 'show_info' : 'dontshow_info'}
                            type="submit" 
                            onClick={handlerSubmit}
                        > 
                        <FaSearch size="20"></FaSearch>
                        </button>
                    </form>
                </div>
                <br />
                <div className="div-span">
                    <span className={error === false ? 'dontshow' : 'show'}>
                    Código de rastreio inválido. 
                    </span>
                </div>

                <div className = {hasit === true ? 'show_info' : 'dontshow_info'}>

                    
                    {/* A partir daqui, form de retorno */}
                    
                    
                    <div className="response-container">

                    
                        <div className="code-input">
                            <h4 className = {hasit === true ? 'show_info' : 'dontshow_info'}> 
                            Código de rastreio: 
                            </h4>

                            <input 
                            value={end.codigo} 
                            className = {hasit === true ? 'show_info' : 'dontshow_info'} 
                            disabled
                            >
                            </input> 
                        </div>
                            
                        <div className="code-input">
                            <h4 className = {hasit === true ? 'show_info' : 'dontshow_info'}>  
                            Status atual do pedido: 
                            </h4> 

                            <input 
                            value={hasit === true ? end.eventos[0].status : error} 
                            className = {hasit === true ? 'show_info' : 'dontshow_info'} 
                            disabled
                            >

                            </input> 

                            <span className = {hasit === true ? 'show_info' : 'dontshow_info'}>
                                <h4>
                                    Histórico: 
                                </h4>
                            </span>

                            <div className="scroll">

                                <table className={hasit === true ? 'show_info' : 'dontshow_info'}>
                                    {hasit === true ? end.eventos.map(item => { 
                                        
                                            return (
                                                <tbody>
                                                    <tr className="info1">
                                                        <td>{item.data}, às {item.hora} <br /> Em {item.local}<br /> 
                                                        {item.status}. <br /> 
                                                        {item.subStatus[1]}</td>
                                                    </tr>
                                                </tbody>
                                            )

                                    }) : error }
                                </table>
                            </div>

                        </div>

                        <div className="btn">
                            <button className = {hasit === true ? 'show_info' : 'dontshow_info'}
                                    type="submit" 
                                    onClick={() => setHasLoaded(false)}
                                    alt="Nova Consulta"
                                > 
                                <AiOutlineRedo size="40"></AiOutlineRedo>
                                
                            </button>
                            
                            <button className = {hasit === true ? 'show_info' : 'dontshow_info'}
                                    type="submit" 
                                    onClick={handlerSubmit}
                                    alt="Aplicar no Ticket"
                                > 
                                <AiOutlinePlus size="40"></AiOutlinePlus>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
    }

   
export default Form;
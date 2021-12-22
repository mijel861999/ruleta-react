import React from 'react';
import styled from 'styled-components'; 
import { useSelector } from 'react-redux';

import { handleSetBackground } from '../helpers/stylesFunctions';

const TableroItem = styled.div`
    color: white;
    padding: 20px 20px;
    background-color : ${ ({ background }) => handleSetBackground( background ) };
    border: 1px solid tomato;
`;

export const Tablero = ({ money, setMoney, setProfit }) => {

    console.log(money)

    const { numbers, reds } = useSelector( state => state.ruleta )
    numbers.shift();

    const cero = 0;

    const handleSelectNumber = () => {
        alert('Seleccionaste este número')
        setProfit( money*0.28 )
    }

    return (
        <div className="mt-2">
            <div className="ruleta container">
                <div className="row">
                    <div 
                        className="col-8 offset-2 pt-0 pe-0 ps-0 text-center"
                    >
                        <TableroItem background="green">
                            <button 
                                className="btn"
                                style={{
                                    color: 'white'
                                }}
                                onClick={ handleSelectNumber }
                            >
                                { cero }
                            </button>
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    {
                        numbers.map( (number) => 
                            
                            <div 
                                className="col-4 pt-0 pe-0 ps-0 text-center"
                                key={ number }                               
                            >
                                <TableroItem background={`${ reds.includes(number) ? "red" : "black" }`}>
                                    <button 
                                        className="btn"
                                        style={{
                                            color: 'white'
                                        }}
                                        onClick={ handleSelectNumber }
                                    >
                                        { number }
                                    </button>
                                </TableroItem> 
                            </div>
                        )
                    }  
                </div>
            </div>
        </div>
    )
}

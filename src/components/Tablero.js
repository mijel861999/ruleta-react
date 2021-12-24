import React from 'react';
import styled from 'styled-components'; 

import { handleSetBackground } from '../helpers/stylesFunctions';

const TableroItem = styled.div`
    color: white;
    padding: 20px 20px;
    background-color : ${ ({ background }) => handleSetBackground( background ) };
    border: 1px solid tomato;
`;

export const Tablero = ({ money, setMoney, setProfit, setOption, numbersTablero,reds ,betMoney }) => {

    const handleSelectNumber = (number) => {
        setProfit( betMoney*0.28 )
        setOption(number)
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
                                onClick={()=>{
                                    handleSelectNumber(0) 
                                }}
                            >
                                0
                            </button>
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    {
                        numbersTablero.map( (number) => 
                            
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
                                        onClick={ ()=> {
                                            handleSelectNumber(number)
                                        }}
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

import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


import { handleSetBackground } from '../helpers/stylesFunctions';



export const NumeroContainer = styled.div`
    width: 80px;
    height: 80px;
    background-color : ${ ({ background }) => handleSetBackground( background ) };
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 14px;
`; 

export const Ruleta = ({ setNumberAzar, numbers, reds, blacks }) => { 

    const [ numberSelected, setNumberSelected ] = useState(null); 
    const [ color, setColor ] = useState(null);

    const handleSpin = () => {
        const rand = Math.floor( Math.random()*numbers.length )
        const rValue = numbers[rand];
        
        if ( reds.includes(rValue)) {
            setColor( "red" )
        } else if ( blacks.includes( rValue ) ) {
            setColor( "black" );
        } else {
            setColor( "green" );
        }
        
        setNumberSelected( rValue );
        setNumberAzar(rValue);
    }
   
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="ruleta-container">
                {
                    ( numberSelected != null ) 
                        ? ( <NumeroContainer background={ color }>{ numberSelected }</NumeroContainer> )
                        : ( <h1>Tira de la ruleta</h1> )
                } 
            </div>
                
            <button 
                className="btn btn-primary mt-5"
                onClick={ handleSpin }
            >
                Tira de la ruleta
            </button> 
        </div>
        
    )
}

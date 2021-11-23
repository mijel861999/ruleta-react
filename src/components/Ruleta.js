import React, {  useState } from 'react';
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

export const Ruleta = () => { 

    const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36, 37];

    const reds = numbers.filter( num => num % 2 !== 0 );
    const blacks = numbers.filter( num => num % 2 === 0 );
    blacks.shift();
   
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

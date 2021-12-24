import React, {  useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

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

export const Ruleta = ({ setNumberAzar, numbers, reds, blacks, betMoney, option, setMoney, money, numberAzar, profit }) => { 

    const [ numberSelected, setNumberSelected ] = useState(null); 
    const [ color, setColor ] = useState(null);

    const handleSpin = () => {
        
        if(betMoney === null) {
            Swal.fire('INSERTE EL DINERO QUE QUIERE APOSTAR');
            return false;
        }else if( option === null ) {
            Swal.fire('INSERTE EL NÚMERO AL QUE DESEA APOSTAR');
            return false;
        }

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
        setMoney( money - betMoney );
        
        if(numberAzar === option){
            Swal.fire('GANASTE');
            setMoney( profit + money );
        }else if (numberAzar !== option){
            alert('PERDISTE');
        }
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

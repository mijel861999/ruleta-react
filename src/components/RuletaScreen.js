import React,{ useState } from 'react';
import { useSelector } from 'react-redux';

import { Ruleta } from './Ruleta';
import { Tablero } from './Tablero';
import { Option } from './Option';


export const RuletaScreen = () => {

    //const { money } = useSelector( state => state.ruleta )
    const [ money, setMoney ] = useState(22);
    const [ profit, setProfit ] = useState(0);
    const [ numberSelected, setNumberSelected ] =useState(null);

    console.log(numberSelected);
    console.log(money)

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h1 className="display-3">LA RULETA</h1>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Ruleta />
                </div>
            </div>  
            
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h1 className="h5">Tu dinero: S/. { money }</h1>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h1 className="h5">Tu ganancia podría ser : S/. { profit }</h1>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Option />
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-6 offset-3 d-flex justify-content-center">
                    <Tablero money={ money } setMoney={ setMoney } setNumberSelected={ setNumberSelected } setProfit={ setProfit }/>
                </div>
            </div>
        </div>
    )
}

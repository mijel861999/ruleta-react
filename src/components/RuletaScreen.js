import React,{ useState } from 'react';

import { Ruleta } from './Ruleta';
import { Tablero } from './Tablero';
import { Option } from './Option';

const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];

const reds = numbers.filter( num => num % 2 !== 0 );

const blacks = numbers.filter( num => num % 2 === 0 );
blacks.shift();

const numbersTablero = numbers;
numbersTablero.shift();


export const RuletaScreen = () => {

    //const { money } = useSelector( state => state.ruleta )
    const [ money, setMoney ] = useState(20000);
    const [ betMoney, setBetMoney ] = useState( 0 );
    const [ profit, setProfit ] = useState(0);
    const [ option, setOption ] = useState( null );
    const [ numberAzar, setNumberAzar ] = useState(0);

    /*
    useEffect( ()=> {
        if( numberAzar === option ){
            alert('GANASTE')
            setMoney( profit + money );
        }else if( numberAzar !== option ) {
            alert('PERDISTE');
        }
    }, [ numberAzar, option, profit, money ])
    */

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h1 className="display-3">LA RULETA</h1>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Ruleta
                        numbers={ numbers }
                        reds={ reds }
                        blacks={ blacks }
                        option={ option }
                        betMoney={ betMoney }
                        profit={profit}
                        money={ money }
                        numberAzar={numberAzar}
                        setNumberAzar={ setNumberAzar }
                        setMoney={ setMoney }
                    />
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
                <div className="col-12 text-center">
                    {
                        (option)
                            ? (
                                <h1 className="h5">{ option }</h1>
                            )
                            : (
                                <h1 className="h5">Selecciona un número</h1>
                            )
                    }
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Option
                        betMoney={ betMoney }
                        setBetMoney={setBetMoney}
                        setProfit={setProfit}
                    />
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-6 offset-3 d-flex justify-content-center">
                    <Tablero 
                        numbersTablero={ numbersTablero }
                        reds={ reds }
                        money={ money } 
                        setMoney={ setMoney } 
                        setOption={ setOption } 
                        setProfit={ setProfit }
                        betMoney={ betMoney }
                    />
                </div>
            </div>
        </div>
    )
}

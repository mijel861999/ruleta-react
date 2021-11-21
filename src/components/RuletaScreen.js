import React from 'react';

// import { Box } from '@chakra-ui/react';
import { Ruleta } from './Ruleta';
import { Tablero } from './Tablero';
import { Option } from './Option';


export const RuletaScreen = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h1>Ruleta Screen</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Ruleta />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Tablero />
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Option />
                </div>
            </div>
        </div>
    )
}

import React from 'react';

import { Ruleta } from './Ruleta';
import { Tablero } from './Tablero';
import { Option } from './Option';


export const RuletaScreen = () => {
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
                <div className="col-6 offset-3 d-flex justify-content-center">
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

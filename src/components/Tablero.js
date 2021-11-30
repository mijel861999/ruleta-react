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

export const Tablero = () => {

    const { numbers, reds, blacks } = useSelector( state => state.ruleta )

    return (
        <div className="mt-2">
            <div className="ruleta container">
                <div className="row">
                    {
                        numbers.map( (number) => 
                            <div className="col-4 pt-0 pe-0 ps-0 text-center">
                                <TableroItem background="black">
                                    1
                                </TableroItem> 
                            </div> 
                        )
                    }  
                    
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            2
                        </TableroItem> 
                    </div>
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            3
                        </TableroItem> 
                    </div>
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            4
                        </TableroItem> 
                    </div>
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            5
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            6
                        </TableroItem> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            4
                        </TableroItem> 
                    </div>
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            5
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            6
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            7
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            8
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="black">
                        <TableroItem background="black">
                            9
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            10
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            11
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="red">
                            12
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            13
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            14
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="black">
                            15
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            16
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            17
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="red">
                            18
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            19
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            20
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="black">
                            21
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            22
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            23
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="red">
                            24
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            25
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            26
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="black">
                            27
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            28
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            29
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="red">
                            30
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            31
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            32
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="black">
                            33
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            34
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center">
                        <TableroItem background="black">
                            35
                        </TableroItem> 
                    </div>
                    <div className="col-4 pe-0 ps-0 text-center" background="red">
                        <TableroItem background="red">
                            36
                        </TableroItem> 
                    </div>
                </div>
            </div>
        </div>
    )
}

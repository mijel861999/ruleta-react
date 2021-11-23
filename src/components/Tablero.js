import React from 'react';
import styled from 'styled-components'; 

import { handleSetBackground } from '../helpers/stylesFunctions';

const TableroItem = styled.div`
    padding: 20px 20px;
    background-color : ${ ({ background }) => handleSetBackground( background ) };
`;

export const Tablero = () => {
    return (
        <div className="mt-2">
            <div className="ruleta container">
                <div className="row">
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem background="red">
                            1
                        </TableroItem> 
                    </div>
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem >
                            2
                        </TableroItem> 
                    </div>
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem>
                            3
                        </TableroItem> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem>
                            4
                        </TableroItem> 
                    </div>
                    <div className="col-4 pt-0 pe-0 ps-0 text-center">
                        <TableroItem>
                            5
                        </TableroItem> 
                    </div>
                    <div className="col-4">
                        <TableroItem>
                            6
                        </TableroItem> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <TableroItem>
                            7
                        </TableroItem> 
                    </div>
                    <div className="col-4">
                        <TableroItem>
                            8
                        </TableroItem> 
                    </div>
                    <div className="col-4">
                        <TableroItem>
                            9
                        </TableroItem> 
                    </div>
                </div>
            </div>
        </div>
    )
}

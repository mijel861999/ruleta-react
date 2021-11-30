import React from 'react';

export const Option = () => {
    return ( 
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Dinero para apostar</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">
                    Intenta no caer en quiebra.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">Selecciona tu numero</label>
                <select id="disabledSelect" className="form-select">
                    <option>1</option>
                </select>
            </div>
        </form>   
    )
}

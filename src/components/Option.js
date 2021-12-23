import React from 'react';

export const Option = ({ betMoney, setBetMoney, setProfit }) => {

    const handleInputChange = (event) => {
        setBetMoney(event.target.value)
        setProfit(betMoney*0.28);
    } 

    return ( 
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Dinero para apostar</label>
                <input 
                    type="number" 
                    name="betMoney"
                    onChange={ handleInputChange }
                    value={ betMoney }
                    className="form-control" 
                    aria-describedby="emailHelp" 
                />
            <div id="emailHelp" className="form-text">
                Intenta no caer en quiebra.
            </div>
        </div>
    )
}

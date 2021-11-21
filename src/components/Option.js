import React from 'react';

export const Option = () => {
    return ( 
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Dinero para apostar</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">
                    Intenta no caer en quiebra.
                </div>
            </div>
            <div class="mb-3">
                <label for="disabledSelect" class="form-label">Selecciona tu numero</label>
                <select id="disabledSelect" class="form-select">
                    <option>1</option>
                </select>
            </div>
        </form>   
    )
}

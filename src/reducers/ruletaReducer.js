//import { types } from '../types/types';


const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];

const reds = numbers.filter( num => num % 2 !== 0 );

const blacks = numbers.filter( num => num % 2 === 0 );
blacks.shift();


const initialState = {
  numbers,
  reds,
  blacks,
  money: 200,
  option: null
}


export const ruletaReducer = (state = initialState, action) => {
  switch( action.type ) {
    default: 
      return state;
  }
}

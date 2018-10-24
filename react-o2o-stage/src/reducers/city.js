import * as actionTypes from "../constants/city.js"

const initialState = {}
export default function city (state = initialState, action){
  switch (action.type) {
       case actionTypes.CITY_UPDATE:
           return action.data
       default:
           return state
   }
}

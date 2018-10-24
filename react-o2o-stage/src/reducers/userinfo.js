import * as actionTypes from "../constants/userinfo.js"

const initialState = {}
export default function city (state = initialState, action){
  switch (action.type) {
       case actionTypes.USER_UPDATE:
           return action.data
       default:
           return state
   }
}

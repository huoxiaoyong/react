import * as actionTypes from '../constants/city'

export function updateCity(data) {
    return {
        type: actionTypes.CITY_UPDATE,
        data
    }
}

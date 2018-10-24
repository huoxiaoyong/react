import { get } from '../get'

export function getSearchData(city,page,category,keyword) {
    const result = get(`/api/search?city=${city}&page=${page}&category=${category}&keyword=${keyword}`)
    return result
}

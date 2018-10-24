import { get } from '../get'

export function getDetailsInfoData(id) {
    const result = get(`/api/details?id=${id}`)
    return result
}

export function getDetailsCommentData(page,id) {
    const result = get(`/api/details/comment?page=${page}&id=${id}`)
    return result
}

import { request } from "../request"

export function initData(id){
    return request({
        url:'/api/FrontMain/GetMianPage',
        method:'get',
        params:{id}
    })
}
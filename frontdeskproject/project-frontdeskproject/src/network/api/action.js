import { request } from "../request"

export function initData(id){
    return request({
        url:'/api/FrontMain/GetMianPage',
        method:'get',
        params:{id}
    })
}

// 活动报名
export function Application(uid,aid){
    return request({
        url:'/api/Action/Application',
        method:'post',
        params:{uid,aid}
    })
}

// 活动撤销
export function ActionQuash(uid,aid){
    return request({
        url:'/api/Action/ActionQuash',
        method:'post',
        params:{uid,aid}
    })
}



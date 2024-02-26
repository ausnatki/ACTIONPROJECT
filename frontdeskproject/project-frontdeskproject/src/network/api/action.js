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


// 获取所有正在报名时间段的活动列表
export function GetAllList(){
    return request({
        url:'/api/Action/GetAllList',
        method:'get'
    })
}

// 根据类别获取所有活动列表
export function GetTypeList(type){
    return request({
        url:'/api/Action/GetTypeList',
        method:'get',
        params:{type}
    })
}

// 用户自己的活动列表
export function GetMyList(id){
    return request({
        url:'/api/Action/GetMyList',
        method:'get',
        params:{id}
    })
}

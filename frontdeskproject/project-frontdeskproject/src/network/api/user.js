// 导入创建好的axios实例
import { request } from "../request"

export function Login(data) {
    return request({
      url: '/api/Login/login',
      method: 'post',
      data
    })
}

export function getalluser() {
    return request({
      url: '/api/Action/GetAllaction',
      method: 'get'
    })
}

export function getinfo(token){
  return request({
    url:'/api/Login/info',
    method: 'get',
    params: { token }
  })
}
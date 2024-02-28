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

export function GetUserinfo(id){
  return request({
    url:'/api/SysUser/GetFrontUserinfo',
    method:'get',
    params:{id}
  })
}

// 修改功能
export function edituser(user) {
  return request({
    url: '/api/SysUser/EditUser',
    method: 'post',
    data: user
  })
}
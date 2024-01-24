import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/Login/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/Login/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/Login/logout',
    method: 'post'
  })
}

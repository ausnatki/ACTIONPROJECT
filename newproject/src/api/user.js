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

// 获取全部用户信息
export function getall() {
  return request({
    url: '/api/SysUser/GetAllStudent',
    method: 'post'
  })
}

// 获取添加的界面数据
export function addInit() {
  return request({
    url: '/api/SysUser/Initadd',
    method: 'post'
  })
}

// 添加用户
export function AddUser(student, arry) {
  return request({
    url: '/api/SysUser/Add',
    method: 'post',
    data: {
      student,
      arry
    }
  })
}

// 禁用用户
export function disable(id) {
  return request({
    url: '/api/Sysuser/Dusable',
    params: {
      id
    }
  })
}

// 获取我的添加用户信息时的学期信息
export function getaddserester() {
  return request({
    url: '/api/SysUser/GetAddSemester',
    method: 'get'
  })
}

// 获取修改时的初始化表格
export function getInitTable(id) {
  return request({
    url: '/api/SysUser/getInitTable',
    method: 'get',
    params: { id }
  })
}

import request from '@/utils/request'

// 添加界面的相关初始化信息
export function getInitadd(id) {
  return request({
    url: 'api/Action/GetInitadd',
    method: 'get',
    params: { id }
  })
}

// 获得所有活动列表
export function getallaction() {
  return request({
    url: 'api/Action/GetAllaction',
    method: 'get'
  })
}

// 添加活动
export function addAction(data) {
  return request({
    url: 'api/Action/AddAction',
    method: 'post',
    data
  })
}

// 获得活动报名信息列表
export function GetUserByAction(id) {
  return request({
    url: '/api/ActionUser/GetUserByAction',
    method: 'get',
    params: { aid: id }
  })
}

// 用户完成活动事件
export function ActionFinish(aid, uid) {
  return request({
    url: '/api/ActionUser/ActionFinish',
    method: 'get',
    params: { aid, uid }
  })
}

// 撤销用户完成事件
export function ActionNoFinish(aid, uid) {
  return request({
    url: '/api/ActionUser/ActionNoFinish',
    method: 'get',
    params: { aid, uid }
  })
}

// 删除活动
export function DelAction(id) {
  return request({
    url: '/api/Action/Delaction',
    method: 'get',
    params: { id }
  })
}

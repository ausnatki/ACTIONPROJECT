import request from '@/utils/request'

export function getInitadd(id) {
  return request({
    url: 'api/Action/GetInitadd',
    method: 'get',
    params: { id }
  })
}

export function getallaction() {
  return request({
    url: 'api/Action/GetAllaction',
    method: 'get'
  })
}

export function addAction(data) {
  return request({
    url: 'api/Action/AddAction',
    method: 'post',
    data
  })
}

import request from '@/utils/request'

export function Getyear() {
  return request({
    url: '/api/Year/getAllyear',
    method: 'get'
  })
}

export function Getsemester() {
  return request({
    url: '/api/Year/getAllsemester',
    method: 'get'
  })
}

export function Edityear(id) {
  return request({
    url: '/api/Year/editByidyear',
    method: 'post',
    params: { id }
  })
}

export function Editsemester(id) {
  return request({
    url: '/api/Year/editByidsemester',
    method: 'post',
    params: { id }
  })
}

export function AddYear(data) {
  return request({
    url: '/api/Year/addOneyear',
    method: 'post',
    data
  })
}

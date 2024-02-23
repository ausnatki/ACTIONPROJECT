// 导入创建好的axios实例
import { request } from "../request"

export function test(){
    return request({
        url:'',
        methods:'post'
    })
}
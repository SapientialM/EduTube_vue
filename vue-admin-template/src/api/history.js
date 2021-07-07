/**
 * @author agrinJPG
 * @date 2021/7/7
 * @Description 获取操作记录
 */

import request from '@/utils/request'

export default{
    // 获取最近操作记录
    getHistory(){
        return request({
            url:'/eduservice/teacher/history',
            method: 'get'
        })
    }
}
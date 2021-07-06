/*
 * @Author: bibofu 
 * @Date: 2021-05-07 18:04:21 
 * @Last Modified by: bibofu
 * @Last Modified time: 2021-05-07 23:43:15
 */

 
import request from '@/utils/request'

export default{
    //1 讲师列表，条件查询带分页
    getTeacherListPage(current,limit,teacherQuery){

        return request({
            // url: '/table/list',
            url:`/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            data: teacherQuery
          })

    },
    //删除讲师
    deleteTeacherId(id) {
        return request({
            url: `/eduservice/teacher/${id}`,
            method: 'delete'
          })
    },
    //添加讲师
    addTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
          })
    },
    //根据id查询讲师
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
          })
    },
    //修改讲师
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }

    
}



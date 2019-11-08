import Vue from 'vue'
import Router from 'vue-router'
import Beranda from '@/components/beranda'
import Login from '@/components/logon/login'
import Admin from '@/components/template'
import StudentIndex from '@/components/student'
import StudentList from '@/components/student/student-list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'other',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'umu',
      redirect: '/login'
    },
    {
      path: '/admin',
      component: Admin,
      name: 'admin',
      redirect: '/admin/beranda',
      children: [
        {
          path: '/admin/beranda',
          component: Beranda,
          name: 'beranda'
        },
        {
          path: '/admin/siswa',
          component: StudentIndex,
          name: 'student',
          redirect: '/admin/siswa/listSiswa',
          children: [
            {
              path: '/admin/siswa/listSiswa',
              component: StudentList,
              name: 'studentList'
            }
          ]
        }
      ]
    }
  ]
})

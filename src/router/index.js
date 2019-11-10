import Vue from 'vue'
import Router from 'vue-router'
import Beranda from '@/components/beranda'
import Login from '@/components/logon/login'
import Admin from '@/components/template'
import StudentIndex from '@/components/student'
import StudentList from '@/components/student/student-list'
import BillingIndex from '@/components/billing/'
import BillingList from '@/components/billing/billing-list'

Vue.use(Router)

const routerVue = new Router({
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
          path: 'siswa',
          component: StudentIndex,
          name: 'student',
          redirect: 'siswa/listSiswa',
          children: [
            {
              path: 'listSiswa',
              component: StudentList,
              name: 'studentList'
            }
          ]
        },
        {
          path: 'billing',
          component: BillingIndex,
          name: 'billing',
          redirect: 'billing/listTagihan',
          children: [
            {
              path: '/admin/tagihan/listTagihan/:id',
              name: 'billingList',
              component: BillingList
            },
            {
              path: '/admin/tagihan/listTagihan/',
              redirect: '/admin/tagihan'
            }
          ]
        }
      ]
    }
  ]
})

export default routerVue

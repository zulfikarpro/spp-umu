import Vue from 'vue'
import Router from 'vue-router'
import Beranda from '@/components/beranda'
import Login from '@/components/logon/login'
import Admin from '@/components/template'
import StudentIndex from '@/components/student'
import StudentList from '@/components/student/student-list'
import BillingIndex from '@/components/billing/'
import BillingList from '@/components/billing/billing-list'
import BillingView from '@/components/billing/billing-view'
import AcademyIndex from '@/components/academy/'
import academyPage from '@/components/academy/academy-page'
import academyEdit from '@/components/academy/academy-edit'

import mode from '../prodProperties'
Vue.use(Router)

export default new Router({
  base: mode,
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: { name: 'login' }
    },
    {
      path: '/',
      redirect: { name: 'login' }
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
          path: 'akademi',
          component: AcademyIndex,
          name: 'academy',
          redirect: 'akademi/pageAkademi',
          children: [
            {
              path: 'pageAkademi',
              component: academyPage,
              name: 'academyPage'
            },
            {
              path: 'editAkademi',
              component: academyEdit,
              name: 'academyEdit'
            }
          ]
        },
        {
          path: 'tagihan',
          component: BillingIndex,
          name: 'billing',
          redirect: 'tagihan/listTagihan',
          children: [
            {
              path: 'listTagihan',
              name: 'billingList',
              component: BillingList
            },
            {
              path: 'viewTagihan/:id',
              name: 'billingView',
              component: BillingView
            }
          ]
        }
      ]
    }
  ]
})

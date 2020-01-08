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
import AcademyPage from '@/components/academy/academy-page'
import AcademyEdit from '@/components/academy/academy-edit'
import FeeBillingIndex from '@/components/fee-billing/'
import FeeBillingList from '@/components/fee-billing/fee-list'
import FeeBillingView from '@/components/fee-billing/fee-view'
import AkademiOnboardIndex from '@/components/academy-onboard'
import AkademiOnboardList from '@/components/academy-onboard/academyob-list'
import AkademiOnboardAdd from '@/components/academy-onboard/academyob-add'
import ActivationIndex from '@/components/activation'
import ActivationView from '@/components/activation/activation-view'
import UniversityOnboardIndex from '@/components/university-onboard'
import UniversityOnboard from '@/components/university-onboard/university'
import Register2 from '@/components/logon/register2'

import mode from '../prodProperties'
Vue.use(Router)

let vueRouter = new Router({
  base: mode,
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register2',
      name: 'register2',
      component: Register2
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
      path: '/universityOnboard',
      component: UniversityOnboardIndex,
      name: 'UniversityOnboard',
      redirect: '/universityOnboard/register',
      children: [
        {
          path: '/universityOnboard/register/:id?',
          name: 'UniversityOnboard',
          component: UniversityOnboard
        }
      ]
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
          path: 'feeManage',
          component: FeeBillingIndex,
          name: 'FeeBilling',
          redirect: 'feeManage/listFee',
          children: [
            {
              path: 'listFee',
              component: FeeBillingList,
              name: 'FeeBillingList'
            },
            {
              path: 'feeRiwayat/:id',
              component: FeeBillingView,
              name: 'FeeBillingView'
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
              component: AcademyPage,
              name: 'AcademyPage'
            },
            {
              path: 'editAkademi',
              component: AcademyEdit,
              name: 'AcademyEdit'
            }
          ]
        },
        {
          path: 'tagihan',
          component: BillingIndex,
          name: 'Billing',
          redirect: 'tagihan/listTagihan',
          children: [
            {
              path: 'listTagihan',
              name: 'BillingList',
              component: BillingList
            },
            {
              path: 'viewTagihan/:id',
              name: 'BillingView',
              component: BillingView
            }
          ]
        },
        {
          path: 'akademiOnboard',
          component: AkademiOnboardIndex,
          name: 'AkademiOnboard',
          redirect: 'akademiOnboard/listAkademiOnboard',
          children: [
            {
              path: 'listAkademiOnboard',
              name: 'AcademyOnboardList',
              component: AkademiOnboardList
            },
            {
              path: 'addAkademiOnboard',
              name: 'AcademyOnboardAdd',
              component: AkademiOnboardAdd
            }
          ]
        },
        {
          path: 'aktivasi',
          component: ActivationIndex,
          name: 'Activation',
          redirect: { name: 'admin' },
          children: [
            {
              path: 'token/:id',
              name: 'ActivationView',
              component: ActivationView
            }
          ]
        }
      ]
    }
  ]
})

vueRouter.beforeEach((to, from, next) => {
  let objSession = ''
  if (to.path.includes('/login') && (objSession !== null || objSession !== '') && (objSession.idAkademi !== '' || objSession.status !== '')) {
    next('/admin')
  } else {
    next()
  }
  if (!to.path.includes('admin')) {
    next()
  } else {
    objSession = JSON.parse(sessionStorage.getItem('umuSS'))
    if ((objSession === undefined || objSession === null) || (objSession.idAkademi === '' || objSession.idAkademi === undefined || objSession.idAkademi === null) || (objSession.status === null || objSession.status === '' || objSession.status === undefined || objSession.status !== 'active')) {
      next('/login')
    } else {
      next()
    }
  }
})

export default vueRouter

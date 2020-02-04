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
import UniversityDownload from '@/components/university-onboard/university-download'
import Register2 from '@/components/logon/register2'
import OrderIndex from '@/components/order-manage'
import UserIndex from '@/components/user'

import mode from '../prodProperties'
import store from '../store'
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
      path: '/university',
      component: UniversityOnboardIndex,
      name: 'UniversityOnboard',
      redirect: '/university/registrasi',
      children: [
        {
          path: '/university/register/:id?',
          name: 'RegisterUniv',
          component: UniversityOnboard
        },
        {
          path: '/university/registrasi',
          name: 'DownloadUniv',
          component: UniversityDownload
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
        },
        {
          path: 'order',
          component: OrderIndex,
          name: 'Order',
          redirect: 'order/listOrder',
          children: [
            {
              path: 'listOrder',
              component: () => import('@/components/order-manage/order-list'),
              name: 'OrderList'
            },
            {
              path: 'addOrder/:id',
              component: () => import('@/components/order-manage/order-add'),
              name: 'OrderAdd'
            },
            {
              path: 'viewOrder/:id',
              component: () => import('@/components/order-manage/order-view'),
              name: 'OrderView'
            }
          ]
        },
        {
          path: 'user',
          component: UserIndex,
          name: 'User',
          redirect: 'beranda',
          children: [
            {
              path: 'changePassword',
              component: () => import('@/components/user/user-edit'),
              name: 'UserEdit'
            }
          ]
        }
      ]
    }
  ]
})

vueRouter.beforeEach((to, from, next) => {
  let objSession = ''

  if (to.path.includes('/login') && (objSession !== null || objSession !== '') && (objSession.status !== undefined || objSession.status !== '')) {
    next('/admin')
  } else {
    next()
  }
  if (!to.path.includes('admin')) {
    next()
  } else {
    objSession = JSON.parse(sessionStorage.getItem('umuSS'))
    if ((objSession === undefined || objSession === null) || (objSession.status === null || objSession.status === '' || objSession.status === undefined || objSession.status !== 'active')) {
      next('/login')
    } else {
      next()
    }
  }
  if (to.path.includes('order') && store.state.permissionData.order_r === 0) {
    next('/admin')
  } else {
    next()
  }
})

export default vueRouter

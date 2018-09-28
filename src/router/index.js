import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
import Layout from '@/views/layout/layout'
Vue.use(Router)
export const constantRouterMap = [
  {path: '/login',name:'login',component: _import('login/index'),hidden: true},
  { path: '/404', name:'404',component: _import('errorPage/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: {title: 'dashboard',icon:'dashboard'}
    }]
  }
]
export default new Router({
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/document',
    component: Layout,
    children:[{
      path:'index',
      component: _import('document/index'),
      name: 'document',
      meta: {title: 'document',icon:'document'}
    }]
  },
  {
    path: '/components',
    component: Layout,
    name: 'components',
    redirect: 'noredirect',
    meta: {title: 'components',icon: 'components'},
    alwaysShow: true,
    children: [{
      path: 'index',
      component: _import('components-demo/index'),
      name: 'componentIndex',
      meta: {title: 'componentIndex'}
     },
     {
      path: 'demo',
      component: _import('components-demo/demo'),
      name: 'componentDemo',
      meta: {title: 'componentDemo'}
     }
    ]
  },
  {
    path: '/table',
    component: Layout,
    name: 'table',
    redirect: 'noredirect',
     meta: {title: 'table',icon: 'table'},
    children:[{
      path:'basisTable',
      component: _import('table/basisTable'),
      name: 'basisTable',
      meta: {title: 'basisTable'}
    },
    {
      path:'customTable',
      component: _import('table/customTable'),
      name: 'customTable',
      meta: {title: 'customTable'}
    },
     {
      path:'picTable',
      component: _import('table/picTable'),
      name: 'picTable',
      meta: {title: 'picTable'}
    },
    {
      path:'testCustomTable',
      component: _import('table/testCustomTable'),
      name: 'testCustomTable',
      meta: {title: 'testCustomTable'}
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

import Vue from 'vue'
import Router from 'vue-router'
// const _import = require('./_import_' + process.env.NODE_ENV)
import Layout from '@/views/layout/layout'
import nestedRouter from './nested'
Vue.use(Router)
export const constantRouterMap = [
  {path: '/login',name:'login',component: () => import('@/views/login/index'),hidden: true},
  { path: '/404', name:'404',component: () => import('@/views/errorPage/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
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
      component: () => import('@/views/document/index'),
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
      component: () => import('@/views/components-demo/index'),
      name: 'componentIndex',
      meta: {title: 'componentIndex'}
     },
     {
      path: 'demo',
      component: () => import('@/views/components-demo/demo'),
      name: 'componentDemo',
      meta: {title: 'componentDemo'}
     },
     {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'tinymce',
      meta: {title: 'tinymce'}
     }
    ]
  },
  {
    path: '/article',
    component: Layout,
    name: 'article',
    redirect: 'noredirect',
    meta: {title: 'article',icon: 'article'},
    alwaysShow: true,
    children: [{
      path: 'create',
      component: () => import('@/views/article/create'),
      name: 'createArticle',
      meta: {title: 'createArticle'}
     },
     {
      path: 'edit',
      component: () => import('@/views/article/edit'),
      name: 'editArticle',
      meta: {title: 'editArticle'},
      hidden: true
     },
     {
      path: 'list',
      component: () => import('@/views/article/list'),
      name: 'articleList',
      meta: {title: 'articleList'}
     }
    ]
  },
  nestedRouter,
  {
    path: '/table',
    component: Layout,
    name: 'table',
    redirect: 'noredirect',
     meta: {title: 'table',icon: 'table'},
    children:[{
      path:'basisTable',
      component: () => import('@/views/table/basisTable'),
      name: 'basisTable',
      meta: {title: 'basisTable'}
    },
    {
      path:'customTable',
      component: () => import('@/views/table/customTable'),
      name: 'customTable',
      meta: {title: 'customTable'}
    },
     {
      path:'picTable',
      component: () => import('@/views/table/picTable'),
      name: 'picTable',
      meta: {title: 'picTable'}
    },
    {
      path:'testCustomTable',
      component: () => import('@/views/table/testCustomTable'),
      name: 'testCustomTable',
      meta: {title: 'testCustomTable'}
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

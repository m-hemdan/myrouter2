import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)
Vue.config.silent = true
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact/:userId',
    name:'contact',
    component:()=>import('../views/contact.vue')
  },
  {
    path:'/AnElsherka',
    name:'aboutThecompany',
    component:()=>import('../views/ToolbarTabs/AnElsherka.vue')

  },
  {
    path:'/birthOfCompany',
    name:'birthOfCompany',
    component:()=>import('../views/ToolbarTabs/birthOfCompany.vue')
  },
  {
    path:'/BranchOFCompany',
    name:'BranchOfCompany',
    component:()=>import('../views/ToolbarTabs/branchOfCompany.vue')

  },
  {
    path:'/visionAndMessage',
    name:'visionAndMessage',
    component:()=>import('../views/ToolbarTabs/VisionAndMessage.vue')
  }
  ,
  {
    path:'/organizationStructure',
    name:'organizationStructure',
    component:()=>import('../views/ToolbarTabs/OrganizationStructure.vue')
  },
  {
    path:'/companyAchivement',
    name:'companyAchivement',
    component:()=>import('../views/ToolbarTabs/companyAchivement.vue')
  }
 /* {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

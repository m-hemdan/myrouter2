import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)
Vue.config.silent = true
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact/:userId',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
  /* عن الشركه  */
  {
    path: '/AnElsherka',
    name: 'aboutThecompany',
    component: () => import('../views/ToolbarTabs/AnElsherka.vue')

  },
  {
    path: '/birthOfCompany',
    name: 'birthOfCompany',
    component: () => import('../views/ToolbarTabs/birthOfCompany.vue')
  },
  {
    path: '/BranchOFCompany',
    name: 'BranchOfCompany',
    component: () => import('../views/ToolbarTabs/branchOfCompany.vue')

  },
  {
    path: '/visionAndMessage',
    name: 'visionAndMessage',
    component: () => import('../views/ToolbarTabs/VisionAndMessage.vue')
  }
  ,
  {
    path: '/organizationStructure',
    name: 'organizationStructure',
    component: () => import('../views/ToolbarTabs/OrganizationStructure.vue')
  },
  {
    path: '/companyAchivement',
    name: 'companyAchivement',
    component: () => import('../views/ToolbarTabs/companyAchivement.vue')
  },
  {
    path: '/adviceAndContact',
    name: 'adviceAndContact',
    component: () => import('../views/AdviceAndservice/adviceAndContact.vue')

  },
  /*  التوعيه */
  {
    path: '/forKids',
    name: 'forKids',
    component: () => import('../views/AdviceAndservice/forKids.vue')

  },
  {
    path: '/toWomen',
    name: 'toWomen',
    component: () => import('../views/AdviceAndservice/toWomen')

  },
  /*  جوده المياه  */
  {
    path: '/water-quality',
    name: 'waterQuality',
    component: () => import('../views/QualityOfWater/waterQuality.vue')

  },
  {
    path: '/refining-water',
    name: 'refiningWater',
    component: () => import('../views/QualityOfWater/refiningWater.vue')

  },
  {
    path: '/lab-of-company-water',
    name: 'lab-of-company-water',
    component: () => import('../views/QualityOfWater/labOfCompanyWater.vue')

  },
  /* المناقصات */
  {
    path: '/إحلال وتجديد شبكات المياه علي مستوي محافظه الوادي الجديد',
    name: "firstTendersCompany",
    component: () => import("../views/Tenders/ehlalWTagdedshbkatelmaya.vue")
  },
  {
    path: '/توريد طلمبات اعماق غاطسه',
    name: "firstTendersCompany",
    component: () => import("../views/Tenders/TawreedTolmbatAmaaGadesa.vue")
  },
  {
    path: '/شبكات مدنيه باريس بالوادي الجديد',
    name: "firstTendersCompany",
    component: () => import("../views/Tenders/shbkatmdentbares.vue")
  },
  {
    path: '/صرف صحي أبوتيج',
    name: "firstTendersCompany",
    component: () => import("../views/Tenders/sarfsehyaboteg.vue")
  },
  {
    path: '/صرف صحي البداري',
    name: "firstTendersCompany",
    component: () => import("../views/Tenders/ehlalWTagdedshbkatelmaya.vue")
  },
  /*   صرف صحي  */
  {
    path: '/Riddence-waste-water',
    name: 'riddenceWasteWater',
    component: () => import('../views/WasteWater/RiddenceWasteWater.vue')
  },
  {
    path: '/sewage-treatment',
    name: 'SewageTreatment',
    component: () => import('../views/WasteWater/SewageTreatment.vue')
  },
 
  {
    path: '/kind-of-waste-water',
    name: 'KindOfWasteWater',
    component: () => import('../views/WasteWater/KindStationOfWasteWater.vue')
  },
  {
    path: '/waste-water-in-manufactring',
    name: 'WasteWaterInManufactring',
    component: () => import('../views/WasteWater/manufactring.vue')
  },
  {
    path: '/save-web-waste-water',
    name: 'SaveWebWasteWater',
    component: () => import('../views/WasteWater/SaveWebWasteWater.vue')
  },
  {
    path: '/manufactring-waste',
    name: 'ManufactringWasteWater',
    component: () => import('../views/WasteWater/manufactringWaste.vue')
  },
 /* وظائف*/ 
 {
  path: '/jobs-and-compitaion',
  name: 'jobsAndCompitaion',
  component: () => import('../views/Jobs/jobsAndCompitaion.vue')
},
{
  path: '/result-Of-compitaion',
  name: 'resultOfCompitaion',
  component: () => import('../views/Jobs/resultOfCompitaion.vue')
},
  {
    path: "*",
    redirect: { name: "home" }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

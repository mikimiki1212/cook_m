import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Business from '@/components/Business'
import Company from '@/components/Company'
import Service from '@/components/Service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    }
  ]
})

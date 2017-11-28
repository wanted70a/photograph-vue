// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import toastr from 'toastr'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import App from './App'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import ResetPassword from './pages/forgotPassword/ResetPassword'
import DashboardPage from './pages/DashboardPage'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component('icon', Icon)
/* eslint-disable no-new */

const routes = [
    {path: '/', component: App, name:'home'},
    {path: '/forgot', component: ForgotPassword, name:'forgotPassword'},
    {path: '/reset', component: ResetPassword, name:'resetPassword'},
    {path: '/dashboard', component: DashboardPage, name:'dashboard', meta: { requiresAuth: true}}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const authUser = JSON.parse(window.localStorage.getItem('authUser'))
        if (authUser && authUser.access_token){
            next()
            toastr.success('User logged in')
        }
        else{
            next({name:'home'})
            toastr.error('User is not logged in, please log in')
        }
    }
    next()
})

new Vue({
    router
}).$mount('#app')

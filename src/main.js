
import { createRouter, createWebHistory } from 'vue-router'
import Flutterwave from 'flutterwave-vue3'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import Residential from './components/Residential.vue'
import Business from './components/Business.vue'
import Roam from './components/Roam.vue'
import mobility from './components/mobility.vue'
import maritime from './components/Maritime.vue'
import aviation from './components/Aviation.vue'
import contact from './components/contact.vue'
import order from './components/order/order.vue'

import success from './components/order/success.vue'

import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', component:Residential},
        {path:'/business', component:Business},
        {path:'/roam', component:Roam},
        {path:'/mobility', component:mobility},
        {path:'/maritime', component:maritime},
        {path:'/aviation', component:aviation},
        {path:'/contact', component:contact},
        {path:'/pyt/order', component:order},
        {path:'/pyt/success/:fname/:email/:city/:address', component:success},
    ]
})
const app = createApp(App);
// app.component('header', header)
app.use(router)
app.use(Flutterwave)
app.mount('#app')

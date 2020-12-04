import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./views/home.vue";
import Singin from "./views/singin.vue";
import Register from "./views/register.vue";
import Trials from "./views/trials.vue";
import fillAccount from "./views/fillAccount.vue";
import Users from "./views/Users.vue";
import Location from "./views/Location.vue";
import About from "./views/about.vue";
import Products from "./views/products.vue"; 

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path:'/register',
        name: 'register',
        component: Register
    },
    {
        path:'/singin',
        name: 'singin',
        component: Singin
    },
    {
        path:'/fillAccount',
        name: 'fillAccount',
        component: fillAccount
    },
    {
        path:'/trials',
        name: 'trials',
        component: Trials
    },
    {
        path:'/Users',
        name: 'Users',
        component: Users
    },
    {
        path:'/products',
        name: 'products',
        component: Products
    },
    {
        path:'/about',
        name: 'about',
        component: About
    },
    {
        path:'/Location',
        name: 'Location',
        component: Location
    }
];


const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
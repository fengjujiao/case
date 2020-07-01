import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 // import one from '../views/one/one'

export default new Router({
    routes:[
        {
            path:'/',
            name:'login',
            component: () => import('../views/login.vue')
        },
        {
            path:'/home',
            name:'home',
            component: () => import('../views/home.vue'),
            children:[
                {
                    path:'one',
                    name:'one',
                    redirect:'/home/one/one_first',
                    component: () => import('../views/one/one.vue'),
                    children: [
                        {
                            path:'one_first',
                            name:'one_first',
                            component: () => import('../views/one/one_first.vue'),
                            // redirect:'/home/one/one_first/new_first',
                            children:[
                                {
                                    path:'new_first',
                                    name:'new_first',
                                    component:() =>import('../views/one/one_first/new_first.vue'),
                                },
                                {
                                    path:'new_two',
                                    name:'new_two',
                                    component:() =>import('../views/one/two_first/new_two.vue')
                                }
                            ]
                        },
                        {
                            path:'two_first',
                            name:'two_first',
                            component: () => import('../views/one/two_first.vue')
                        }
                    ]
                },
                {
                    path:'new_form',
                    name:'new_form',
                    component: () => import('../views/one/new_form.vue'),
                    meta:[
                        {name:'选项一',path:'/home/one'},
                        {name:'系统配置',path:'/home/one/two_first'},
                        {name:'详情'},
                    ]
                },
                {
                    path:'two',
                    name:'two',
                    component: () => import('../views/two/two.vue')
                },
                {
                    path:'three',
                    name:'three',
                    component: () => import('../views/three/three.vue')
                }
            ]
        },
    ]
})

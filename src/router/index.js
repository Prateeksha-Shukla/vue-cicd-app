import { createRouter, createWebHistory } from 'vue-router'
import CodeStage from '../components/CodeStage.vue'

const routes = [

{
path:'/code',
name:'CodeStage',
component:CodeStage
}

]

const router = createRouter({
history:createWebHistory(),
routes
})

export default router
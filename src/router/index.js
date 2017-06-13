import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UI from '@/components/UI'
import Layout from '@/views/layout/Layout'
import Index from '@/views/index/index'
import Table from '@/views/table/table'

Vue.use(Router);

export default new Router({
    routes: [
        /**
         * 三级联动
         */
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        /**
         * ElementUi测试路由
         */
        {
            path: '/ui',
            name: 'UI',
            component: UI
        },

        /**
         * 嵌套路由实现
         */
        {
            path: '/tb',
            component: Layout,
            children: [
                {
                    path: '',           // 默认显示模板
                    component: Index,
                    name: 'table',
                },
                {
                    path: 'table',      // 子路由 '/tb/table'
                    component: Table,
                    name: 'example'
                }
            ]
        },
    ]
})

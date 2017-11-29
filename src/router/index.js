import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/Home'], resolve)
const Main = resolve => require(['@/components/Main'], resolve)
const About = resolve => require(['@/components/About'], resolve)
const Count = resolve => require(['@/components/Count'], resolve)
const History = resolve => require(['@/components/History'], resolve)
const More = resolve => require(['@/components/More'], resolve)
const Add = resolve => require(['@/components/Add'], resolve)
const File = resolve => require(['@/components/file/File'], resolve)
const FileDetail = resolve => require(['@/components/file/FileDetail'], resolve)
const FileEdit = resolve => require(['@/components/file/FileEdit'], resolve)

const Admin = resolve => require(['@/components/admin/Index'], resolve)
const AdminLogin = resolve => require(['@/components/admin/Login'], resolve)
const AdminUser = resolve => require(['@/components/admin/User'], resolve)
const AdminManager = resolve => require(['@/components/admin/Manager'], resolve)
const AdminManagerDetail = resolve => require(['@/components/admin/ManagerDetail'], resolve)
const AdminUserDetail = resolve => require(['@/components/admin/UserDetail'], resolve)

const System = resolve => require(['@/components/system/Index'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        // redirect: '/files'
        component: Home,
        children: [
            {
                path: '',
                component: Main
            }
        ]
    }, {
        path: '/count',
        component: Count
    }, {
        path: '/about',
        component: About
    }, {
        path: '/history',
        component: History
    }, {
        path: '/more',
        component: More
    }, {
        path: '/add',
        component: Add
    }, {
        path: '/files',
        component: File
    }, {
        path: '/files/:path/edit',
        component: FileEdit
    }, {
        path: '/files/detail',
        component: FileDetail
    },
    // 管理平台
    {
        path: '/admin/users',
        component: AdminUser
    },
    {
        path: '/admin',
        component: Admin
    },
    // 系统
    {
        path: '/admin/system',
        component: System
    }
]

export default new Router({
    mode: 'history',
    routes: routes
})

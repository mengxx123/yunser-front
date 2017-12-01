import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/Home'], resolve)
const Main = resolve => require(['@/components/Main'], resolve)
const About = resolve => require(['@/components/About'], resolve)

const Login = resolve => require(['@/components/Login'], resolve)
const Register = resolve => require(['@/components/Register'], resolve)

const UserDetail = resolve => require(['@/components/UserDetail'], resolve)

const ArticleDetail = resolve => require(['@/components/article/Detail'], resolve)
const Article = resolve => require(['@/components/article/Article'], resolve)

const Mine = resolve => require(['@/components/Mine'], resolve)

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
const AdminUserAdd = resolve => require(['@/components/admin/UserAdd'], resolve)
const AdminUserDetail = resolve => require(['@/components/admin/UserDetail'], resolve)

const AdminManager = resolve => require(['@/components/admin/Manager'], resolve)
const AdminManagerDetail = resolve => require(['@/components/admin/ManagerDetail'], resolve)

const Menu = resolve => require(['@/components/admin/Menu'], resolve)

const AdminApp = resolve => require(['@/components/admin/App'], resolve)

const System = resolve => require(['@/components/system/Index'], resolve)

const Project = resolve => require(['@/components/project/Index'], resolve)

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
    },
    {
        path: '/add',
        component: Add
    },
    {
        path: '/mine',
        component: Mine
    },
    // 菜单相关
    {
        path: '/admin/menus',
        component: Menu
    },
    // 文件相关
    {
        path: '/files',
        component: File
    }, {
        path: '/files/:path/edit',
        component: FileEdit
    }, {
        path: '/files/detail',
        component: FileDetail
    },
    {
        path: '/users/:id',
        component: UserDetail
    },
    // 文章相关
    {
        path: '/articles',
        component: Article
    },
    {
        path: '/articles/:id',
        component: ArticleDetail
    },
    // 账号相关
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    // 管理平台
    {
        path: '/admin',
        component: Admin
    },
    // 用户管理
    {
        path: '/admin/users',
        component: AdminUser
    },
    {
        path: '/admin/users/add',
        component: AdminUserAdd
    },
    {
        path: '/admin/users/:id',
        component: AdminUserDetail
    },
    // 应用管理
    {
        path: '/admin/apps',
        component: AdminApp
    },
    // 系统
    {
        path: '/admin/system',
        component: System
    },
    // 项目
    {
        path: '/admin/project',
        component: Project
    },
    {
        path: '/admin/login',
        component: AdminLogin
    }
]

export default new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

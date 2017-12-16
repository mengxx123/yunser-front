import Vue from 'vue'
import Router from 'vue-router'
import storage from '../util/storage'

const Home = resolve => require(['VIEW/Home'], resolve)
const Main = resolve => require(['VIEW/Main'], resolve)
const About = resolve => require(['VIEW/About'], resolve)
const Feedback = resolve => require(['VIEW/Feedback'], resolve)

const Login = resolve => require(['VIEW/Login'], resolve)
const Register = resolve => require(['VIEW/Register'], resolve)

const UserDetail = resolve => require(['VIEW/UserDetail'], resolve)

const ArticleDetail = resolve => require(['VIEW/article/Detail'], resolve)
const Article = resolve => require(['VIEW/article/Article'], resolve)
const MyArticle = resolve => require(['VIEW/article/MyArticle'], resolve)
const ArticleAdd = resolve => require(['VIEW/article/ArticleAdd'], resolve)

const Mine = resolve => require(['VIEW/Mine'], resolve)

const Count = resolve => require(['VIEW/Count'], resolve)
const History = resolve => require(['VIEW/History'], resolve)
const More = resolve => require(['VIEW/More'], resolve)
const Add = resolve => require(['VIEW/Add'], resolve)
// 常用页面
const Settings = resolve => require(['VIEW/Settings'], resolve)
const Help = resolve => require(['VIEW/Help'], resolve)

const File = resolve => require(['VIEW/file/File'], resolve)
const File2 = resolve => require(['VIEW/file/File2'], resolve)
const FileDetail = resolve => require(['VIEW/file/FileDetail'], resolve)
const FileEdit = resolve => require(['VIEW/file/FileEdit'], resolve)

const Admin = resolve => require(['VIEW/admin/Index'], resolve)
const AdminLogin = resolve => require(['VIEW/admin/Login'], resolve)

const AdminUser = resolve => require(['VIEW/admin/User'], resolve)
const AdminUserAdd = resolve => require(['VIEW/admin/UserAdd'], resolve)
const AdminUserDetail = resolve => require(['VIEW/admin/UserDetail'], resolve)

const AdminManager = resolve => require(['VIEW/admin/Manager'], resolve)
const AdminManagerDetail = resolve => require(['VIEW/admin/ManagerDetail'], resolve)

const Menu = resolve => require(['VIEW/admin/Menu'], resolve)

const AdminApp = resolve => require(['VIEW/admin/App'], resolve)

const System = resolve => require(['VIEW/system/Index'], resolve)

const Project = resolve => require(['VIEW/project/Index'], resolve)

const Message = resolve => require(['VIEW/im/Message'], resolve)
const Contacts = resolve => require(['VIEW/im/Contacts'], resolve)
// 时间
const TimeHome = resolve => require(['VIEW/time/Home'], resolve)
const TimeMain = resolve => require(['VIEW/time/Main'], resolve)
const TimeAbout = resolve => require(['VIEW/time/About'], resolve)
const TimeCount = resolve => require(['VIEW/time/Count'], resolve)
const TimeHistory = resolve => require(['VIEW/time/History'], resolve)
const TimeMore = resolve => require(['VIEW/time/More'], resolve)
const TimeAdd = resolve => require(['VIEW/time/Add'], resolve)
// 商城
const ShopDetail = resolve => require(['VIEW/shop/ShopDetail'], resolve)
const GoodsDetail = resolve => require(['VIEW/shop/GoodsDetail'], resolve)
const MyAddress = resolve => require(['VIEW/shop/Address'], resolve)
const AddressAdd = resolve => require(['VIEW/shop/AddressAdd'], resolve)
const AddressEdit = resolve => require(['VIEW/shop/AddressEdit'], resolve)

const County = resolve => require(['VIEW/County'], resolve)

// 开发者平台
const Debug = resolve => require(['VIEW/Debug'], resolve)
const Develop = resolve => require(['VIEW/develop/Home'], resolve)
const DeveloperAdd = resolve => require(['VIEW/develop/Add'], resolve)
const AdminDeveloper = resolve => require(['VIEW/develop/Admin'], resolve)
// 邮件
const AdminEmail = resolve => require(['VIEW/admin/Email'], resolve)

const Error404 = resolve => require(['VIEW/Error404'], resolve)

const Exam = resolve => require(['VIEW/Exam'], resolve)
// 笑话
const Joke = resolve => require(['VIEW/joke/Joke'], resolve)
const JokeDetail = resolve => require(['VIEW/joke/JokeDetail'], resolve)

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
    },
    {
        path: '/count',
        component: Count
    },
    {
        path: '/404',
        component: Error404
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/feedback',
        component: Feedback
    },
    {
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
        component: Mine,
        meta: {
            auth: true
        },
    },
    // 其他
    {
        path: '/help',
        component: Help
    },
    {
        path: '/settings',
        component: Settings
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
    },
    {
        path: '/files2',
        component: File2
    },
    {
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
    {
        path: '/me/articles',
        component: MyArticle
    },
    // 账号相关
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            title: '注册'
        }
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
    },
    // 消息
    {
        path: '/me/contacts',
        component: Contacts
    },
    {
        path: '/me/messages',
        component: Message
    },
    // 测试
    {
        path: '/exam',
        component: Exam
    },
    // 商城
    {
        path: '/shops/:id',
        component: ShopDetail
    },
    {
        path: '/goodses/:id',
        component: GoodsDetail
    },
    {
        path: '/me/addresses',
        component: MyAddress
    },
    {
        path: '/addresses/add',
        component: AddressAdd
    },
    {
        path: '/addresses/:id/edit',
        component: AddressEdit
    },
    {
        path: '/county',
        component: County
    },
    // 时间
    {
        path: '/time',
        component: TimeHome,
        children: [
            {
                path: '',
                component: TimeMain
            }
        ]
    }, {
        path: '/time/count',
        component: TimeCount
    }, {
        path: '/time/about',
        component: TimeAbout
    }, {
        path: '/time/history',
        component: TimeHistory
    }, {
        path: '/time/more',
        component: TimeMore
    },
    {
        path: '/time/add',
        component: TimeAdd
    },
    // debug
    {
        path: '/debug',
        component: Debug
    },
    {
        path: '/develop',
        component: Develop
    },
    {
        path: '/developers/add',
        component: DeveloperAdd
    },
    {
        path: '/admin/develop',
        component: AdminDeveloper
    },
    // 邮件
    {
        path: '/admin/email',
        component: AdminEmail
    },
    {
        path: '*',
        redirect: '/404'
    },
    // 笑话
    {
        path: '/jokes',
        component: Joke
    },
    {
        path: '/jokes/:id',
        component: JokeDetail
    },
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

const APP_NAME = '云设'

function getTitle(title) {
    if (title) {
        return title + ' - ' + APP_NAME
    } else {
        return APP_NAME
    }
}

router.beforeEach((to, from, next) => {
    // TODO /admin 跳转到 /cn/admin
    if (to.path === '/admin/home') {
        router.push('/cn/admin')
        return
    }

    if (/login/.test(to.path)) {
        if (storage.get('accessToken')) {
            router.push('/') // TODO
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.auth)) {
        window.redirect = encodeURIComponent(to.path)
        let redirect = encodeURIComponent(to.path)

        if (storage.get('accessToken')) {
            next()
        } else {
            router.push({path: '/login', query: {redirect: redirect}})
        }
    } else {
        if (to.meta.title) {
            document.title = getTitle(to.meta.title)
        } else {
            document.title = getTitle()
        }
        next()
    }
})

export default router
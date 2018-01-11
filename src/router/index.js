import Vue from 'vue'
import Router from 'vue-router'
import storage from '../util/storage'

const Home = resolve => require(['VIEW/Home'], resolve)
const Product = resolve => require(['VIEW/Product'], resolve)
const Main = resolve => require(['VIEW/Main'], resolve)
const About = resolve => require(['VIEW/About'], resolve)
const Feedback = resolve => require(['VIEW/Feedback'], resolve)

const Login = resolve => require(['VIEW/account/Login'], resolve)
const Register = resolve => require(['VIEW/account/Register'], resolve)

const UserDetail = resolve => require(['VIEW/UserDetail'], resolve)

const Me = resolve => require(['VIEW/me/Index'], resolve)
const Mine = resolve => require(['VIEW/Mine'], resolve)

const Count = resolve => require(['VIEW/Count'], resolve)
const History = resolve => require(['VIEW/History'], resolve)
const More = resolve => require(['VIEW/More'], resolve)
const Add = resolve => require(['VIEW/Add'], resolve)
// 常用页面
const Settings = resolve => require(['VIEW/Settings'], resolve)
const Help = resolve => require(['VIEW/Help'], resolve)

const Admin = resolve => require(['VIEW/admin/Index'], resolve)
const AdminLogin = resolve => require(['VIEW/admin/Login'], resolve)
// 用户
const AdminUser = resolve => require(['VIEW/user/User'], resolve)
const AdminUserAdd = resolve => require(['VIEW/user/UserAdd'], resolve)
const AdminUserDetail = resolve => require(['VIEW/user/UserDetail'], resolve)

const AdminManager = resolve => require(['VIEW/admin/Manager'], resolve)
const AdminManagerDetail = resolve => require(['VIEW/admin/ManagerDetail'], resolve)

// 应用
const AdminApp = resolve => require(['VIEW/app/App'], resolve)
const AdminAppDetail = resolve => require(['VIEW/app/AppDetail'], resolve)

const Ticket = resolve => require(['VIEW/ticket/Ticket'], resolve)

// 系统
const System = resolve => require(['VIEW/system/Index'], resolve)
const Menu = resolve => require(['VIEW/menu/Menu'], resolve)

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
const Shop = resolve => require(['VIEW/shop/Shop'], resolve)
const ShopDetail = resolve => require(['VIEW/shop/ShopDetail'], resolve)
const GoodsDetail = resolve => require(['VIEW/shop/GoodsDetail'], resolve)
const MyAddress = resolve => require(['VIEW/shop/Address'], resolve)
const AddressAdd = resolve => require(['VIEW/shop/AddressAdd'], resolve)
const AddressEdit = resolve => require(['VIEW/shop/AddressEdit'], resolve)

const County = resolve => require(['VIEW/County'], resolve)

const Debug = resolve => require(['VIEW/Debug'], resolve)

const Oauth = resolve => require(['VIEW/oauth/Oauth'], resolve)
const OauthManagement = resolve => require(['VIEW/oauth/Management'], resolve)
const OauthAgreement = resolve => require(['VIEW/oauth/Agreement'], resolve)
const WeiboCallback = resolve => require(['VIEW/weibo/Callback'], resolve)
const GitHubCallback = resolve => require(['VIEW/oauth/CallbackGitHub'], resolve)
const WeiboError = resolve => require(['VIEW/weibo/Error'], resolve)
// 邮件
const AdminEmail = resolve => require(['VIEW/email/Email'], resolve)
const EmailNew = resolve => require(['VIEW/email/EmailNew'], resolve)
const Sms = resolve => require(['VIEW/sms/Sms'], resolve)
const SmsLog = resolve => require(['VIEW/sms/Log'], resolve)
const SmsSend = resolve => require(['VIEW/sms/Send'], resolve)

const Role = resolve => require(['VIEW/permission/Role'], resolve)
const RoleDetail = resolve => require(['VIEW/permission/RoleDetail'], resolve)
const UserRole = resolve => require(['VIEW/permission/UserRole'], resolve)
const Permission = resolve => require(['VIEW/permission/Permission'], resolve)

const Error404 = resolve => require(['VIEW/Error404'], resolve)
const AdminError404 = resolve => require(['VIEW/admin/Error404'], resolve)

const Exam = resolve => require(['VIEW/Exam'], resolve)
// 笑话
const Joke = resolve => require(['VIEW/joke/Joke'], resolve)
const JokeDetail = resolve => require(['VIEW/joke/JokeDetail'], resolve)

const Profile = resolve => require(['VIEW/account/Profile'], resolve)
const Secure = resolve => require(['VIEW/account/Secure'], resolve)

const GitHub = resolve => require(['VIEW/GitHub'], resolve)
const EmailValid = resolve => require(['VIEW/account/EmailValid'], resolve)
const PasswordFind = resolve => require(['VIEW/account/PasswordFind'], resolve)
const PasswordReset = resolve => require(['VIEW/account/PasswordReset'], resolve)

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
        path: '/products',
        component: Product
    },
    {
        path: '/count',
        component: Count
    },
    {
        path: '/email/valid',
        component: EmailValid
    },
    {
        path: '/password/find',
        component: PasswordFind
    },
    {
        path: '/password/reset',
        component: PasswordReset
    },
    {
        path: '/github',
        component: GitHub
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/account/profile',
        component: Profile
    },
    {
        path: '/account/secure',
        component: Secure
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
        path: '/me',
        component: Me,
        meta: {
            auth: true
        }
    },
    {
        path: '/mine',
        component: Mine,
        meta: {
            auth: true
        }
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

    {
        path: '/users/:id',
        component: UserDetail
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
        component: Admin,
        meta: {
            auth: true
        }
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
    // 工单
    {
        path: '/admin/tickets',
        component: Ticket
    },
    // 应用管理
    {
        path: '/admin/apps',
        component: AdminApp
    },
    {
        path: '/admin/apps/:id',
        component: AdminAppDetail
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
        path: '/admin/shops',
        component: Shop
    },
    {
        path: '/admin/shops/:id',
        component: ShopDetail
    },
    {
        path: '/admin/goodses/:id',
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
        path: '/oauth/authorize',
        component: Oauth
    },
    {
        path: '/oauth/management',
        component: OauthManagement
    },
    {
        path: '/oauth/agreement',
        component: OauthAgreement
    },
    {
        path: '/weibo/callback',
        component: WeiboCallback
    },
    {
        path: '/weibo/error',
        component: WeiboError
    },
    {
        path: '/oauth/callback/github',
        component: GitHubCallback
    },
    // 邮件
    {
        path: '/admin/email',
        component: AdminEmail
    },
    {
        path: '/admin/email/new',
        component: EmailNew
    },
    {
        path: '/admin/sms',
        component: Sms
    },
    {
        path: '/admin/sms/logs',
        component: SmsLog
    },
    {
        path: '/admin/sms/send',
        component: SmsSend
    },
    {
        path: '/admin/roles',
        component: Role
    },
    {
        path: '/admin/roles/:id',
        component: RoleDetail
    },
    {
        path: '/admin/users/:id/roles',
        component: UserRole
    },
    {
        path: '/admin/permissions',
        component: Permission
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
    {
        path: '/404',
        component: Error404
    },
    {
        path: '/admin/*',
        component: AdminError404
    },
    {
        path: '*',
        component: Error404
    }
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

    if (to.matched.some(record => record.meta.auth)) {
        window.redirect = encodeURIComponent(to.path)
        let redirect = encodeURIComponent(to.path)

        if (storage.get('accessToken')) {
            next()
        } else {
            router.push({path: '/login', query: {redirect_uri: redirect}})
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
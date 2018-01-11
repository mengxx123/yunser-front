<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="调试">
                <ui-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <ui-icon-menu icon="more_vert" slot="right">
                    <ui-menu-item title="分享"/>
                </ui-icon-menu>
            </ui-appbar>
        </header>
        <main class="page-body">
            <div v-if="isLogin">
                <p>欢迎您</p>
                {{ user.name }}
                <div v-if="user.id === '1'">
                    <router-link to="/debug">调试</router-link>
                </div>
            </div>
            <div v-else>
                <router-link to="/login">登录</router-link>
                <ui-raised-button label="注册" primary to="/register"/>
            </div>

            <router-link to="/admin">管理平台</router-link>
            <router-link to="/articles/1">文章详情</router-link>
            <router-link to="/articles">文章列表</router-link>
            <router-link to="/mine">个人中心</router-link>
            <router-link to="/debug">调试</router-link>

            <h2>个人中心</h2>
            <router-link to="/mine">个人中心</router-link>
            <router-link to="/me/articles">我的文章</router-link>

            <li><a href="http://icon.yunser.com" target="_blank">图标</a> </li>
            <li><a href="http://chart.yunser.com" target="_blank">云设图+</a> </li>
            <li><router-link to="/jokes">笑话</router-link></li>

            <router-link to="/forum">论坛</router-link>
            <router-link to="/users/1">用户详情</router-link>
            <router-link to="/articles">文章</router-link>
            <router-link to="/articles/1">文章详情</router-link>
            <router-link to="/mine">个人中心</router-link>
            <div>个人中心</div>
            <router-link to="/me/messages">消息</router-link>
            <router-link to="/me/contacts">联系人</router-link>
            <router-link to="/me/articles">我的文章</router-link>
            <div>推荐用户</div>
            <router-link to="/users/1">建帆远航</router-link>
            <router-link to="/users/2">二哥</router-link>
            <router-link to="/users/3">小三</router-link>
            <div>工具</div>
            <router-link to="/me/articles">我的文章</router-link>
            <router-link to="/apps/1">todo</router-link>
            <router-link to="/time">时间</router-link>
            <div>商城</div>
            <router-link to="/shops/1">店铺1</router-link>
            <router-link to="/me/addresses">收货地址</router-link>
        </main>
        <ui-footer></ui-footer>
        <ui-drawer :open="open" :docked="docked" @close="toggle()">
            <ui-list @itemClick="docked ? '' : toggle()">
                <ui-list-item title="个人资料">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="相册">
                    <ui-icon value="photo" slot="left"/>
                </ui-list-item>
                <ui-list-item title="收藏">
                    <ui-icon value="collections" slot="left"/>
                </ui-list-item>
                <ui-list-item title="表情">
                    <ui-icon value="tag_faces" slot="left"/>
                </ui-list-item>
                <ui-list-item title="表情">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="钱包">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="设置" to="/settings">
                    <ui-icon value="chat_bubble" slot="left"/>
                    <ui-badge content="new" slot="after" secondary />
                </ui-list-item>
            </ui-list>
        </ui-drawer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                open: false,
                docked: true,
                isLogin: false,
                user: null
                // 主题
//                theme: 'light',
//                themes: {
//                    light,
//                    dark,
//                    carbon,
//                    teal
//                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                // 检查登录
                if (this.$storage.get('accessToken')) {
                    this.isLogin = true
                    this.user = this.$storage.get('user')
                    console.log(this.user)
                }
            },
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            },
            add() {
//                this.changeTheme('light')
                this.$router.push('/add')
            },
            // 主题
            changeTheme(theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''
            },
            getThemeStyle() {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                return styleEl
            }
        }
    }
</script>

<style scoped>
</style>

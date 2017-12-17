<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="云设">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <!--<mu-icon-menu icon="more_vert" slot="right">-->
                    <!--<mu-menu-item title="分享"/>-->
                <!--</mu-icon-menu>-->
            </mu-appbar>
        </header>
        <main class="page-body">
            <div class="container">
                <div v-if="isLogin">
                    <p>欢迎您</p>
                    {{ user.name }}
                    <div @click="loginOut">退出登录</div>
                    <div v-if="user.id === '1'">
                        <router-link to="/debug">调试</router-link>
                    </div>
                    <div>
                        <router-link to="/account">账号中心</router-link>
                    </div>
                </div>
                <div v-else>
                    <router-link to="/login">登录</router-link>
                    <mu-raised-button label="注册" primary to="/register"/>
                </div>

                <router-link to="/login">登录</router-link>
                <router-link to="/articles/1">文章详情</router-link>
                <router-link to="/articles">文章列表</router-link>
                <router-link to="/mine">个人中心</router-link>
                <router-link to="/debug">调试</router-link>

                <h2>产品大全</h2>
                <ul>
                    <li><a href="http://tool.yunser.com" target="_blank">云设工具</a> </li>
                    <li><router-link to="/jokes">笑话</router-link></li>
                </ul>
                <router-link to="/team">团队</router-link>


                <img :src="qrcodeUrl">
                <div><a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17154000号</a></div>
                <!--<a href="http://team.yunser.com" target="_blank">关于我们</a> -->
            </div>
        </main>
        <!--<ui-footer></ui-footer>-->
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="个人资料">
                    <mu-icon value="chat_bubble" slot="left"/>
                </mu-list-item>
                <mu-list-item title="相册">
                    <mu-icon value="photo" slot="left"/>
                </mu-list-item>
                <mu-list-item title="收藏">
                    <mu-icon value="collections" slot="left"/>
                </mu-list-item>
                <mu-list-item title="表情">
                    <mu-icon value="tag_faces" slot="left"/>
                </mu-list-item>
                <mu-list-item title="表情">
                    <mu-icon value="chat_bubble" slot="left"/>
                </mu-list-item>
                <mu-list-item title="钱包">
                    <mu-icon value="chat_bubble" slot="left"/>
                </mu-list-item>
                <mu-list-item title="设置" to="/settings">
                    <mu-icon value="chat_bubble" slot="left"/>
                    <mu-badge content="new" slot="after" secondary />
                </mu-list-item>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                qrcodeUrl: '',
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
                this.qrcodeUrl = 'http://localhost:1026/qrcode?content=' + encodeURIComponent('https://www.yunser.com')
                // 检查登录
                if (this.$storage.get('accessToken')) {
                    this.isLogin = true
                    this.user = this.$storage.get('user')
                    console.log(this.user)
                }
            },
            loginOut() {
                // TODO 请求
                this.$storage.set('accessToken', null)
                this.$storage.set('user', null)
                this.isLogin = false
                this.user = null
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

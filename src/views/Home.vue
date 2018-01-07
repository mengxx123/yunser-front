<template>
    <ui-page name="home" :page="{title: '云设'}">
        <ui-container top>

            <router-link to="/admin">管理平台</router-link>
            <router-link to="/articles/1">文章详情</router-link>
            <router-link to="/articles">文章列表</router-link>
            <router-link to="/mine">个人中心</router-link>
            <router-link to="/debug">调试</router-link>

            <h2>个人中心</h2>
            <router-link to="/mine">个人中心</router-link>
            <router-link to="/me/articles">我的文章</router-link>

            <h2>产品大全</h2>
            <ul>
                <li><a href="http://tool.yunser.com" target="_blank">云设工具</a> </li>
                <li><a href="http://font.yunser.com" target="_blank">字体</a> </li>
                <li><a href="http://icon.yunser.com" target="_blank">图标</a> </li>
                <li><a href="http://chart.yunser.com" target="_blank">云设图+</a> </li>
                <li><router-link to="/jokes">笑话</router-link></li>
            </ul>

        </ui-container>
    </ui-page>
</template>

<script>
    export default {
        data () {
            return {
                qrcodeUrl: '',
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

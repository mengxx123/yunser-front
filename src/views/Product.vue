<template>
    <ui-page name="home" :page="{title: '云设'}">
        <ui-container top>
            <h2 class="product-title">产品大全</h2>
            <ul class="product-list">
                <li class="item">
                    <a class="link" href="http://tool.yunser.com" target="_blank">
                        <img class="img" src="/static/img/product_tool.png">
                        <h3 class="title">云设工具</h3>
                    </a>
                </li>
                <li>
                    <a class="link" href="http://font.yunser.com/" target="_blank">
                        <img class="img" src="/static/img/product_font.svg">
                        <h3 class="title">字体</h3>
                    </a>
                </li>
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

<style lang="scss" scoped>
    .product-title {
        font-size: 20px;
        margin: 16px 0;
    }
    .product-list {
        .item {
            float: left;
            width: 25%;
        }
        .link {
            color: inherit;
        }
        .img {
            float: left;
            width: 32px;
            height: 32px;
            margin-right: 8px;
        }
        .title {
            float: left;
            line-height: 32px;
        }
    }
</style>

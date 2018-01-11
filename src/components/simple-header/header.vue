<template>
    <header class="page-header">
        <ui-container>
            <router-link class="main-title" to="/">云设</router-link>
        </ui-container>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                isLogin: false,
                user: null
            }
        },
        props: {
            title: {
                type: String,
                default: '云设'
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
                this.getAd()
            },
            getAd() {

            }
        }
    }
</script>

<style scoped>
    .main-title {
        line-height: 64px;
        color: #ffffff;
        font-size: 24px;
    }
    .page-header {
        position: relative;
        z-index: 100;
        background-color: #2196f3;
        color: #ffffff;
        margin-bottom: 0;
    }
</style>

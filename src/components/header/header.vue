<template>
    <header class="page-header">
        <ui-container>
            <ui-appbar :title="title" style="box-shadow: none">
                <!--<div v-if="isLogin">-->
                    <!--{{ user.name }}-->
                    <!--<div @click="loginOut">退出登录</div>-->
                    <!--<div>-->
                        <!--<router-link to="/account">账号中心</router-link>-->
                    <!--</div>-->
                <!--</div>-->
                <ui-flat-button label="个人中心" slot="right" to="/me" v-if="isLogin" style="margin-right: 16px" />

                <ui-flat-button label="登录" slot="right" to="/login" v-if="!isLogin" style="margin-right: 16px" />
                <ui-raised-button label="注册" to="/register" v-if="!isLogin" slot="right"/>
            </ui-appbar>
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
                default: '云设2'
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

<style>
    .page-header {
        background-color: #2196f3;
        color: #ffffff;
    }
</style>

<template>
    <div class="page page-login">
        <main class="page-body">
            <div class="login-content">
                <div class="ui-ad-box" v-if="ad">
                    <a :href="ad.url" target="_blank">
                        <img :src="ad.content">
                    </a>
                </div>
                <div class="login-box">
                    <div v-if="type === 'password'">
                        <h1>密码登录</h1>
                        <a class="type">
                            <img class="type-img" src="/static/img/login-type-qrcode.png" @click="toggleType">
                        </a>
                        <div></div>
                        <div>
                            <ui-text-field v-model="account" label="邮箱/用户名/手机号" labelFloat/>
                        </div>
                        <div>
                            <ui-text-field v-model="password" label="密码" labelFloat/>
                        </div>
                        <div>
                            <ui-checkbox v-model="rememberPwd" label="记住密码"/>
                            <router-link to="/">忘记密码</router-link>
                            <router-link to="/register">立即注册</router-link>
                        </div>
                        <ui-raised-button class="login-btn" label="登录" primary @click="login"/>
                        <button @click="weiboLogin">微博登录</button>
                    </div>
                    <div v-if="type === 'qrcode'">
                        <h1>扫码登录</h1>
                        <a class="type">
                            <img class="type-img" src="/static/img/login-type-password.png" @click="toggleType">
                        </a>
                        <div v-if="false">
                            <img src="/static/img/error.svg">
                            <div>二维码已失效</div>
                            <ui-raised-button class="login-btn" label="刷新" primary @click=""/>
                        </div>
                        <div>
                            <img class="qrcode" src="/static/img/qrcode.png">
                            <div>下载 <a href="http://yunser.com">云设 APP</a>，扫一扫登录</div>
                            <div>
                                <span>免输入</span>
                                <span>更快</span>
                                <span>更安全</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                account: '',
                password: '',
                rememberPwd: false,
                ad: null,
                type: 'password',
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                if (this.$storage.get('rememberPwd')) {
                    this.rememberPwd = true
                    this.account = this.$storage.get('account')
                    this.password = this.$storage.get('password')
                }
                this.getAd()
            },
            toggleType() {
                this.type = this.type === 'password' ? 'qrcode' : 'password'
            },
            weiboLogin() {
                this.$http.get('/weibo/login')
                    .then(response => {
                        location.href = response.data
//                        window.open(response.data)
                    },
                    response => {
                        console.log(response)
                        alert(response.msg)
                    })
            },
            getAd() {
                this.$http.get('/ads/1')
                    .then(response => {
                            this.ad = response.data
                        },
                        response => {
                            console.log(response)
                            alert(response.msg)
                        })
            },
            login() {
                if (this.rememberPwd) {
                    this.$storage.set('rememberPwd', this.rememberPwd)
                    this.$storage.set('account', this.account)
                    this.$storage.set('password', this.password)
                }

                if (!this.account) {
                    console.log('请输入注册邮箱')
                    return
                }
                if (!this.password) {
                    console.log('请输入密码')
                    return
                }

                this.$http.post('/login', {
                    account: this.account,
                    password: this.password
                })
                    .then(response => {
                        let data = response.data
                        this.$storage.set('user', data.user)
                        this.$storage.set('accessToken', data.accessToken)
                        this.redirect()
                    },
                    response => {
                        console.log(response)
                        alert(response.msg)
                    })
            },
            // 跳转
            redirect() {
                let params = this.$qs.parse(location.search.replace('?', ''))
                if (params.redirect) {
                    let redirectUrl = decodeURIComponent(params.redirect)
                    if (redirectUrl.match(/^http/)) {
                        location.href = redirectUrl
                    } else {
                        this.$router.push(redirectUrl)
                    }
                } else {
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .page-login {
        background-color: #f1f1f1;
    }
    .login-box {
        position: relative;
        /*margin: 100px auto;*/
        width: 320px;
        padding: 16px;
        background-color: #fff;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
        .login-btn {
            width: 100%;
        }
        .type {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
        }
        .type-img {
            width: 100%;
            height: 100%;
        }
    }
    @media screen and (max-width: 600px) {
        .login-box {
            box-shadow: none;
        }
    }
    .ui-ad-box {
        /*position: fixed;*/
        /*right: 0;*/
        /*bottom: 0;*/
        width: 510px;
        height: 315px;
        margin-right: 80px;
    }
</style>

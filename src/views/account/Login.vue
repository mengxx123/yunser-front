<template>
    <ui-simple-page title="注册">
        <div class="ui-ad-box" v-if="ad && false">
            <a :href="ad.url" target="_blank">
                <img :src="ad.content">
            </a>
        </div>
        <div class="page-simple-box">
            <div v-if="type === 'password'">
                <h1>密码登录</h1>
                <a class="type">
                    <img class="type-img" src="/static/img/login-type-password.png" @click="toggleType">
                </a>
                <div></div>
                <div>
                    <ui-text-field v-model="account" label="邮箱/用户名/手机号" labelFloat/>
                </div>
                <div>
                    <ui-text-field v-model="password" type="password" label="密码" labelFloat/>
                </div>
                <div>
                    <ui-checkbox v-model="rememberPwd" label="记住密码"/>
                    <router-link to="/password/find">忘记密码</router-link>
                    <router-link to="/register">立即注册</router-link>
                </div>
                <ui-raised-button class="login-btn" label="登录" primary @click="login"/>
            </div>
            <div v-if="type === 'sms'">
                <h1>短信登录</h1>
                <a class="type">
                    <img class="type-img" src="/static/img/login-type-qrcode.png" @click="toggleType">
                </a>
                <div></div>
                <div>
                    <ui-text-field v-model="phone" label="手机号" labelFloat/>
                </div>
                <div>
                    <ui-text-field class="qrcode-input" v-model="code" type="password" label="验证码" labelFloat/>
                    <button @click="sendCode">发送验证码</button>
                </div>
                <div>
                    <ui-checkbox v-model="rememberPwd" label="记住密码"/>
                    <router-link to="/password/find">忘记密码</router-link>
                    <router-link to="/register">立即注册</router-link>
                </div>
                <ui-raised-button class="login-btn" label="登录" primary @click="loginByCode"/>
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
            <ul class="oauth-list">
                <li class="item item-weibo" title="微博登陆" @click="weiboLogin">
                    <i class="icon icon-weibo"></i>
                </li>
                <!--<li class="item item-qq" title="QQ 登陆" @click="qqLogin">-->
                    <!--<i class="icon icon-qq"></i>-->
                <!--</li>-->
                <!--<li class="item item-wechat" title="微信登陆">-->
                    <!--<i class="icon icon-wechat"></i>-->
                <!--</li>-->
                <!--<li class="item item-github" title="GitHub 登陆" @click="githubLogin">-->
                    <!--<i class="icon icon-github"></i>-->
                <!--</li>-->
            </ul>
        </div>
    </ui-simple-page>
</template>

<script>
    export default {
        data () {
            return {
                type: 'password',
                // 密码登录
                account: '',
                password: '',
                rememberPwd: false,
                // 短信登陆
                code: '',
                phone: '',
                // 广告
                ad: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let type = this.$route.query.type
                let redirectUri = this.$route.query.redirect_uri
                redirectUri = decodeURIComponent(redirectUri)

                if (this.$storage.get('accessToken')) {
                    this.redirect()
                }

                if (this.$storage.get('rememberPwd')) {
                    this.rememberPwd = true
                    this.account = this.$storage.get('account')
                    this.password = this.$storage.get('password')
                }
//                this.getAd()
            },
            toggleType() {
                if (this.type === 'password') {
                    this.type = 'sms'
                } else if (this.type === 'sms') {
                    this.type = 'qrcode'
                } else {
                    this.type = 'password'
                }
            },
            weiboLogin() {
                this.$http.get('/weibo/login')
                    .then(response => {
//                        location.href = response.data
//                        window.open(response.data)
                    },
                    response => {
                        console.log(response)
                        alert(response.msg)
                    })
            },
            githubLogin() {
                let oauth = {
                    url: 'https://github.com/login/oauth/authorize',
                    clientId: '1a8c09090ad0df708701',
                    state: '123',
                    redirectUri: 'https://yunser.com/oauth/callback/github'
                }
                location.href = `${oauth.url}?client_id=${oauth.clientId}&state=${oauth.state}&redirect_uri=${encodeURIComponent(oauth.redirectUri)}`
            },
            qqLogin() {
                location.href = `https://graph.qq.com/oauth2.0/authorize?client_id=1106595873&response_type=code&state=13&redirect_uri=${encodeURIComponent('https://yunser.com/qq/callback')}`
                var A=window.open("oauth/index.php","TencentLogin",
                        "width=450,height=320,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1")
//                this.$http.get('/qq/login')
//                    .then(response => {
//                        location.href = response.data
//                    },
//                    response => {
//                        console.log(response)
//                        alert(response.msg)
//                    })
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
            sendCode() {
                if (!this.phone) {
                    alert('请输入手机号')
                    return
                }
                if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)) {
                    alert('手机号输入不正确')
                    return
                }
                this.$http.get(`/login/send_code?phone=${this.phone}`)
                        .then(response => {
                        },
                        response => {
                            console.log(response)
                            alert(response.msg)
                        })
            },
            loginByCode() {
                if (!this.phone) {
                    alert('请输入手机号')
                    return
                }
                if (!this.code) {
                    alert('请输入短信验证码')
                    return
                }
                this.$http.post('/login/sms', {
                    phone: this.phone,
                    code: this.code
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
            login() {
                if (this.rememberPwd) {
                    this.$storage.set('rememberPwd', this.rememberPwd)
                    this.$storage.set('account', this.account)
                    this.$storage.set('password', this.password)
                }

                if (!this.account) {
                    alert('请输入注册邮箱')
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
                let type = this.$route.query.type
                let redirectUri = this.$route.query.redirect_uri
                let accessToken = this.$storage.get('accessToken')

                console.log('啦啦啦' + redirectUri)
                if (type === 'oss') {
                    if (redirectUri) {
                        redirectUri = decodeURIComponent(redirectUri)
                        console.log(redirectUri)
                        if (redirectUri.match(/^http/)) {
                            location.href = redirectUri + '&accessToken=' + accessToken
                        } else {
                            this.$router.push(redirectUri)
                        }
                    } else {
                        this.$router.push('/')
                    }
//                        location.href = redirectUri + '?code=123456'
                } else {
                    if (redirectUri) {
                        redirectUri = decodeURIComponent(redirectUri)
                        console.log(redirectUri)
                        if (redirectUri.match(/^http/)) {
                            location.href = redirectUri
                        } else {
                            this.$router.push(redirectUri)
                        }
                    } else {
                        this.$router.push('/')
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/var";

    .oauth-list {
        @include clearfix;
        .item {
            float: left;
            width: 40px;
            height: 40px;
            margin-right: 16px;
            text-align: center;
            line-height: 40px;
            font-size: 24px;
            border: 2px solid #f00;
            border-radius: 50%;
            cursor: pointer;
        }
        @mixin iconColor($color) {
            color: $color;
            border-color: $color;
            &:hover {
                color: #fff;
                background-color: $color;
            }
        }
        .item-qq {
            @include iconColor(#19a9f1);
        }
        .item-wechat {
            @include iconColor(#00bb00);
        }
        .item-weibo {
            @include iconColor(#ed2b2f);
        }
        .item-github {
            @include iconColor(#000);
        }
    }
    .logo {
        width: 320px;
        margin-bottom: 16px;
        font-size: 32px;
        color: #fff;
        font-weight: bold;
    }
    .page-login {
        background-color: #f1f1f1;
    }
    .page-simple-box {
        .login-btn {
            width: 100%;
            margin-bottom: 16px;
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

<template>
    <ui-simple-page title="注册">
        <div class="page-simple-box">
            <h1>注册</h1>
            <div>
                <ui-text-field v-model="account" label="邮箱" labelFloat/>
            </div>
            <div>
                <ui-text-field v-model="nickname" label="昵称" labelFloat/>
            </div>
            <div>
                <ui-text-field v-model="password" type="password" label="密码" labelFloat/>
            </div>
            <ui-raised-button class="login-btn" label="注册" primary @click="register"/>
            <div>
                已有账号，点击<router-link to="/login">登录</router-link>
            </div>
        </div>
    </ui-simple-page>
</template>

<script>
    export default {
        data () {
            return {
                account: '1418503647@qq.com',
                nickname: '我就是我',
                password: '1'
            }
        },
        mounted() {

        },
        methods: {
            register() {
                this.$http.post('/register', {
                    account: this.account,
                    name: this.nickname,
                    password: this.password
                }).then(response => {
                        let data = response.data
                        console.log(data)
                        alert('注册成功，请登录邮箱进行验证')
                        this.$router.push('/login')
                    },
                    response => {
                        alert(response.msg)
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-box {
        margin: 100px auto;
        width: 320px;
        padding: 16px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
        .login-btn {
            width: 100%;
            margin-bottom: 16px;
        }
    }
    @media screen and (max-width: 600px) {
        .login-box {
            box-shadow: none;
        }
    }
</style>

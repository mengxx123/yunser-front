<template>
    <div class="page page-home">
        <ui-simple-header title="重置密码"></ui-simple-header>
        <main class="page-body">
            <div class="login-box">
                <h1>重置密码</h1>
                <div>
                    <ui-text-field v-model="email" label="邮箱" labelFloat disabled/>
                </div>
                <div>
                    <ui-text-field v-model="password" label="密码" type="password" labelFloat/>
                </div>
                <div>
                    <ui-text-field v-model="passwordConfirm" label="确认密码" type="password" labelFloat/>
                </div>
                <ui-raised-button class="login-btn" label="重置密码" primary @click="find"/>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: '',
                passwordConfirm: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.email = this.$route.query.email
            },
            find() {
                if (!this.email) {
                    alert('请输入邮箱')
                    return
                }
                if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.email)) {
                    alert('邮箱输入不正确')
                    return
                }
                if (!this.password) {
                    alert('请输入密码')
                    return
                }
                // TODO
                if (this.passwordConfirm !== this.password) {
                    alert('两次密码输入不一致')
                    return
                }
                let code = this.$route.query.code
                this.$http.post(`/password/reset`, {
                    email: this.email,
                    password: this.password,
                    code: code
                })
                    .then(response => {
                        alert('密码重置成功，点击确定登录')
                        this.$router.push('/login')
                    },
                    response => {
                        console.log(response)
                        alert(response.msg)
                    })
            }
        }
    }
</script>

<style scoped>
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

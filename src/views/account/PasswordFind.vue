<template>
    <ui-simple-page title="邮箱验证">
        <div class="page-simple-box">
            <h1>找回密码</h1>
            <div>
                <ui-text-field v-model="email" label="邮箱" labelFloat/>
            </div>
            <ui-raised-button class="login-btn" label="找回密码" primary @click="find"/>
        </div>
    </ui-simple-page>
</template>

<script>
    export default {
        data () {
            return {
                email: ''
            }
        },
        mounted() {
            this.valid()
        },
        methods: {
            find() {
                if (!this.email) {
                    alert('请输入邮箱')
                    return
                }
                if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.email)) {
                    alert('邮箱输入不正确')
                    return
                }
                this.$http.get(`/email/reset_password?email=${this.email}`)
                    .then(response => {
                        alert('重置密码链接已经发送至该邮箱')
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

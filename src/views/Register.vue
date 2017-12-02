<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="注册">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <div class="login-box">
                <div>
                    <mu-text-field v-model="account" label="邮箱" labelFloat/>
                </div>
                <div>
                    <mu-text-field v-model="nickname" label="昵称" labelFloat/>
                </div>
                <div>
                    <mu-text-field v-model="password" label="密码" labelFloat/>
                </div>
                <mu-raised-button class="login-btn" label="注册" primary @click="register"/>
            </div>
        </main>
    </div>
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
                this.$http.post('/users', this.$qs.stringify({
                    account: this.account,
                    nickname: this.nickname,
                    password: this.password
                }))
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.$router.push('/login')
                        }
                    },
                    response => {
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
        }
    }
    @media screen and (max-width: 600px) {
        .login-box {
            box-shadow: none;
        }
    }
</style>

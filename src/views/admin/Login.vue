<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="登录">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <input v-model="account" placeholder="用户名或邮箱">
            <input v-model="password" placeholder="密码">
            <button type="button" @click="login">登录</button>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                account: '1418503647@qq.com',
                password: '1'
            }
        },
        mounted() {
            console.log(new Date().getTime())
        },
        methods: {
            login(item) {
                // TODO 验证

                this.$http.post('/login', this.$qs.stringify({
                    account: this.account,
                    password: this.password
                }))
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.users = data.data.user
                            }
                        },
                        response => {
                            console.log(response)
                        })
            }
        }
    }
</script>

<style scoped>

</style>

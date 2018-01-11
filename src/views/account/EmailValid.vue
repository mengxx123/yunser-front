<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="邮箱验证">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <ui-content-block>
                正在验证，请稍后...
            </ui-content-block>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        mounted() {
            this.valid()
        },
        methods: {
            valid() {
                let code = this.$route.query.code
                let email = this.$route.query.email
                if (!email || !code) {
                    alert('链接错误，请重新找回密码')
                    return
                }
                this.$http.get(`/email/valid?email=${email}&code=${code}`)
                    .then(response => {
                        let data = response.data
                        this.$storage.set('user', data.user)
                        this.$storage.set('accessToken', data.accessToken)
                        alert('邮箱验证成功，点击确定快速登录')
                        this.$router.push('/')
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

<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="用户详情">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            用户管理
            <div class="" v-if="user">
                <div>昵称：{{ user.nickname }}</div>
                <div>邮箱：{{ user.email }}</div>
                <div>手机号：{{ user.phone }}</div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let userId = this.$route.params.id
                this.$http.get('/users/' + userId)
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.user = data.data
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

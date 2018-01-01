<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="添加用户">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <ui-breadcrumb class="breadcrumb">
                <ui-breadcrumb-item href="/">首页</ui-breadcrumb-item>
                <ui-breadcrumb-item href="/admin/users">用户管理</ui-breadcrumb-item>
                <ui-breadcrumb-item>添加用户</ui-breadcrumb-item>
            </ui-breadcrumb>
            <div>
                <input v-model="user.nickname" placeholder="昵称"/>
                <input v-model="user.password" placeholder="密码"/>
                <button class="" @click="add">添加</button>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: {
                    nickname: '小云',
                    password: '111'
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            add () {
                this.$http.post('/users', this.$qs.stringify({
                    account: this.user.nickname,
                    password: this.user.password
                }))
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.users = data.data
                            }
                        },
                        response => {
                            console.log(response)
                        })
            },
            init() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-body {
        padding: 20px;
        .breadcrumb {
            margin-bottom: 20px;
        }
        .table {

        }
    }
</style>

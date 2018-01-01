<template>
    <ui-admin-page name="home" :page="{title: '用户详情'}" backable>
        <div class="" v-if="user">
            <div>用户名：{{ user.kname }}</div>
            <div>昵称：{{ user.nickname }}</div>
            <div>邮箱：{{ user.email }}</div>
            <div>手机号：{{ user.phone }}</div>
            <button @click="viewUserRole">角色管理</button>
            <button @click="viewUserPermission">权限管理</button>

        </div>
    </ui-admin-page>
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
                        this.user = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            viewUserRole() {
                let userId = this.$route.params.id
                this.$router.push(`/admin/users/${userId}/roles`)
            },
            viewUserPermission() {
                let userId = this.$route.params.id
                this.$router.push(`/admin/users/${userId}/permissions`)
            }
        }
    }
</script>

<style scoped>

</style>

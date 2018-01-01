<template>
    <ui-admin-page name="app" :page="page" breadcrumb>
        <div v-if="user">
            <img :src="getAvatar()">
            <button @click="modifyAvatar">修改头像</button>
            <div>{{ user.name }}</div>
        </div>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                page: {
                    title: '基本资料',
                    breadcrumb: [
                        {
                            title: '账号管理',
                            to: '/account/profile'
                        },
                        {
                            title: '基本资料'
                        }
                    ]
                },
                user: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            modifyAvatar() {
            },
            getAvatar() {
                return this.user.avatar
            },
            handleClick (newIndex) {
            },
            init() {
                let userId = this.$storage.get('user').id
                this.$http.get('/users/' + userId)
                        .then(response => {
                                    let data = response.data
                                    this.user = data
                                },
                                response => {
                                    console.log(response)
                                })
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>

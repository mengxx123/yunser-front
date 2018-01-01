<template>
    <ui-admin-page name="home" :page="{title: '短信营销'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item>短信营销</ui-breadcrumb-item>
        </ui-breadcrumb>
        <router-link to="/admin/sms/send">发送短信</router-link>
        <router-link to="/admin/sms/logs">发送历史</router-link>
        <ui-float-button class="ui-float-btn" icon="add" to="/admin/users/add"/>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                total: 50,
                current: 1,
                sms: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                this.$http.get('/sms')
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        this.sms = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            view(user) {
                this.$router.push('/admin/users/' + user.id)
            },
            remove(user) {
                this.$http.delete('/users/' + user.id)
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            for (let i = 0; i < this.users.length; i++) {
                                if (this.users[i].id === user.id) {
                                    this.users.splice(i, 1)
                                    break;
                                }
                            }
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            unselect () {
                this.$refs.table.unSelectAll()
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

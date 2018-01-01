<template>
    <ui-admin-page name="home" :page="{title: '短信营销'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/sms">短信营销</ui-breadcrumb-item>
            <ui-breadcrumb-item>发送记录</ui-breadcrumb-item>
        </ui-breadcrumb>
        <ui-table clas="table" multiSelectable enableSelectAll ref="table">
            <ui-thead>
                <ui-tr>
                    <ui-th>操作人</ui-th>
                    <ui-th>发送手机号</ui-th>
                    <ui-th>发送内容</ui-th>
                    <ui-th>操作</ui-th>
                </ui-tr>
            </ui-thead>
            <ui-tbody>
                <ui-tr v-for="log in logs" :key="log.id">
                    <ui-td>
                        <router-link :to="'/admin/users/' + log.user.id">{{ log.user.name }}</router-link>
                    </ui-td>
                    <ui-td>{{ log.phones }}</ui-td>
                    <ui-td>{{ log.content }}</ui-td>
                    <ui-td>
                        <button @click="view(log)">查看</button>
                        <button @click="remove(log)">删除</button>
                    </ui-td>
                </ui-tr>
            </ui-tbody>
        </ui-table>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                total: 50,
                current: 1,
                logs: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                this.$http.get('/sms/logs')
                    .then(response => {
                        let data = response.data
                        this.logs = data
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

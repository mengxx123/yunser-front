<template>
    <ui-admin-page name="home" :page="{title: '用户管理'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/users">用户管理</ui-breadcrumb-item>
            <ui-breadcrumb-item>用户</ui-breadcrumb-item>
        </ui-breadcrumb>
        <ui-table clas="table" multiSelectable enableSelectAll ref="table">
            <ui-thead>
                <ui-tr>
                    <ui-th>ID</ui-th>
                    <ui-th>用户名</ui-th>
                    <ui-th>邮箱</ui-th>
                    <ui-th>手机</ui-th>
                    <ui-th>操作</ui-th>
                </ui-tr>
            </ui-thead>
            <ui-tbody>
                <ui-tr v-for="user in users" :key="user.id">
                    <ui-td>{{ user.id }}</ui-td>
                    <ui-td>{{ user.name }}</ui-td>
                    <ui-td>
                        <router-link :to="`/admin/email/new?email=${user.email}`" v-if="user.email">{{ user.email }}</router-link>
                    </ui-td>
                    <ui-td>
                        <router-link :to="`/admin/sms/send?phone=${user.phone}`" v-if="user.phone">{{ user.phone }}</router-link>
                    </ui-td>
                    <ui-td>
                        <ui-raised-button label="查看" @click="view(user)" />
                        <ui-raised-button label="删除" @click="remove(user)" />
                    </ui-td>
                </ui-tr>
            </ui-tbody>
        </ui-table>
        <!--<ui-pagination :total="total" :current="current" @pageChange="handleClick"></ui-pagination>-->
        <ui-float-button class="ui-float-btn" icon="add" to="/admin/users/add"/>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                total: 50,
                current: 1,
                users: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                this.$http.get('/users')
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        this.users = data
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
                        for (let i = 0; i < this.users.length; i++) {
                            if (this.users[i].id === user.id) {
                                this.users.splice(i, 1)
                                break;
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

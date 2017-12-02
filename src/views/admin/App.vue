<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="应用管理">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-breadcrumb class="breadcrumb">
                <mu-breadcrumb-item href="/admin">首页</mu-breadcrumb-item>
                <mu-breadcrumb-item href="/admin/apps">应用管理</mu-breadcrumb-item>
                <mu-breadcrumb-item>应用</mu-breadcrumb-item>
            </mu-breadcrumb>
            <mu-table clas="table" multiSelectable enableSelectAll ref="table">
                <mu-thead>
                    <mu-tr>
                        <mu-th>ID</mu-th>
                        <mu-th>名称</mu-th>
                        <mu-th>描述</mu-th>
                        <mu-th>操作</mu-th>
                    </mu-tr>
                </mu-thead>
                <mu-tbody>
                    <mu-tr v-for="app in apps" :key="app.id">
                        <mu-td>{{ app.id }}</mu-td>
                        <mu-td>{{ app.name }}</mu-td>
                        <mu-td>{{ app.description }}</mu-td>
                        <mu-td>
                            <button @click="view(user)">查看</button>
                            <button @click="remove(user)">删除</button>
                        </mu-td>
                    </mu-tr>
                </mu-tbody>
            </mu-table>
            <mu-pagination :total="total" :current="current" @pageChange="handleClick"></mu-pagination>
        </main>
        <mu-float-button class="ui-float-btn" icon="add" to="/admin/users/add"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                total: 50,
                current: 1,
                apps: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                this.$http.get('/apps')
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.apps = data.data
                        }
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

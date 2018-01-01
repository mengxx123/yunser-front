<template>
    <ui-admin-page name="home" :page="{title: '角色'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/sms">短信营销</ui-breadcrumb-item>
            <ui-breadcrumb-item>角色列表</ui-breadcrumb-item>
        </ui-breadcrumb>
        <ui-table clas="table" multiSelectable enableSelectAll ref="table">
            <ui-thead>
                <ui-tr>
                    <ui-th>角色名称</ui-th>
                    <ui-th>描述</ui-th>
                    <ui-th>操作</ui-th>
                </ui-tr>
            </ui-thead>
            <ui-tbody>
                <ui-tr v-for="role in roles" :key="role.id">
                    <ui-td>{{ role.name }}</ui-td>
                    <ui-td>{{ role.description }}</ui-td>
                    <ui-td>
                        <button @click="view(role)">查看</button>
                        <button @click="remove(role)">删除</button>
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
                roles: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                this.$http.get('/roles')
                    .then(response => {
                        let data = response.data
                        this.roles = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            view(role) {
                this.$router.push('/admin/roles/' + role.id)
            },
            remove(role) {
                this.$http.delete('/roles/' + role.id)
                    .then(response => {
                        let data = response.data
                        if (data.code === 0) {
                            for (let i = 0; i < this.roles.length; i++) {
                                if (this.roles[i].id === role.id) {
                                    this.roles.splice(i, 1)
                                    break
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

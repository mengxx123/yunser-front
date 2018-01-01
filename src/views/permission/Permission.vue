<template>
    <ui-admin-page name="home" :page="{title: '权限'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/sms">短信营销</ui-breadcrumb-item>
            <ui-breadcrumb-item>权限列表</ui-breadcrumb-item>
        </ui-breadcrumb>
        <ui-table clas="table" multiSelectable enableSelectAll ref="table">
            <ui-thead>
                <ui-tr>
                    <ui-th>权限名称</ui-th>
                    <ui-th>权限代码</ui-th>
                    <ui-th>描述</ui-th>
                    <ui-th>操作</ui-th>
                </ui-tr>
            </ui-thead>
            <ui-tbody>
                <ui-tr v-for="permission in permissions" :key="permission.id">
                    <ui-td>{{ permission.name }}</ui-td>
                    <ui-td>{{ permission.code }}</ui-td>
                    <ui-td>{{ permission.description }}</ui-td>
                    <ui-td>
                        <button @click="view(permission)">查看</button>
                        <button @click="remove(permission)">删除</button>
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
                permissions: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                this.$http.get('/permissions')
                    .then(response => {
                        let data = response.data
                        this.permissions = data
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

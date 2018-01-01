<template>
    <ui-admin-page name="home" :page="{title: '角色'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/sms">短信营销</ui-breadcrumb-item>
            <ui-breadcrumb-item>角色详情</ui-breadcrumb-item>
        </ui-breadcrumb>
        <div v-if="role">
            <div>
                <div>{{ role.name }}</div>
                <div>{{ role.description }}</div>
            </div>
        </div>
        <ui-table clas="table" multiSelectable enableSelectAll ref="table" v-if="role">
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
                role: null,
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
                let roleId = this.$route.params.id
                this.$http.get('/roles/' + roleId)
                    .then(response => {
                        let data = response.data
                        this.role = data
                    },
                    response => {
                        console.log(response)
                    })
                this.$http.get(`/roles/${roleId}/permissions`)
                        .then(response => {
                                let data = response.data
                                this.permissions = data
                            },
                            response => {
                                console.log(response)
                            })
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

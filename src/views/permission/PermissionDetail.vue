<template>
    <ui-admin-page name="home" :page="{title: '权限详情'}">
        <div v-if="permission">
            permission
        </div>
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/sms">短信营销</ui-breadcrumb-item>
            <ui-breadcrumb-item>角色</ui-breadcrumb-item>
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
                permission: null,
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
                let permissionId = this.$route.params.id
                this.$http.get('/permissions/' + permissionId)
                    .then(response => {
                        let data = response.data
                        this.role = data
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

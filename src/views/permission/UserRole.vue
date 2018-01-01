<template>
    <ui-admin-page name="home" :page="{title: '用户权限设置'}" backable>
        <div class="" v-if="user">
            <div>{{ user.name }} 的权限</div>
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
        </div>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                user: null,
                roles: []
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
                this.$http.get(`/users/${userId}/roles`)
                        .then(response => {
                            let data = response.data
                            this.roles = data
                        },
                        response => {
                            console.log(response)
                        })
            }
        }
    }
</script>

<style scoped>

</style>

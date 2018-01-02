<template>
    <ui-me-page name="app" :page="page" breadcrumb>
        <ui-table clas="table" multiSelectable enableSelectAll ref="table">
            <ui-thead>
                <ui-tr>
                    <ui-th>应用名称</ui-th>
                    <ui-th>权限</ui-th>
                    <ui-th>操作</ui-th>
                </ui-tr>
            </ui-thead>
            <ui-tbody>
                <ui-tr v-for="authorize in authorizes" :key="authorize.id">
                    <ui-td>
                        <a :href="authorize.app.website" target="_blank">{{ authorize.app.name }}</a>
                    </ui-td>
                    <ui-td>{{ authorize.authorities }}</ui-td>
                    <ui-td>
                        <button @click="remove(authorize)">取消授权</button>
                    </ui-td>
                </ui-tr>
            </ui-tbody>
        </ui-table>
    </ui-me-page>
</template>

<script>
    export default {
        data () {
            return {
                page: {
                    title: '授权管理',
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
                authorizes: [],
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            test() {
                this.dealCode();
            },
            init() {
                this.code = this.$route.query.code
                if (!this.debug) {
                    this.dealCode();
                }
            },
            dealCode() {
                let userId = this.$storage.get('user').id
                this.$http.get(`/users/${userId}/authorizes`)
                    .then(response => {
                        this.authorizes = response.data
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

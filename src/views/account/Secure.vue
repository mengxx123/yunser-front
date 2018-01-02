<template>
    <ui-me-page name="app" :page="page" breadcrumb>
        <div>安全设置</div>
    </ui-me-page>
</template>

<script>
    export default {
        data () {
            return {
                total: 50,
                current: 1,
                apps: [],
                page: {
                    title: '安全设置',
                    breadcrumb: [
                        {
                            title: '工单管理',
                            to: '/admin/tickets'
                        },
                        {
                            title: '工单列表'
                        }
                    ]
                }
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
                        this.apps = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            view(user) {
                this.$router.push('/admin/apps/' + user.id)
            },
            remove(app) {
                this.$http.delete('/apps/' + app.id)
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        for (let i = 0; i < this.apps.length; i++) {
                            if (this.apps[i].id === app.id) {
                                this.apps.splice(i, 1)
                                break
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

<template>
    <ui-admin-page name="app" :page="{title: '店铺管理'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/apps">应用管理</ui-breadcrumb-item>
            <ui-breadcrumb-item>应用</ui-breadcrumb-item>
        </ui-breadcrumb>
        <ui-table clas="table" multiSelectable enableSelectAll ref="table">
            <ui-thead>
                <ui-tr>
                    <ui-th>ID</ui-th>
                    <ui-th>名称</ui-th>
                    <ui-th>描述</ui-th>
                    <ui-th>操作</ui-th>
                </ui-tr>
            </ui-thead>
            <ui-tbody>
                <ui-tr v-for="shop in shops" :key="shop.id">
                    <ui-td>{{ shop.id }}</ui-td>
                    <ui-td>{{ shop.name }}</ui-td>
                    <ui-td>{{ shop.description }}</ui-td>
                    <ui-td>
                        <button @click="view(shop)">查看</button>
                        <button @click="remove(shop)">删除</button>
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
                shops: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                this.$http.get('/shops')
                    .then(response => {
                        let data = response.data
                        this.shops = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            view(shop) {
                this.$router.push('/admin/shops/' + shop.id)
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

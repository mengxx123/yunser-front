<template>
    <div class="page page-home">
        <header class="page-header">
            <!--<mu-appbar title="关于我们">-->
                <!--<mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />-->
            <!--</mu-appbar>-->
        </header>
        <main class="page-body">
            <mu-breadcrumb class="breadcrumb">
                <mu-breadcrumb-item href="/">首页</mu-breadcrumb-item>
                <mu-breadcrumb-item href="/admin/users">用户管理</mu-breadcrumb-item>
                <mu-breadcrumb-item>用户</mu-breadcrumb-item>
            </mu-breadcrumb>
            <mu-table clas="table" multiSelectable enableSelectAll ref="table">
                <mu-thead>
                    <mu-tr>
                        <mu-th>ID</mu-th>
                        <mu-th>Name</mu-th>
                        <mu-th>Status</mu-th>
                    </mu-tr>
                </mu-thead>
                <mu-tbody>
                    <mu-tr>
                        <mu-td>1</mu-td>
                        <mu-td>John Smith</mu-td>
                        <mu-td>Employed</mu-td>
                    </mu-tr>
                    <mu-tr>
                        <mu-td>2</mu-td>
                        <mu-td>Randal White</mu-td>
                        <mu-td>Unemployed</mu-td>
                    </mu-tr>
                    <mu-tr>
                        <mu-td>3</mu-td>
                        <mu-td>Stephanie Sanders</mu-td>
                        <mu-td>Employed</mu-td>
                    </mu-tr>
                    <mu-tr>
                        <mu-td>4</mu-td>
                        <mu-td>Steve Brown</mu-td>
                        <mu-td>Employed</mu-td>
                    </mu-tr>
                </mu-tbody>
            </mu-table>
            <mu-pagination :total="total" :current="current" @pageChange="handleClick"></mu-pagination>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                total: 50,
                current: 1,
                users: [
                    {

                    }
                ]
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
//                this.$http.post('/users', this.$qs.stringify({
//                    industry: '互联网'
//                }))
//                    .then(response => {
//                            let data = response.data
//                            console.log(data)
//                        },
//                        response => {
//                            console.log(response)
//                        })
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

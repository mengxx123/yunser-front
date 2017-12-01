<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="菜单">
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
                    <mu-tr v-for="menu in menus" :key="menu.id">
                        <mu-td>{{ menu.id }}</mu-td>
                        <mu-td>{{ menu.name }}</mu-td>
                        <mu-td>{{ menu.content }}</mu-td>
                        <mu-td>
                            <button @click="view(user)">查看</button>
                            <button @click="remove(user)">删除</button>
                        </mu-td>
                    </mu-tr>
                </mu-tbody>
            </mu-table>
            <div>这是菜单项目</div>
            <ul class="menu-list">
                <li class="item" v-for="item in this.menu">
                    <div>
                        <a :href="item.url">{{ item.name }}</a>
                        <span @click="removeItem(item)">（删除）</span>
                        <span @click="removeDownItem(item)">（下移）</span>
                        <span @click="addItem(item)">（添加子菜单）</span>
                    </div>
                    <ul class="sub-menu" v-if="item.children && item.children.length">
                        <li class="item" v-for="it in item.children">
                            <a :href="it.url">{{ it.name }}</a>
                            <span @click="removeItem(it)">（删除）</span>
                        </li>
                    </ul>
                </li>
            </ul>

        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                total: 50,
                current: 1,
                menus: [],
                menu: [
                    {
                        id: '1',
                        name: '首页',
                        url: '/home'
                    },
                    {
                        id: '2',
                        name: '百度',
                        url: 'http://www.baidu.com',
                        target: '_blank'
                    },
                    {
                        id: '3',
                        name: '更多',
                        children: [
                            {
                                id: '4',
                                name: '关于',
                                url: '/about'
                            },
                            {
                                id: '5',
                                name: '设置',
                                url: '/settings'
                            }
                        ]
                    },
                ]
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get('/menus')
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.menus = data.data
                            }
                        },
                        response => {
                            console.log(response)
                        })
            },
            removeItem(removeItem) {
                for (let i = 0; i < this.menu.length; i++) {
                    let item = this.menu[i]
                    if (item.id === removeItem.id) {
                        this.menu.splice(i, 1)
                        break
                    }
                    if (item.children) {
                        let flag = false
                        console.log('找')
                        for (let idx = 0; idx < item.children.length; idx++) {
                            console.log(item.children[idx])
                            if (item.children[idx].id === removeItem.id) {
                                flag = true
                                console.log('找到了')
                                item.children.splice(idx, 1)
                                break
                            }
                        }
                        if (flag) {
                            break
                        }
                    }
                }
            },
            removeDownItem(item) {

            },
            addItem(item) {
                if (!item.children) {
                    item.children = []
                }
//                item.name = item.name
                item.children.push({
                    id: '' + new Date().getTime(),
                    name: '首页',
                    url: '/home'
                })
                item = Object.assign({}, item)
                console.log(this.menu)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu-list {
        overflow: hidden;
        border: 1px solid #ccc;
        .sub-menu {
            padding-left: 24px;
        }
        .item {
            /*float: left;*/
            margin-right: 20px;
        }
    }
    .page-body {
        padding: 20px;
        .breadcrumb {
            margin-bottom: 20px;
        }
        .table {

        }
    }
</style>

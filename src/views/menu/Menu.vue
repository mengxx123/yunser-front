<template>
    <ui-admin-page name="system" :page="{title: '菜单'}">
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
                <ui-tr v-for="menu in menus" :key="menu.id">
                    <ui-td>{{ menu.id }}</ui-td>
                    <ui-td>{{ menu.name }}</ui-td>
                    <ui-td>{{ menu.content }}</ui-td>
                    <ui-td>
                        <button @click="view(user)">查看</button>
                        <button @click="remove(user)">删除</button>
                    </ui-td>
                </ui-tr>
            </ui-tbody>
        </ui-table>
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
    </ui-admin-page>
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

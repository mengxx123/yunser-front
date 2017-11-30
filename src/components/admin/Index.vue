<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="管理平台">
                <mu-icon-button icon="menu" slot="left"/>
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-content-block>
                <router-link to="/system">系统</router-link>
                <p>云设工具致力于开发工具类 App，方便提高用户日常生活的效率。如果你有需求，我们也可以为你开发工具类 App！</p>
                <p>给我们发邮件：admin@yunser.com</p>
            </mu-content-block>

        </main>
        <mu-drawer :open="true" :docked="true">
            <mu-list>
                <mu-list-item title="11"/>
                <mu-list-item title="用户管理" toggleNested>
                    <mu-icon slot="left" value="inbox"/>
                    <mu-list-item slot="nested" title="Starred">
                        <mu-icon slot="left" value="grade"/>
                    </mu-list-item>
                    <mu-list-item slot="nested" disabled title="Sent mail" toggleNested>
                        <mu-icon slot="left" value="send"/>
                        <mu-list-item title="Drafts" slot="nested">
                            <mu-icon slot="left" value="drafts"/>
                        </mu-list-item>
                    </mu-list-item>
                    <mu-list-item slot="nested" title="Inbox" toggleNested>
                        <mu-icon slot="left" value="inbox"/>
                        <mu-list-item title="Drafts" slot="nested">
                            <mu-icon slot="left" value="drafts"/>
                        </mu-list-item>
                    </mu-list-item>
                </mu-list-item>
                <mu-list-item title="用户管理" to="/admin/users"/>
                <mu-list-item title="文件管理" to="/files"/>
                <mu-list-item title="系统" to="/admin/system"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [{
                    name: '跑步',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }, {
                    name: '吃饭',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }, {
                    name: '吃饭',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }],
                bottomNav: 'recents'
            }
        },
        mounted() {
            console.log(new Date().getTime())
        },
        methods: {
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            handleChange(val) {
                this.bottomNav = val
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

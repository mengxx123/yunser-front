<template>
    <div class="page page-home">
        <div class="page-side ui-paper-1">
            <mu-list>
                <mu-list-item title="应用管理" to="/admin/develop/apps"/>
                <mu-list-item title="用户管理" to="/admin/apps/1/users"/>
                <mu-list-item title="文件管理" to="/files"/>
                <mu-list-item title="系统" to="/admin/system"/>
                <mu-list-item title="文章管理"/>
                <mu-list-item title="统计分析"/>
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
            </mu-list>
        </div>
        <div class="page-content">
            <header class="page-header">
                <mu-appbar title="开发者管理平台">
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
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                developer: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let userId = this.$storage.get('user').id
                this.$http.get(`/users/${userId}/developer`)
                    .then(response => {
                        let data = response.data
                        if (data.code === 0) {
                            this.developer = data.data
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            register() {
                this.$router.push('/developers/add')
            }
        }
    }
</script>

<style scoped>
    .page-side {
        position: absolute;
        top: 0;
        left: 0;
        width: 256px;
        height: 100%;
    }
    .page-content {
        position: absolute;
        top: 0;
        left: 256px;
        right: 0;
        height: 100%;
    }
    .ui-paper-1 {
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
    }
</style>

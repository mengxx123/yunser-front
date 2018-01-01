<template>
    <ui-admin-page name="home" :page="page">
        <router-link to="/system">系统2</router-link>
        <p>云设工具致力于开发工具类 App，方便提高用户日常生活的效率。如果你有需求，我们也可以为你开发工具类 App！</p>
        <p>给我们发邮件：admin@yunser.com</p>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                page: {
                    title: '管理平台'
                },
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

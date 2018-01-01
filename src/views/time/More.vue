<template>
    <div class="page page-more">
        <header class="page-header">
            <ui-appbar title="更多"></ui-appbar>
        </header>
        <main class="page-body">
            <ui-list class="setting-list">
                <ui-list-item title="帮助与反馈"></ui-list-item>
                <ui-divider/>
                <ui-list-item title="版本">
                </ui-list-item>
                <ui-divider/>
                <ui-list-item title="关于我们" to="/about"></ui-list-item>
            </ui-list>
        </main>
        <ui-footer></ui-footer>
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
</style>

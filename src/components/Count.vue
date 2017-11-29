<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="统计"></mu-appbar>
        </header>
        <main class="page-body">
            <h2>统计</h2>
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
                }]
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
            },
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            }
        }
    }
</script>

<style scoped>
</style>

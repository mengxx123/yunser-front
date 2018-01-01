<template>
    <ui-admin-page name="system" :page="{title: '系统'}">
        <ui-content-block>
            <ui-sub-header>内存：</ui-sub-header>
            <ui-linear-progress mode="determinate" :value="memory"/>
            <p>云设工具致力于开发工具类 App，方便提高用户日常生活的效率。如果你有需求，我们也可以为你开发工具类 App！</p>
            <p>给我们发邮件：admin@yunser.com</p>

        </ui-content-block>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                memory: 80
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get('/system')
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                data = data.data
                                this.memory = (data.totalMemory - data.freeMemory) / data.totalMemory * 100
                            }
                        },
                        response => {
                            console.log(response)
                        })
            },
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

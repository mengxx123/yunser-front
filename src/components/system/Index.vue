<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="系统">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-content-block>
                <mu-sub-header>内存：</mu-sub-header>
                <mu-linear-progress mode="determinate" :value="memory"/>
                <p>云设工具致力于开发工具类 App，方便提高用户日常生活的效率。如果你有需求，我们也可以为你开发工具类 App！</p>
                <p>给我们发邮件：admin@yunser.com</p>

            </mu-content-block>

        </main>
    </div>
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

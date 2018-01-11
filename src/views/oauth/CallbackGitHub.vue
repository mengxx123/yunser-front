<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="Github回调">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <div v-if="debug">
                <h2>调试模式</h2>
                <input v-model="code">
                <button @click="test">测试</button>
            </div>
            <ui-content-block>
                <p>云设工具致力于开发工具类 App，方便提高用户日常生活的效率。如果你有需求，我们也可以为你开发工具类 App！</p>
                <p>给我们发邮件：admin@yunser.com</p>
            </ui-content-block>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                debug: false,
                code: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            test() {
                this.dealCode();
            },
            init() {
                this.code = this.$route.query.code
                if (!this.debug) {
                    this.dealCode();
                }
            },
            dealCode() {
                this.$http.get('/github/callback?code=' + this.code)
                    .then(response => {
                        let data = response.data
                        this.$storage.set('user', data.user)
                        this.$storage.set('accessToken', data.accessToken)
                        this.$router.push('/')
                    },
                    response => {
                        console.log(response)
                        alert(response.msg)
                    })
            }
        }
    }
</script>

<style scoped>
</style>

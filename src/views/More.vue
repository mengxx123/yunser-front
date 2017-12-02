<template>
    <div class="page page-more">
        <header class="page-header">
            <mu-appbar title="更多"></mu-appbar>
        </header>
        <main class="page-body">
            <mu-list class="setting-list">
                <mu-list-item title="帮助与反馈" to="/feedback"></mu-list-item>
                <mu-divider/>
                <mu-list-item title="版本">
                </mu-list-item>
                <mu-divider/>
                <mu-list-item title="关于我们" to="/about"></mu-list-item>
                <mu-list-item title="设置" to="/settings"></mu-list-item>
            </mu-list>
            <button @click="loginout">退出登录</button>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        mounted() {
        },
        methods: {
            loginout() {
                this.$storage.set('accesssToken', null)
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
</style>

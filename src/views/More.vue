<template>
    <div class="page page-more">
        <header class="page-header">
            <ui-appbar title="更多"></ui-appbar>
        </header>
        <main class="page-body">
            <ui-list class="setting-list">
                <ui-list-item title="帮助与反馈" to="/feedback"></ui-list-item>
                <ui-divider/>
                <ui-list-item title="版本">
                </ui-list-item>
                <ui-divider/>
                <ui-list-item title="关于我们" to="/about"></ui-list-item>
                <ui-list-item title="设置" to="/settings"></ui-list-item>
            </ui-list>
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

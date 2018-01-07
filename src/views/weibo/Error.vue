<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="微博回调">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <ui-content-block>
                微博登录失败
            </ui-content-block>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
            }
        }
    }
</script>

<style scoped>
</style>

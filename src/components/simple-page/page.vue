<template>
    <div class="page page-simple page-home">
        <ui-simple-header :title="page.title"></ui-simple-header>
        <main class="page-body">
            <div class="page-simple-bg"></div>
            <div class="page-simple-content">
                <slot></slot>
            </div>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                docked: true,
            }
        },
        props: {
            page: {
                type: Object,
                default: function () {
                    return {
                        title: '云设'
                    }
                }
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
        },
        methods: {
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            }
        }
    }
</script>

<style lang="scss" scoped>

    .page {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .page-body {
        min-height: 500px;
    }
    .admin-container {
        padding: 16px;
    }
</style>

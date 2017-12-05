<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            console.log('初始化')
            console.log(window)
            window.addEventListener('resize', () => {
                console.log(window.innerWidth)
            })
        },
        methods: {
        }
    }
</script>

<style>
    .page-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .page-body {
        position: absolute;
        top: 64px;
        left: 0;
        width: 100%;
        /*height: 400px;*/
        bottom: 0;
        overflow: auto;
    }
    .ui-float-btn {
        position: fixed;
        right: 32px;
        bottom: 16px;
    }
    .ui-dialog {
        width: 400px;
    }
    .login-btn {
        width: 100%;
    }
    .ui-page-wrap {
        margin: 100px auto;
        width: 100%;
        max-width: 500px;
        padding: 16px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
    }
    @media screen and (max-width: 600px) {
        .ui-page-wrap {
            box-shadow: none;
        }
    }
</style>

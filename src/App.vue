<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
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
</style>

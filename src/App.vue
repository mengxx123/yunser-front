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
    .ui-float-btn {
        position: fixed;
        right: 32px;
        bottom: 16px;
    }
    .ui-dialog {
        width: 400px;
    }
</style>

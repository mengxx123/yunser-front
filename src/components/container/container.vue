<template>
    <div class="ui-container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-container',
        props: {
            top: {
                type: Boolean,
                default: false
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss">
    .ui-container {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
    }
    .ui-container-top {
        padding-top: 16px;
    }
</style>

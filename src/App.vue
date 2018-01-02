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

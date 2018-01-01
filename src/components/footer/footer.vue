<template>
    <footer class="page-footer">
        <ui-container>
            <router-link to="/team">团队</router-link>


            <img :src="qrcodeUrl">
            <div><a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17154000号</a></div>
            <!--<a href="http://team.yunser.com" target="_blank">关于我们</a> -->
        </ui-container>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    @import "../../scss/var";

    .page-footer {
        color: #fff;
        background-color: #555;
    }
</style>

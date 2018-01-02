<template>
    <footer class="page-footer">
        <ui-container>
            <div class="copyright">版权所有 © 2016-2018 Yunser</div>
            <a href="http://open.yunser.com" target="_blank">开放平台</a>
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
        padding: 40px 0;
        color: #fff;
        background-color: #555;
    }
</style>

<template>
    <footer class="page-footer">
        <ui-container>
            <div class="links">
                <a class="link" href="http://open.yunser.com" target="_blank">开放平台</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <router-link class="link" to="/team">团队</router-link>
                <!--<a href="http://team.yunser.com" target="_blank">关于我们</a>-->
            </div>

            <div class="copyright">版权所有 © 2016-2018 Yunser</div>
            <a class="icp" href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17154000号</a>
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
        padding: 32px 0;
        color: #fff;
        background-color: #555;
        .icp {
            color: #fff;
        }
        .links {
            margin-bottom: 16px;
        }
        .link {
            color: #fff;
        }
    }
</style>

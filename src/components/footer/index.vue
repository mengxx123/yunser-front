<template>
    <footer class="page-nav">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item value="home" title="活动" icon="home" @click.native="page('/')"/>
            <mu-bottom-nav-item value="history" title="历史" icon="history" @click.native="page('/history')"/>
            <mu-bottom-nav-item value="mine" title="个人中心" icon="event" @click.native="page('/mine')"/>
            <mu-bottom-nav-item value="more" title="更多" icon="send" @click.native="page('/more')"/>
        </mu-bottom-nav>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                bottomNav: 'home'
            }
        },
        mounted() {
            let _this = this
            let paths = ['more', 'history', 'count', 'more']
            for (let path of paths) {
                if (location.href.indexOf(path) !== -1) {
                    console.log(path)
                    _this.bottomNav = path
                }
            }
        },
        methods: {
            page(path) {
                this.$router.push(path)
            },
            handleChange(val) {
                this.bottomNav = val
            }
        }
    }
</script>

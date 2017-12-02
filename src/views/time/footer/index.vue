<template>
    <footer class="page-nav">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item value="home" title="活动" icon="home" @click.native="page('/time')"/>
            <mu-bottom-nav-item value="history" title="历史" icon="history" @click.native="page('/time/history')"/>
            <mu-bottom-nav-item value="count" title="统计" icon="event" @click.native="page('/time/count')"/>
            <mu-bottom-nav-item value="more" title="更多" icon="send" @click.native="page('/time/more')"/>
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

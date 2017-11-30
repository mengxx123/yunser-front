<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="云设">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="分享"/>
                </mu-icon-menu>
            </mu-appbar>
        </header>
        <main class="page-body">
            <router-link to="/login">登录</router-link>
            <router-link to="/forum">论坛</router-link>
            <router-link to="/users/1">用户详情</router-link>
            <router-link to="/articles">文章</router-link>
            <router-link to="/articles/1">文章详情</router-link>
        </main>
        <ui-footer></ui-footer>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="Menu Item 1"/>
                <mu-list-item title="Menu Item 2"/>
                <mu-list-item title="Menu Item 3"/>
                <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
//    import light from '!raw!muse-ui/dist/theme-default.css'
//    import dark from '!raw!muse-ui/dist/theme-dark.css'
//    import carbon from '!raw!muse-ui/dist/theme-carbon.css'
//    import teal from '!raw!muse-ui/dist/theme-teal.css'

    export default {
        data () {
            return {
                open: false,
                docked: true
                // 主题
//                theme: 'light',
//                themes: {
//                    light,
//                    dark,
//                    carbon,
//                    teal
//                }
            }
        },
        mounted() {
            console.log(new Date().getTime())
        },
        methods: {
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            },
            add() {
//                this.changeTheme('light')
                this.$router.push('/add')
            },
            // 主题
            changeTheme(theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''
            },
            getThemeStyle() {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                return styleEl
            }
        }
    }
</script>

<style scoped>
</style>

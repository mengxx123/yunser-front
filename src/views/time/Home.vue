<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="时间记录">
                <ui-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <ui-icon-menu icon="more_vert" slot="right">
                    <ui-menu-item title="分享"/>
                </ui-icon-menu>
            </ui-appbar>
        </header>
        <main class="page-body">
            <router-view/>
        </main>
        <ui-time-footer></ui-time-footer>
        <ui-drawer :open="open" :docked="docked" @close="toggle()">

            <ui-list @itemClick="docked ? '' : toggle()">
                <ui-list-item title="Menu Item 1"/>
                <ui-list-item title="Menu Item 2"/>
                <ui-list-item title="Menu Item 3"/>
                <ui-list-item v-if="docked" @click.native="open = false" title="Close"/>
            </ui-list>
        </ui-drawer>
        <ui-float-button icon="add" class="page-add" @click="add"/>
    </div>
</template>

<script>
    import Footer from './footer'
//    import light from '!raw!muse-ui/dist/theme-default.css'
//    import dark from '!raw!muse-ui/dist/theme-dark.css'
//    import carbon from '!raw!muse-ui/dist/theme-carbon.css'
//    import teal from '!raw!muse-ui/dist/theme-teal.css'

    export default {
        components: {
            'ui-time-footer': Footer
        },
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
                this.$router.push('/time/add')
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

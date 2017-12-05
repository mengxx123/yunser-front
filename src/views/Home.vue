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
            <router-link to="/mine">个人中心</router-link>
            <div>个人中心</div>
            <router-link to="/me/messages">消息</router-link>
            <router-link to="/me/contacts">联系人</router-link>
            <router-link to="/me/articles">我的文章</router-link>
            <div>推荐用户</div>
            <router-link to="/users/1">建帆远航</router-link>
            <router-link to="/users/2">二哥</router-link>
            <router-link to="/users/3">小三</router-link>
            <div>工具</div>
            <router-link to="/me/articles">我的文章</router-link>
            <router-link to="/apps/1">todo</router-link>
            <router-link to="/time">时间</router-link>
            <div>商城</div>
            <router-link to="/shops/1">店铺1</router-link>
            <router-link to="/me/addresses">收货地址</router-link>
            <div>测试</div>
            <router-link to="/exam">测试</router-link>
        </main>
        <ui-footer></ui-footer>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="个人资料">
                    <mu-icon value="chat_bubble" slot="left"/>
                </mu-list-item>
                <mu-list-item title="相册">
                    <mu-icon value="photo" slot="left"/>
                </mu-list-item>
                <mu-list-item title="收藏">
                    <mu-icon value="collections" slot="left"/>
                </mu-list-item>
                <mu-list-item title="表情">
                    <mu-icon value="tag_faces" slot="left"/>
                </mu-list-item>
                <mu-list-item title="表情">
                    <mu-icon value="chat_bubble" slot="left"/>
                </mu-list-item>
                <mu-list-item title="钱包">
                    <mu-icon value="chat_bubble" slot="left"/>
                </mu-list-item>
                <mu-list-item title="设置" to="/settings">
                    <mu-icon value="chat_bubble" slot="left"/>
                    <mu-badge content="new" slot="after" secondary />
                </mu-list-item>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
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

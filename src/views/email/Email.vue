<template>
    <ui-admin-page name="home" :page="{title: '邮件管理'}">
        <router-link to="/admin/email/new">写邮件</router-link>
        <mu-sub-header>最近聊天记录</mu-sub-header>
        <ui-list>
            <ui-list-item title="All mail">
                <ui-icon slot="right" value="info"/>
            </ui-list-item>
            <ui-list-item title="Trash">
                <ui-icon slot="right" value="info"/>
            </ui-list-item>
            <ui-list-item title="Spam">
                <ui-icon slot="right" value="info"/>
            </ui-list-item>
            <ui-list-item title="Follow up">
                <ui-icon slot="right" value="info"/>
            </ui-list-item>
        </ui-list>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                open: false,
                docked: true
            }
        },
        methods: {
            toggle (flag) {
                this.open = !this.open
                this.docked = !flag
            }
        }
    }
</script>

<style>
    #app {

    }
</style>

<template>
    <div class="ui-page page-home">
        <div class="ui-page-content">
            <ui-admin-header :title="page.title" :backable="backable"></ui-admin-header>
            <main class="page-body">
                <div class="admin-container">
                    <ui-breadcrumb class="breadcrumb" v-if="page.breadcrumb">
                        <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
                        <ui-breadcrumb-item :href="item.to" v-for="item in page.breadcrumb">{{ item.title }}</ui-breadcrumb-item>
                    </ui-breadcrumb>
                    <slot></slot>
                </div>
            </main>
            <ui-admin-footer></ui-admin-footer>
        </div>
        <ui-drawer :open="true" :docked="true">
            <ui-appbar title="">
            </ui-appbar>
            <ui-list>
                <ui-list-item title="面板" to="/admin">
                    <ui-icon slot="left" value="inbox"/>
                </ui-list-item>
                <ui-list-item title="用户" toggleNested>
                    <ui-icon slot="left" value="inbox"/>
                    <ui-list-item title="用户管理" to="/admin/users" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="分组" to="/admin/groups" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                </ui-list-item>
                <ui-list-item title="营销" :open="false" toggleNested>
                    <ui-icon slot="left" value="inbox"/>
                    <ui-list-item title="邮件" to="/admin/email" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="短信" to="/admin/sms" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="站内信" to="/admin/sms" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                </ui-list-item>
                <ui-list-item title="系统" :open="false" toggleNested>
                    <ui-icon slot="left" value="inbox"/>
                    <ui-list-item title="菜单" to="/admin/menus" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="系统" to="/admin/system" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                </ui-list-item>
                <ui-list-item title="权限" :open="false" toggleNested>
                    <ui-icon slot="left" value="inbox"/>
                    <ui-list-item title="角色" to="/admin/roles" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="权限" to="/admin/permissions" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                </ui-list-item>
                <ui-list-item title="商城" :open="false" toggleNested>
                    <ui-icon slot="left" value="inbox"/>
                    <ui-list-item title="店铺管理" to="/admin/shops" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="商家管理" to="/admin/menus" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                </ui-list-item>
                <ui-list-item title="调试" :open="false" toggleNested>
                    <ui-icon slot="left" value="inbox"/>
                    <ui-list-item title="404" to="/admin/404" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                </ui-list-item>
                <ui-list-item title="工单管理" to="/admin/tickets"/>
                <ui-list-item title="应用管理" to="/admin/apps"/>
                <ui-list-item title="广告管理" to="/admin/advertisements"/>
                <ui-list-item title="文件管理" to="/files"/>
                <ui-list-item title="文章管理"/>
            </ui-list>
        </ui-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            page: {
                type: Object,
                default: {
                    title: '云设'
                }
            },
            backable: {
                type: Boolean,
                default: false
            },
            breadcrumb: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .ui-page {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .ui-page-content {
        position: absolute;
        left: 256px;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 100;
    }
    .admin-container {
        padding: 16px;
    }
</style>

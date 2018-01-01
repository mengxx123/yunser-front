<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="个人中心">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <div>
                <ui-list>
                    <ui-list-item title="朋友圈">
                        <ui-icon value="grade" slot="left" color="pinkA200"/>
                    </ui-list-item>
                </ui-list>
                <ui-divider inset/>
                <ui-list>
                    <ui-list-item title="扫一扫" inset>
                        <ui-icon value="grade" slot="left" color="pinkA200"/>
                    </ui-list-item>
                    <ui-list-item title="摇一摇" inset>
                        <ui-icon value="grade" slot="left" color="pinkA200"/>
                    </ui-list-item>
                </ui-list>
                <ui-divider inset/>
                <ui-list>
                    <ui-list-item title="附近的人" inset>
                        <ui-icon value="grade" slot="left" color="pinkA200"/>
                    </ui-list-item>
                    <ui-list-item title="漂流瓶" inset>
                        <ui-icon value="grade" slot="left" color="pinkA200"/>
                    </ui-list-item>
                </ui-list>
                <ui-divider inset/>
                <ui-list>
                    <ui-list-item title="购物" inset>
                        <ui-icon value="grade" slot="left" color="pinkA200"/>
                        <ui-badge content="new" slot="after" secondary />
                    </ui-list-item>
                </ui-list>
            </div>
            <ui-content-block>
                <ui-paper class="login-box" :zDepth="0" v-if="user">
                    {{ user.nickname }}
                    我的收藏

                </ui-paper>
            </ui-content-block>

        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.user = this.$storage.get('user')
            }
        }
    }
</script>

<style scoped>

</style>

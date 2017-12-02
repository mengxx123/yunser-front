<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="个人中心">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <div>
                <mu-list>
                    <mu-list-item title="朋友圈">
                        <mu-icon value="grade" slot="left" color="pinkA200"/>
                    </mu-list-item>
                </mu-list>
                <mu-divider inset/>
                <mu-list>
                    <mu-list-item title="扫一扫" inset>
                        <mu-icon value="grade" slot="left" color="pinkA200"/>
                    </mu-list-item>
                    <mu-list-item title="摇一摇" inset>
                        <mu-icon value="grade" slot="left" color="pinkA200"/>
                    </mu-list-item>
                </mu-list>
                <mu-divider inset/>
                <mu-list>
                    <mu-list-item title="附近的人" inset>
                        <mu-icon value="grade" slot="left" color="pinkA200"/>
                    </mu-list-item>
                    <mu-list-item title="漂流瓶" inset>
                        <mu-icon value="grade" slot="left" color="pinkA200"/>
                    </mu-list-item>
                </mu-list>
                <mu-divider inset/>
                <mu-list>
                    <mu-list-item title="购物" inset>
                        <mu-icon value="grade" slot="left" color="pinkA200"/>
                        <mu-badge content="new" slot="after" secondary />
                    </mu-list-item>
                </mu-list>
            </div>
            <mu-content-block>
                <mu-paper class="login-box" :zDepth="0" v-if="user">
                    {{ user.nickname }}
                    我的收藏

                </mu-paper>
            </mu-content-block>

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

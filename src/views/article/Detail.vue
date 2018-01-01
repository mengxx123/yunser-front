<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="文章详情">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <ui-content-block>
                <div v-if="article">
                    <div>{{ article.title }}</div>
                    <div v-html="article.content"></div>
                </div>
            </ui-content-block>
            <ui-list>
                <ui-sub-header>评论</ui-sub-header>
                <ui-list-item title="小明" v-for="comment in comments">
                    <ui-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
                    <span slot="describe" v-html="comment.content"></span>
                    <div>{{ comment.updateTime }}</div>
                    <ui-icon-menu slot="right" icon="more_vert" tooltip="操作">
                        <ui-menu-item title="回复" />
                        <ui-menu-item title="标记" />
                        <ui-menu-item title="删除" />
                    </ui-icon-menu>
                </ui-list-item>
                <ui-divider inset/>
            </ui-list>
            <div>
                <ui-text-field hintText="评论内容"/>
                <ui-raised-button label="评论" class="demo-raised-button" primary/>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                article: null,
                comments: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let id = this.$route.params.id
                // 文章信息
                this.$http.get(`/articles/${id}`)
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.article = data.data
                        }
                    },
                    response => {
                        console.log(response)
                    })
                // 文章评论
                this.$http.get(`/articles/${id}/comments`)
                    .then(response => {
                          let data = response.data
                          console.log(data)
                          if (data.code === 0) {
                              this.comments = data.data
                          }
                      },
                      response => {
                          console.log(response)
                      })
            }
        }
    }
</script>

<style scoped>
</style>

<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="文章详情">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-content-block>
                <div v-if="article">
                    <div>{{ article.title }}</div>
                    <div v-html="article.content"></div>
                </div>
            </mu-content-block>
            <mu-list>
                <mu-sub-header>评论</mu-sub-header>
                <mu-list-item title="小明" v-for="comment in comments">
                    <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
                    <span slot="describe" v-html="comment.content"></span>
                    <div>{{ comment.updateTime }}</div>
                    <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                        <mu-menu-item title="回复" />
                        <mu-menu-item title="标记" />
                        <mu-menu-item title="删除" />
                    </mu-icon-menu>
                </mu-list-item>
                <mu-divider inset/>
            </mu-list>
            <div>
                <mu-text-field hintText="评论内容"/>
                <mu-raised-button label="评论" class="demo-raised-button" primary/>
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

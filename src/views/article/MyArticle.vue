<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="我的文章">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-list>
                <mu-list-item :title="article.title" :to="`/articles/${article.id}`" v-for="article in articles" :key="article.id">
                    <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
                    <span slot="describe" v-html="article.content"></span>
                    <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                        <mu-menu-item title="回复" />
                        <mu-menu-item title="标记" />
                        <mu-menu-item title="删除" />
                    </mu-icon-menu>
                </mu-list-item>
                <mu-divider inset/>
            </mu-list>
            <mu-content-block>


            </mu-content-block>
        </main>
        <mu-float-button class="ui-float-btn" icon="add" to="/articles/add"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                articles: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let userId = this.$storage.get('user').id
                this.$http.get(`/users/${userId}/articles`)
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.articles = data.data
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

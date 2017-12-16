<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="笑话大全">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <ul class="joke-list">
                <li class="item" v-for="(joke, index) in jokes">
                    <div @click="view(joke, index)">{{ joke.title }}</div>
                </li>
                <template>
                    <mu-pagination :total="totalPage" :current="page" @pageChange="pageChange">
                    </mu-pagination>
                </template>
            </ul>
            <mu-content-block>
                <button type="button" @click="next">下一个</button>
                <h1>{{ joke.title }}</h1>
                <article v-html="joke.content"></article>
            </mu-content-block>

        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                jokes: [],
                joke: {},
                detailIndex: 0,
                page: 1,
                totalPage: 500
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.getData()
            },
            view(joke, index) {
                this.joke = joke
                this.detailIndex = index
            },
            next() {
                this.detailIndex++
                if (this.detailIndex < this.jokes.length) {
                    this.joke = this.jokes[this.detailIndex]
                } else {
                    this.nextPage()
//                    alert('没有下一页了')
                }
            },
            getData() {
                this.$http.get(`/jokes?page=${this.page}`)
                    .then(response => {
                            let data = response.data
                            if (data.code === 0) {
                                this.jokes = data.data
                                if (this.jokes.length) {
                                    this.detailIndex = 0
                                    this.joke = this.jokes[0]
                                }
                            }
                        },
                        response => {
                            console.log(response)
                        })
            },
            nextPage() {
                this.page++
                this.getData()
            },
            pageChange(page) {
                this.page = page
                this.getData()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .joke-list {
        float: left;
        width: 400px;
        margin-right: 24px;
    }
</style>

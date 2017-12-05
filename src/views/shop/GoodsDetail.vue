<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="商品详情">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-content-block>
                <div class="" v-if="goods">
                    <div>名称：{{ goods.name }}</div>
                    <div>描述：{{ goods.description }}</div>
                </div>
                <h2>评价列表</h2>
                <ul class="goods-list">
                  <li class="item" v-for="goods in goodses">
                    <mu-paper class="demo-paper" :zDepth="1">
                      <router-link :to="`/goodses/` + goods.id">{{ goods.name }}</router-link>
                    </mu-paper>
                  </li>
                </ul>

            </mu-content-block>

        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                goods: null,
                goodses: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
              let id = this.$route.params.id
              // 商品信息
              this.$http.get(`/goodses/${id}`)
                .then(response => {
                    let data = response.data
                    console.log(data)
                    if (data.code === 0) {
                      this.goods = data.data
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

<style lang="scss" scoped>
  .goods-list {
    .item {
      width: 320px;
      height: 320px;
    }
  }
</style>

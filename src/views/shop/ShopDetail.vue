<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="店铺详情">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-content-block>
                <p>云设工具致力于开发工具类 App，方便提高用户日常生活的效率。如果你有需求，我们也可以为你开发工具类 App！</p>
                <p>给我们发邮件：admin@yunser.com</p>
                <div class="" v-if="shop">
                    <div>{{ shop.name }}</div>
                    <div>{{ shop.description }}</div>
                </div>
                <h2>商品列表</h2>
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
                shop: null,
                goodses: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
              let id = this.$route.params.id
              // 店铺信息
              this.$http.get(`/shops/${id}`)
                .then(response => {
                    let data = response.data
                    console.log(data)
                    if (data.code === 0) {
                      this.shop = data.data
                    }
                  },
                  response => {
                    console.log(response)
                  })
              // 商品
              this.$http.get(`/shops/${id}/goodses`)
                .then(response => {
                    let data = response.data
                    console.log(data)
                    if (data.code === 0) {
                      this.goodses = data.data.result
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

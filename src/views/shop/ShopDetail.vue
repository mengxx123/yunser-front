<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar :title="title">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <ul class="" v-if="shop">
                <div>{{ shop.name }}</div>
                <div>{{ shop.description }}</div>
            </ul>
            <hr>
            <div>商品列表</div>
            <ul>
                <li v-for="goods in goodses">
                    <router-link :to="'/goodses/' + goods.id">{{ goods.name }}</router-link>
                    <hr>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '店铺详情',
                shop: null,
                goodses: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let shopId = this.$route.params.id
                this.$http.get(`/shops/${shopId}`)
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
                this.$http.get(`/shops/${shopId}/goodses`)
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.goodses = data.data
                            }
                        },
                        response => {
                            console.log(response)
                        })
            },
            remove(address) {
                this.$http.delete(`/addresses/${address.id}`)
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            // TODO
                            this.init()
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            edit(address) {
                this.$router.push(`/addresses/${address.id}/edit`)
            },
            add() {
                this.$router.push('/addresses/add')
            },
            setDefault(address) {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .address-list {
        .item {

        }
        .footer {

        }

    }
</style>

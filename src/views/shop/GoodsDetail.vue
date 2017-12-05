<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar :title="title">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <ul class="" v-if="goods">
                <div>{{ goods.name }}</div>
                <div>{{ goods.description }}</div>
            </ul>
            <hr>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '商品详情',
                goods: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let goodsId = this.$route.params.id
                this.$http.get(`/goodses/${goodsId}`)
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

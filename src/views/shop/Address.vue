<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="收货地址">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <ul class="address-list">
                <li class="item" :title="address.id" @click="" v-for="address in addresses">
                    <div>{{ address.receiver }} {{ address.phone }}</div>
                    <div>{{ address.detail }}</div>
                    <!--<div>{{ address.isDefault === 1 ? '默认地址' : ''}}</div>-->

                    <div class="footer">
                        <div>
                            <mu-checkbox v-model="address.isDefault" label="默认地址" class="demo-checkbox"/>
                        </div>
                        <div class="right">
                            <button @click="remove(address)">删除</button>
                            <button @click="edit(address)">编辑</button>
                        </div>
                        <!--<button @click="setDefault(address)">设为</button>-->
                    </div>
                    <hr>
                </li>
            </ul>
        </main>
        <mu-float-button class="ui-float-btn" icon="add" @click="add"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                addresses: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let userId = this.$storage.get('user').id
                this.$http.get(`/users/${userId}/addresses`)
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.addresses = data.data
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

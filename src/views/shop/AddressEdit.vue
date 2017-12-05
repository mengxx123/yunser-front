<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="编辑地址">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
                <mu-flat-button color="white" label="保存" slot="right" @click="save"/>
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-content-block>
                <div v-if="address">
                    <mu-text-field v-model="address.receiver" label="收货人" labelFloat/><br/>
                    <mu-text-field v-model="address.phone" label="联系电话" labelFloat/><br/>
                    <mu-text-field v-model="address.county" label="所在地区" labelFloat @click.native="selectCounty"/><br/>
                    <mu-text-field v-model="address.area" label="街道" labelFloat/><br/>
                    <mu-text-field v-model="address.detail" label="详细地址" labelFloat/><br/>
                    <mu-checkbox v-model="address.isDefault" label="设为默认地址" class="demo-checkbox"/> <br/>
                </div>
            </mu-content-block>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                address: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let addressId = this.$route.params.id
                this.$http.get(`/addresses/${addressId}`)
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.address = data.data
                            }
                        },
                        response => {
                            console.log(response)
                        })
            },
            save() {
                let userId = this.$storage.get('user').id
                this.$http.put(`/addresses/${this.address.id}`, {
                    user_id: userId,
                    receiver: this.address.receiver,
                    area_id: '1', // TDOO
                    detail: this.address.detail,
                    phone: this.address.phone,
                    is_default: this.address.isDefault ? 1 : 0
                })
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.$router.go(-1)
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            selectCounty() {
                this.$router.push('/county')
            }
        }
    }
</script>

<style scoped>
</style>

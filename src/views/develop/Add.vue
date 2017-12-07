<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="注册成为开发者">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <div v-if="developer">

            </div>
            <div v-else>
                <button @click="register">成为开发者</button>
            </div>

            <mu-content-block>

            </mu-content-block>

        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                developer: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let userId = this.$storage.get('user').id
                this.$http.get(`/users/${userId}/developer`)
                    .then(response => {
                        let data = response.data
                        if (data.code === 0) {
                            this.developer = data.data
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            register() {
                this.$router.push('/developer/register')
            }
        }
    }
</script>

<style scoped>
</style>

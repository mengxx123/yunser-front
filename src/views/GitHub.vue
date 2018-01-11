<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="GitHub2">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        mounted() {
            this.$http.get('https://api.github.com/user/repos', {
                headers: {
                    'asd': '7e517cd0526dc4d6a14dce38efbb0d865649011b'
                }
            })
                .then(response => {
                    location.href = response.data
                },
                response => {
                    console.log(response)
                })
        },
        methods: {
        }
    }
</script>

<style scoped>
</style>

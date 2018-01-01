<template>
    <ui-admin-page name="home" :page="{title: '写邮件'}">
        <ui-form>
            <ui-form-item>
                <ui-text-field v-model="to" label="发送邮箱"/>
            </ui-form-item>
            <ui-form-item>
                <input v-model="title" placeholder="标题"><br>
            </ui-form-item>
            <ui-form-item>
                <textarea v-model="content" style="width: 400px;height: 200px"></textarea>
            </ui-form-item>
            <ui-form-item>
                <ui-raised-button label="发送" primary @click="send"/>
            </ui-form-item>
        </ui-form>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                to: '',
                title: '',
                content: ''
            }
        },
        mounted() {
            this.to = this.$route.query.email
        },
        methods: {
            send() {
                this.$http.post('/email', {
                    to: this.to,
                    title: this.title,
                    content: this.content
                })
                .then(response => {
                    alert('发送成功')
                },
                response => {
                    console.log(response)
                })
            }
        }
    }
</script>

<style>
    #app {

    }
</style>

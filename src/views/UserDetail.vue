<template>
    <div class="page page-user-detail">
        <header class="page-header" style="background-image: url('/static/img/location.png')">
            <mu-appbar class="app-bar" title="用户聊天-用户详情">
                <mu-icon-button icon="arrow_back" slot="left" @click="$router.go(-1)" />
                <mu-icon-button icon="more_vert" slot="right" @click="bottomSheet = true" />
            </mu-appbar>
            <mu-avatar class="avatar" src="/static/img/avatar.jpg"/>
        </header>
        <main class="page-body">
            <mu-list>
                <mu-list-item title="地区" describeText="广东 广州">
                    <mu-icon value="location_on" slot="left" color="pinkA200"/>
                </mu-list-item>
                <mu-list-item title="相册">
                    <mu-icon value="photo" slot="left" color="pinkA200"/>
                    <ul class="photo-list">
                        <li class="item"><img src="/static/img/avatar.jpg"> </li>
                        <li class="item"><img src="/static/img/avatar.jpg"> </li>
                        <li class="item"><img src="/static/img/avatar.jpg"> </li>
                    </ul>
                </mu-list-item>
            </mu-list>
            <mu-content-block>
                <mu-raised-button class="send-button" label="发消息" primary @click="sendMessage" />
            </mu-content-block>
            <mu-content-block>
                <div class="" v-if="user">
                    <div>昵称：{{ user.nickname }}</div>
                    <div>邮箱：{{ user.email }}</div>
                    <div>手机号：{{ user.phone }}</div>
                </div>
                <div>Ta 的朋友圈</div>
                <div v-if="!messages.length">
                    Ta 没有发朋友圈
                </div>
                <ul v-if="messages.length">
                    <li v-for="message in messages" :key="message.id">
                        {{ message.content }}
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
                user: {},
                messages: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let userId = this.$route.params.id
                // 用户信息
                this.$http.get('/users/' + userId)
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.user = data.data
                        }
                    },
                    response => {
                        console.log(response)
                    })
                // 公开动态
                this.$http.get(`/users/${userId}/public_messages`)
                    .then(response => {
                        let data = response.data
                        if (data.code === 0) {
                            this.messages = data.data
                        }
                        console.log(data)
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>
</style>

<template>
    <ui-page name="home" :page="{title: '授权'}">
        <ui-container top>
            <div class="">
                <span>登陆</span>
                <a href="/oauth/management" target="_blank">授权管理</a>
                <a href="http://open.yunser.com" target="_blank">申请接入</a>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <p>检测到您已登录 云设，点击头像授权并登陆</p>
                    <a href="/"><img src="/asset/img/user1.jpg"></a>
                    <a href="/">其他账号登陆</a>
                </div>
                <div class="col-sm-4">
                    <p>该网站已有超过1万用户使用e校园登陆</p>
                    <p><a :href="app.website" target="_blank">{{ app.name }}</a> 将获得以下权限：</p>
                    <p><input type="checkbox"> 全选</p>
                    <p><input type="checkbox"> 获得您的昵称、头像、性别</p>
                    <p><input type="checkbox"> 分享内容到QQ空间</p>
                    <p><input type="checkbox"> 读取、发表腾讯微博信息</p>
                    <hr>
                    <p>授权后表明你已同意 <a href="/oauth/agreement" target="_blank">云设登陆服务协议</a></p>
                    <p>你可以在<a href="/oauth/management" target="_blank">授权管理</a>中取消授权</p>
                </div>
            </div>
            <div class="admin-section">
                <p>${message}</p>
                <p><a href="/oauth/agreement"></a></p>
            </div>
        </ui-container>
    </ui-page>
</template>

<script>
    export default {
        data () {
            return {
                user: null,
                app: {}
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            test() {
                this.dealCode();
            },
            init() {
                let appId = this.$route.query.client_id
                this.$http.get('/apps/' + appId)
                    .then(response => {
                        this.app = response.data
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

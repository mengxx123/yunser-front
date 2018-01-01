<template>
    <div class="page-register">
        <header class="page-header">
            <ui-appbar title="联系人">
                <ui-icon-button icon="menu" slot="left"/>
            </ui-appbar>
        </header>
        <main class="page-body">
            <ui-list>
                <ui-list-item :title="ro.name" @click="viewUser(ro)" v-for="(ro, index) in roster" inset>
                    <ui-icon value="grade" slot="left" color="pinkA200" v-if="index === 0"/>
                    <ui-avatar src="/static/img/avatar.jpg" slot="rightAvatar"/>
                </ui-list-item>
            </ui-list>
            <ui-divider inset/>
            <ui-list>
                <ui-list-item title="Myron Liu">
                    <ui-avatar src="/images/uicon.jpg" slot="rightAvatar"/>
                    <ui-avatar color="pinkA200" :style="{'margin-left': '-8px'}" backgroundColor="transparent" slot="leftAvatar">A</ui-avatar>
                </ui-list-item>
                <ui-list-item title="Gaia Zhou" inset>
                    <ui-avatar src="/images/avatar5.jpg" slot="rightAvatar"/>
                </ui-list-item>
                <ui-list-item title="Miller Wang" inset>
                    <ui-avatar src="/images/avatar6.jpg" slot="rightAvatar"/>
                </ui-list-item>
            </ui-list>
        </main>
        <ui-footer></ui-footer>
        <ui-toast v-if="toast" message="注册失败" @close="hideToast"/>
    </div>
</template>

<script>
    import im from '@/util/im'

    export default {
        data () {
            return {
                messages: [],
                username: 'yunser',
                password: '123456',
                toast: false,
                roster: [],
                text: 'i love you'
            }
        },
        mounted() {
            this.init()
//            let key = 'user-' + this.$route.params.id + '-message'
//            console.log('key', key)
//            let messages = this.$storage.get(key)
//            if (!messages) {
//                messages = []
//            }
//            console.log(messages)
//            this.messages = messages
        },
        methods: {
            init() {
                let userId = this.$storage.get('user').id // TODO

                // 获取好友列表
                this.$http.get(`/users/${userId}/friends`)
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

                im.getFriends().then(roster => {
                    console.log('121212')
                    console.log(roster)
                    this.roster = roster

                    for (var i = 0, l = roster.length; i < l; i++) {
                        var ros = roster[i];
                        //ros.subscription值为both/to为要显示的联系人，此处与APP需保持一致，才能保证两个客户端登录后的好友列表一致
                        if (ros.subscription === 'both' || ros.subscription === 'to') {

                        }
                    }
                }, err => {
                    console.log(err)
                })
            },
            viewUser(ro) {
                this.$router.push('/users/' + ro.name)
            },
            send() {
                im.send(this.$route.params.id, this.text)
            }
        }
    }
</script>

<style>
</style>

<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="微信">
                <ui-icon-button icon="menu" slot="left"  @click="toggle(true)"/>
                <ui-icon-button icon="search" slot="right"/>
                <ui-icon-menu icon="add" slot="right">
                    <ui-menu-item title="发起群聊"/>
                    <ui-menu-item title="添加朋友"/>
                    <ui-menu-item title="扫一扫"/>
                    <ui-menu-item title="收付款"/>
                    <ui-menu-item title="帮助与反馈" to="/help"/>
                </ui-icon-menu>
            </ui-appbar>
        </header>
        <div class="page-body">
            <router-link to="/register">注册</router-link>
            <router-link to="/login">登录</router-link>

            <input v-model="name" placeholder="好友账号">
            <button @click="addFriend">添加好友</button>
            <ui-list>
                <ui-sub-header>消息列表</ui-sub-header>
                <ui-list-item :title="message.from"
                              :describeText="dealMessage(message)"
                              @click="chat(message)"
                              v-for="message in messages">
                    <ui-avatar src="/static/img/avatar.jpg" slot="leftAvatar"/>

                    <ui-icon value="delete" slot="right" @click.native="removeMessage($event, message)"/>
                </ui-list-item>
            </ui-list>
            <ui-list>
                <ui-sub-header>好友</ui-sub-header>
                <ui-list-item :title="ro.name" @click="chatTo(ro)" v-for="ro in roster">
                    <ui-avatar src="/static/img/avatar.jpg" slot="leftAvatar"/>
                    <ui-icon value="chat_bubble" slot="right"/>
                </ui-list-item>
            </ui-list>
            <div v-if="!roster.length">
                <div>你还没有任何好友</div>
            </div>
            <ui-divider/>
            <ui-list>
                <ui-sub-header>群组</ui-sub-header>
                <ui-list-item :title="group.groupname" v-for="group in groups" @click="groupChat(group)">
                    <ui-avatar src="/images/avatar5.jpg" slot="leftAvatar"/>
                    {{ group.id }}
                    <ui-icon value="chat_bubble" slot="right"/>
                </ui-list-item>
            </ui-list>
        </div>
        <ui-footer></ui-footer>
        <ui-drawer :open="open" :docked="docked" @close="toggle()">
            <ui-list @itemClick="docked ? '' : toggle()">
                <ui-list-item title="个人资料">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="相册">
                    <ui-icon value="photo" slot="left"/>
                </ui-list-item>
                <ui-list-item title="收藏">
                    <ui-icon value="collections" slot="left"/>
                </ui-list-item>
                <ui-list-item title="表情">
                    <ui-icon value="tag_faces" slot="left"/>
                </ui-list-item>
                <ui-list-item title="表情">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="钱包">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="设置" to="/settings">
                    <ui-icon value="chat_bubble" slot="left"/>
                    <ui-badge content="new" slot="after" secondary />
                </ui-list-item>
                <ui-list-item v-if="docked" @click.native="open = false" title="Close"/>
            </ui-list>
        </ui-drawer>
    </div>
</template>

<script>
    import im from '@/util/im'

    export default {
        data () {
            return {
                messages: [],
                roster: [],
                groups: [],
                username: '15602229283',
                password: '123456',
                name: '15602229283',
                open: false,
                docked: true
            }
        },
        mounted() {
            this.init()
            im.init()

            this.username = this.$storage.get('username') || '15602229283'

            // 自动登录
            console.log('登录'+localStorage.token)
            if (!localStorage.user) {
//                this.$router.push('/login')
            }


            // 获取好友列表
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

            // 列出当前登录用户加入的所有群组
//            conn.getGroup({
//                success: resp => {
//                    console.log("Response: ", resp)
//                    this.groups = resp.data
//                },
//                error: err => {
//                    console.log('获取群组失败')
//                }
//            })
            im.getGroups().then(groups => {
                this.groups = groups
            }, err => {
                console.log('获取群组失败', err)
            })

            // 获取本地消息列表
            this.messages = im.getMessages()

            im.setListener(() => {
                console.log('首页更新')
                this.messages = im.getMessages()
                console.log(this.messages)
            })
        },
        methods: {
            init() {
                this.$http.get('/users/1/messages')
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.messages = data.data
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            dealMessage(message) {
                if (message.type == 'text') {
                    return message.data
                }
                switch (message.type) {
                    case 'red_packet':
                        return '[微信红包]恭喜发财，大吉大利'
                    case 'location':
                        return '[位置]'
                    case 'image':
                        return '[图片]'
                    case 'video':
                        return '[视频]'
                    case 'link':
                        return '[链接]'
                }
            },
            toggle (flag) {
                this.open = !this.open
                this.docked = !flag
            },
            chat(message) {
                this.$router.push('/users/' + message.from + '/chat')
            },
            chatTo(ro) {
                console.log(ro)
                this.$router.push('/users/' + ro.name + '/chat')
            },
            groupChat(group) {
                console.log(group)
                this.$router.push(`/groups/${group.groupid}/chat`)
            },
            handleChange (val) {
                this.bottomNav = val
            },
            addFriend() {
                conn.subscribe({
                    to: this.name,
                    // Demo里面接收方没有展现出来这个message，在status字段里面
                    message: '加个好友呗!'
                });
            },
            removeMessage(e, message) {
                e.stopPropagation()
                im.removeMessage(message.from).then(() => {
                    this.messages = im.getMessages()
                })
            }
        }
    }
</script>

<style scoped>

</style>

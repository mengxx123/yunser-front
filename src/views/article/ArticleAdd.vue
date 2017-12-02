<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="我的文章">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-content-block>
                <mu-list>
                    <mu-list-item title="这个周末一起吃饭么?">
                        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
                        <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
      </span>
                        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                            <mu-menu-item title="回复" />
                            <mu-menu-item title="标记" />
                            <mu-menu-item title="删除" />
                        </mu-icon-menu>
                    </mu-list-item>
                    <mu-divider inset/>
                    <mu-list-item title="Alex Qin">
                        <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
                        <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
        我们去看电影，最近有部烂片上映，又有吐槽的了
      </span>
                        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                            <mu-menu-item title="回复" />
                            <mu-menu-item title="标记" />
                            <mu-menu-item title="删除" />
                        </mu-icon-menu>
                    </mu-list-item>
                    <mu-divider inset/>
                    <mu-list-item title="LOL">
                        <mu-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
                        <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
        周末一起 LOL
      </span>
                        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                            <mu-menu-item title="回复" />
                            <mu-menu-item title="标记" />
                            <mu-menu-item title="删除" />
                        </mu-icon-menu>
                    </mu-list-item>
                    <mu-divider inset/>
                    <mu-list-item title="Myron Liu">
                        <mu-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
                        <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
      </span>
                        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                            <mu-menu-item title="回复" />
                            <mu-menu-item title="标记" />
                            <mu-menu-item title="删除" />
                        </mu-icon-menu>
                    </mu-list-item>
                </mu-list>
            </mu-content-block>
        </main>
        <mu-float-button class="ui-float-btn" icon="add" to="/me/articles/add"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [{
                    name: '跑步',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }, {
                    name: '吃饭',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }, {
                    name: '吃饭',
                    startTime: 1510381344285,
                    endTime: 1510381944285
                }],
                bottomNav: 'recents'
            }
        },
        mounted() {
            console.log(new Date().getTime())
        },
        methods: {
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            handleChange(val) {
                this.bottomNav = val
            }
        }
    }
</script>

<style scoped>
</style>

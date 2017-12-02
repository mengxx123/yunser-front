<template>
    <div class="">
        <ul class="index-type-list">
            <li class="item" v-for="type in types">
                <img class="img" src="/static/img/icon_sleep.png">
                <div class="text">睡眠</div>
            </li>
        </ul>
        <mu-list>
            <mu-sub-header>历史</mu-sub-header>
            <mu-list-item :title="item.name" v-for="item in items">
                <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
                <mu-icon value="delete" slot="right" @click="remove(item)"/>
            </mu-list-item>
        </mu-list>
        <!--<div>-->
            <!--<div>-->
                <!--<span>{{ item.name }}</span>-->
                <!--<span>时间：{{ time(item) }}</span>-->
            <!--</div>-->
        <!--</div>-->
        <router-link to="/count"><h2>统计</h2></router-link>
        <div>
            <div v-for="item in counts">
                {{ item.name }} ： {{ timeText(item.totalTime) }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                types: [
                    {
                        name: '睡眠',
                        icon: '/static/img/icon_sleep.png'
                    }, {
                        name: '交通',
                        icon: '/static/img/icon_traffic.png'
                    }, {
                        name: '用餐',
                        icon: '/static/img/icon_eat.png'
                    }, {
                        name: '运动',
                        icon: '/static/img/icon_sport.png'
                    }, {
                        name: '阅读',
                        icon: '/static/img/icon_read.png'
                    }, {
                        name: '工作',
                        icon: '/static/img/icon_work.png'
                    }, {
                        name: '睡眠',
                        icon: '/static/img/icon_sleep.png'
                    }
                ],
                items: [
                    {
                        id: '1',
                        name: '跑步',
                        startTime: 1510381344285,
                        endTime: 1510381944285
                    }, {
                        id: '2',
                        name: '吃饭',
                        startTime: 1510381344285,
                        endTime: 1510381944285
                    }, {
                        id: '3',
                        name: '吃饭',
                        startTime: 1510381344285,
                        endTime: 1510381944285
                    }
                ],
                counts: [
                    {
                        name: '跑步',
                        totalTime: 4 * 60 * 1000,
                        percent: 30
                    }, {
                        name: '吃饭',
                        totalTime: 8 * 60 * 1000,
                        percent: 70
                    }
                ]
            }
        },
        mounted() {
            console.log(new Date().getTime())
        },
        methods: {
            remove(removeItem) {
                console.log(this.items)
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].id === removeItem.id) {
                        this.items.splice(i, 1)
                    }
                }
            },
            time(item) {
                let startTime = new Date(item.startTime)
                let endTime = new Date(item.endTime)
                let minute = (endTime.getTime() - startTime.getTime()) / 1000 / 60
                return minute
            },
            timeText(time) {
                let minute = time / 1000 / 60
                return minute + '分钟'
            },
            handleChange(val) {
                this.bottomNav = val
            },
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            }
        }
    }
</script>

<style scoped>
</style>

<template>
    <div class="page page-exam">
        <header class="page-header">
            <mu-appbar title="在线考试系统">
                <mu-icon-button icon="menu" slot="left"/>
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-card class="test-item">
                <mu-card-header title="Myron Avatar" subTitle="sub title">
                    <mu-avatar src="/images/uicon.jpg" slot="avatar"/>
                </mu-card-header>
                <mu-card-media title="Image Title" subTitle="Image Sub Title">
                    <img src="/images/sun.jpg" />
                </mu-card-media>
                <mu-card-title title="Content Title" subTitle="Content Title"/>
                <mu-card-text>
                    散落在指尖的阳光，我试着轻轻抓1住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                </mu-card-text>
                <mu-card-actions>
                    <mu-flat-button label="Action 1"/>
                    <mu-flat-button label="Action 2"/>
                </mu-card-actions>
            </mu-card>
            <div>

                {{ item.type }}1
                <h2>{{ item.title }}1</h2>
                <ul>
                    <li v-for="(option, index) in item.options" @click="select(index)">{{ option }}</li>
                </ul>
                <mu-raised-button label="上一题" class="demo-raised-button" @click="prevItem"/>
                <mu-raised-button label="下一题2" class="demo-raised-button" primary  @click="nextItem"/>
                <mu-raised-button label="Secondary" class="demo-raised-button" secondary/>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                index: 0,
                items: [
                    {
                        type: 'single',
                        title: '学校“高大上”的教训是什么？',
                        options: ["惟真惟实", "以德育人，以德服人", '进德修业，为人师表', '好好学习，天天向上'],
                        answer: 2
                    },
                    {
                        type: 'single',
                        title: '广二师学生中女生所占比例是多少？',
                        options: ["90%", "80%", '70%', '60%'],
                        answer: 2
                    },
                ],
                item: {}
            }
        },
        mounted() {
            this.item = this.items[0]
        },
        methods: {
            select(index) {
                if (index !== this.item.answer) {
                    console.log('打错了')
                }
                this.nextItem()
            },
            prevItem() {
                if (this.index > 0) {
                    this.index--
                    this.item = this.items[this.index]
                }
            },
            nextItem() {
                if (this.index < this.items.length - 1) {
                    this.index++
                    this.item = this.items[this.index]
                }
            }
        }
    }
</script>

<style scoped>
    .test-item {
        width: 300px;
    }
</style>

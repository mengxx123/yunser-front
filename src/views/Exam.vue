<template>
    <div class="page page-exam">
        <header class="page-header">
            <ui-appbar title="在线考试系统">
                <ui-icon-button icon="menu" slot="left"/>
            </ui-appbar>
        </header>
        <main class="page-body">
            <ui-card class="test-item">
                <ui-card-media title="Image Title" subTitle="Image Sub Title">
                    <img src="/images/sun.jpg" />
                </ui-card-media>
                <ui-card-title title="Content Title" subTitle="Content Title"/>
                <div>

                    {{ item.type }}1
                    <h2>{{ item.title }}1</h2>
                    <ul>
                        <li v-for="(option, index) in item.options" @click="select(index)">{{ option }}</li>
                    </ul>
                </div>
                <ui-card-actions>
                    <ui-flat-button label="上一题" @click="prevItem"/>
                    <ui-flat-button label="下一题" @click="nextItem"/>
                </ui-card-actions>
            </ui-card>
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

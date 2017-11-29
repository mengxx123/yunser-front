<template>
    <div class="page page-file" @resize="resize">
        <header class="page-header">
            <mu-appbar title="文件管理器">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <button @click="back">返回上一级</button>
            <button @click="refresh">刷新</button>
            <mu-list>
                <mu-sub-header>最近聊天记录</mu-sub-header>
                <mu-list-item :title="file.name" describeText="Jan 9, 2014" v-for="file in files">
                    <mu-avatar icon="folder" slot="leftAvatar" v-if="file.type === 'directory'" @click="viewFile(file)"/>
                    <mu-avatar icon="assignment" backgroundColor="blue" slot="leftAvatar" v-if="file.type === 'file'" @click="viewFile(file)" />
                    <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                        <mu-menu-item title="打开" />
                        <mu-menu-item title="复制" />
                        <mu-menu-item title="删除" @click="remove(file)" />
                    </mu-icon-menu>
                </mu-list-item>
            </mu-list>
        </main>

        <mu-dialog title="确认删除" :open="dialog">
            确认删除文件
            <mu-flat-button slot="actions" @click="dialog = false" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="removeFile" label="确定"/>
        </mu-dialog>
        <mu-drawer :open="largeScreen" :docked="true">
            <mu-list>
                <mu-list-item title="Menu Item 1"/>
                <mu-list-item title="Menu Item 2"/>
                <mu-list-item title="Menu Item 3"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
    const os = require("os")

    export default {
        data () {
            return {
                largeScreen: false,
                dialog: false,
                parentPath: 'D:\\\\', // TODO 写死
                curPath: '',
                file: {}, // 当前文件
                // 文件列表
                files: [
                    {
                        type: 'file',
                        name: '123.txt'
                    },
                    {
                        type: 'directory',
                        name: '123.txt'
                    }
                ]
            }
        },
        mounted() {
            console.log(new Date().getTime())
            console.log('操作系统')
            console.log(os.platform())
            console.log(process.platform)
            this.init()
        },
        destroyed() {
//            window.removeEventListener('resize', this.listener)
        },
        methods: {
            init() {
                let query = this.$qs.parse(location.href.split('?')[1]) // 有 bug
                let path = query.path
                if (!path) {
                    path = 'D:\\\\' // TODO 写死
                }
                this.showPath(path)
                //
//                largeScreen = window.innerWidth > 500
//                this.listener = () => {
//                    console.log('调整大小啦' + window.innerWidth)
//                    this.largeScreen = window.innerWidth > 500
//                }
//                window.addEventListener('resize', this.listener)
            },
            resize() {
                console.log('调整大小啦' + window.innerWidth)
                this.largeScreen = window.innerWidth > 500
            },
            back() {
                this.showPath(this.parentPath) // TODO null bug
            },
            getParentPath() {

            },
            removeFile() {
                this.dialog = false
                this.$http.delete('/files?path=' + encodeURI(this.removePath))
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            this.refresh()
                        },
                        response => {
                            console.log(response)
                            alert('删除失败') // Toast
                        })
            },
            remove(file) {
                this.dialog = true
                this.removePath = file.path
            },
            showPath(path) {
                this.parentPath = this.curPath
                this.curPath = path
                this.$http.get('/files?path=' + encodeURI(path))
                    .then(response => {
                            let data = response.data
                            console.log(data)

                            console.log('呵呵')
                            this.files = data.data
                        },
                        response => {
                            console.log(response)
                        })
            },
            viewFile(file) {
                if (file.type === 'directory') {
                    this.showPath(file.path)
//                    this.$router.push('files?path=' + file.path)
                } else {
                    this.$router.push('files/detail?path=' + encodeURI(file.path))
                }
            },
            refresh() {
                this.showPath(this.curPath)
            },
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

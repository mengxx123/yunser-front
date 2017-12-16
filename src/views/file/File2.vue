<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="我的文件">
                <mu-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <ul class="file-list">
                <li class="item" v-for="file in files">
                    {{ file.name }}
                    <button @click="open(file)"></button>

                </li>
            </ul>
            <button @click="upload">上传</button>
            =========
            <form action="http://localhost:1026/net/files" method="post" enctype="multipart/form-data">
                <h2>单文件上传</h2>
                <div class="form-group">
                    <input type="file" name="logo" class="from-control">
                </div>
                <button type="submit" class="btn btn-default">上传</button>
            </form>
            ===


            <input id="input-file" type="file" @change="filechange($event)" style="display: none">
            <mu-content-block>
                <p>云设工具致力于开发工具类 App，方便提高用户日常生活的效率。如果你有需求，我们也可以为你开发工具类 App！</p>
                <p>给我们发邮件：admin@yunser.com</p>
            </mu-content-block>

        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                files: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get(`/net/files`)
                    .then(response => {
                        let data = response.data
                        if (data.code === 0) {
                            this.files = data.data
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            upload() {
                document.getElementById('input-file').click()
            },
            filechange (e) {
                this.input = e.target
                if (!e.target.files.length) {
                    return
                }
                this.myfile = e.target.files[0]

                console.log('上传')
                console.log(this.myfile.name)

                let param = new FormData(); //创建form对象
                param.append('logo', this.myfile, this.myfile.name);//通过append向form对象添加数据
                param.append('chunk','0');//添加form表单中其他数据
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };  //添加请求头

                this.$http.post('/net/files', param,config)
                    .then(response=>{
                        console.log(response.data);
                    })

                /*
                 // 上传文件类型检测
                 let ext = this.fileExt(this.myfile.name)
                 if (this.type === 'image') {
                 if (ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png' && ext !== 'gif' && ext !== 'bmp') {
                 this.error('只能上传图片文件！')
                 return
                 }
                 }
                 */
                console.log('file', this.myfile.type)
//                if (this.myfile.type.indexOf('image') !== -1) {
//                    if (this.myfile.size / 100 > 500) {
//                        this.compressAndUpload()
//                        return
//                    }
//                }
            },
        }
    }
</script>

<style scoped>
</style>

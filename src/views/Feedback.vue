<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="反馈">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <ui-content-block>
                <div>
                    <ui-text-field v-model="content" hintText="请输入反馈内容" multiLine :rows="3" :rowsMax="6"/>
                </div>
                <ui-raised-button class="login-btn" label="提交" primary @click="submit"/>
            </ui-content-block>

        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                content: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                // 能看到反馈的记录
            },
            submit() {

            }
        }
    }
</script>

<style scoped>
</style>

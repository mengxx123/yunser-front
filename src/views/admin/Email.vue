<template>
    <div>
        3232323
        <mu-list>
            <mu-list-item title="All mail">
                <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Trash">
                <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Spam">
                <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Follow up">
                <mu-icon slot="right" value="info"/>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                open: false,
                docked: true
            }
        },
        methods: {
            toggle (flag) {
                this.open = !this.open
                this.docked = !flag
            }
        }
    }
</script>

<style>
    #app {

    }
</style>

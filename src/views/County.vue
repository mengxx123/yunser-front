<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="选择地区">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="back" />
            </ui-appbar>
        </header>
        <main class="page-body">
            <ui-list>
                <ui-list-item :title="area.name" v-for="area in areas" @click="selectArea(area)">
                    <!--<ui-icon slot="right" value="inbox" />-->
                </ui-list-item>
            </ui-list>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                type: 'province',
                areas: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.getProvince()
            },
            selectArea(area) {
                console.log(this.type)
                if (this.type === 'province') {
                    this.province = area
                    console.log('获取城市')
                    this.getCity()
                } else if (this.type === 'city') {
                    this.city = area
                    this.getCounty()
                } else {
                    this.county = area
                    this.$router.go(-1)
                }
            },
            getProvince() {
                this.type = 'province'
                this.$http.get('/provinces')
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.areas = data.data
                            }
                        },
                        response => {
                            console.log(response)
                        })
            },
            getCity() {
                this.type = 'city'
                this.$http.get(`/provinces/${this.province.code}/cities`)
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.areas = data.data
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            getCounty() {
                this.type = 'county'
                this.$http.get(`/cities/${this.city.code}/counties`)
                    .then(response => {
                            let data = response.data
                            console.log(data)
                            if (data.code === 0) {
                                this.areas = data.data
                            }
                        },
                        response => {
                            console.log(response)
                        })
            },
            back() {
                if (this.type === 'province') {
                    this.$router.go(-1)
                } else if (this.type === 'city') {
                    this.getProvince()
                } else {
                    this.getCity()
                }
            }
        }
    }
</script>

<style scoped>
</style>

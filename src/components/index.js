import page from './page'
import footer from './footer'
import header from './header'
import barMenu from './bar-menu'

import simplePage from './simple-page'
import simpleHeader from './simple-header'

import adminPage from './admin-page'
import adminFooter from './admin-footer'
import adminHeader from './admin-header'
import adminForm from './admin-form'
import formItem from './form-item'

import mePage from './me-page'

import ad from './ad'

import container from './container'

import back from './back'

export default {
    install: function (Vue) {
        Vue.component('ui-page', page)
        Vue.component('ui-header', header)
        Vue.component('ui-footer', footer)
        Vue.component('ui-back', back)

        Vue.component('ui-simple-page', simplePage)
        Vue.component('ui-simple-header', simpleHeader)

        Vue.component('ui-admin-page', adminPage)
        Vue.component('ui-admin-header', adminHeader)
        Vue.component('ui-admin-footer', adminFooter)
        Vue.component('ui-admin-form', adminForm)

        Vue.component('ui-me-page', mePage)

        Vue.component('ui-form-item', formItem)
        Vue.component('ui-bar-menu', barMenu)
        Vue.component('ui-container', container)
        Vue.component('ui-ad', ad)
    }
}

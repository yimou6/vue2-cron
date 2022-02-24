import VCron from './VCron.vue'

VCron.install = function (Vue) {
    Vue.component(VCron.name, VCron)
}

export default VCron

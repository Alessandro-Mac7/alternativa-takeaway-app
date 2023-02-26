import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

import pizzaData from '@/assets/data/pizza-data.json'
import frittiData from '@/assets/data/fritti-data.json'
import beverageData from '@/assets/data/beverage-data.json'


export default {
    namespaced: true,
    state() {
        return {
            pizzaMenu: pizzaData,
            frittiMenu: frittiData,
            beverageMenu: beverageData
        }
    },
    mutations,
    actions,
    getters
}
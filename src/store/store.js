 import Vue from 'vue'
 import Vuex from 'vuex'
 import stocks from '../components/stocks/modules/stocks'

 Vue.use(Vuex);

 export default new Vuex.Store({
    modules: {
        stocks
    }
});
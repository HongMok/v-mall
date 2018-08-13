import Vue from 'vue'
import App from './App'
import store from './store'
import LoginHelper from './components/login-helper'

Vue.prototype.$store=store;
Vue.prototype.$LoginHelper=LoginHelper;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

//test vscode submit

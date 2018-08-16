import Vue from 'vue'
import App from './App'
import store from './store'
const Session = require('./libs/wafer-client-sdk/lib/session');

Vue.prototype.$store=store;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

//test vscode submit

//进入小程序，先查看是否有登录信息缓存，有的话，不用重复登录
var session = Session.get();
if (session) {
    wx.checkSession({
        success: function () {
            // options.success(session.userinfo);
            let info = session.userinfo;
            store.commit('user/setUserInfo', {info});
        },

        fail: function () {
            Session.clear();
        },
    });
}
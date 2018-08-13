import Vue from 'vue'
import AuthorizeConfig from '@/config/authorize-config.js';

var helper = new Vue( {
    data(){
        return{
            userInfo: null,
            locationAuthType : AuthorizeConfig.UNPROMPTED
        }
    },

    methods:{
        login({ success, error }) {
            wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo'] === false) {

                this.locationAuthType = UNAUTHORIZED
                // 已拒绝授权
                wx.showModal({
                    title: '提示',
                    content: '请授权我们获取您的用户信息',
                    showCancel: false
                })
                error && error()
                } else {
                this.locationAuthType = AUTHORIZED
                doQcloudLogin({ success, error })
                }
            }
            })
        },

        doQcloudLogin({ success, error }) {
            // 调用 qcloud 登陆接口
            qcloud.login({
            success: result => {
                if (result) {
                let userInfo = result
                success && success({
                    userInfo
                })
                } else {
                // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
                getUserInfo({ success, error })
                }
            },
            fail: () => {
                error && error()
            }
            })
        },

        getUserInfo({ success, error }) {
            if (this.userInfo) return this.userInfo

            qcloud.request({
            url: config.service.user,
            login: true,
            success: result => {
                let data = result.data

                if (!data.code) {
                let userInfo = data.data

                success && success({
                    userInfo
                })
                } else {
                error && error()
                }
            },
            fail: () => {
                error && error()
            }
            })
        },

        checkSession({ success, error }) {
            var self = this;
            if (this.userInfo) {
            return success && success({
                userInfo
            })
            }

            wx.checkSession({
            success: () => {
                getUserInfo({
                success: res => {
                    this.userInfo = res.userInfo

                    success && success({
                    userInfo
                    })
                },
                fail: () => {
                    error && error()
                }
                })
            },
            fail: () => {
                error && error()
            }
            })
        },
    }
    
});

export default helper;

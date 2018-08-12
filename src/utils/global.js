import {host, config} from '@/config/config';
import qcloud from 'qcloud-weapp-client-sdk'


const UNPROMPTED = 0
const UNAUTHORIZED = 1
const AUTHORIZED = 2

let userInfo = {}
let locationAuthType = UNPROMPTED


function login({ success, error }) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo'] === false) {

          locationAuthType = UNAUTHORIZED
          // 已拒绝授权
          wx.showModal({
            title: '提示',
            content: '请授权我们获取您的用户信息',
            showCancel: false
          })
          error && error()
        } else {
          locationAuthType = AUTHORIZED
          doQcloudLogin({ success, error })
        }
      }
    })
  }

  function doQcloudLogin({ success, error }) {
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
  }

 function getUserInfo({ success, error }) {
    if (userInfo) return userInfo

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
  }

 function checkSession({ success, error }) {
    if (userInfo) {
      return success && success({
        userInfo
      })
    }

    wx.checkSession({
      success: () => {
        getUserInfo({
          success: res => {
            userInfo = res.userInfo

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
  }


export default{
    UNPROMPTED,
    UNAUTHORIZED,
    AUTHORIZED,
    userInfo,
    locationAuthType,
    login,
    doQcloudLogin,
    getUserInfo,
    checkSession
}  
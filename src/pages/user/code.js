

import app from '@/utils/global'

export default {
    components: {
    },
  
    data () {
      return {
        msg: '商城首页',
        userInfo: null,
        locationAuthType: app.locationAuthType
      }
    },

    methods:{
      onTapAddress() {
        wx.showToast({
          icon: 'none',
          title: '此功能暂未开放'
        })
      },
    
      onTapKf() {
        wx.showToast({
          icon: 'none',
          title: '此功能暂未开放'
        })
      },

      onTapLogin: function () {
        app.login({
          success: ({ userInfo }) => {
            console.log('suc');
            console.log(userInfo);
            this.userInfo = userInfo;
            this.locationAuthType = app.locationAuthType;
            // this.setData({
            //   userInfo,
            //   locationAuthType: app.locationAuthType
            // })
          },
          error: () => {
            console.log('fail');
            this.locationAuthType = app.locationAuthType;
            // this.setData({
            //   locationAuthType: app.locationAuthType
            // })
          }
        })
      },
    },
  
    created () {
        console.log('hi');
        console.log(app);
        // this.onTapLogin();
    }
  }
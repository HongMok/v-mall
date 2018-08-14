
import LoginHelper from '../../utils/LoginHelper'

export default {
    components: {
    },
  
    data () {
      return {
        msg: '商城首页',
        userInfo: null,
        locationAuthType: LoginHelper.locationAuthType
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
      onTapLogin(e) {
        console.log('on click login :' + e );
        LoginHelper.doQcloudLogin({
          success: ({ userInfo }) => {
            console.log('suc');
            console.log(userInfo);
            this.userInfo = userInfo;
            this.locationAuthType = LoginHelper.locationAuthType;
          },
          error: () => {
            console.log('fail');
            this.locationAuthType = LoginHelper.locationAuthType;
          }
        })
      },

    },

    onTapLogin(e) {
      console.log('on click login :' + e );
      LoginHelper.login({
        success: ({ userInfo }) => {
          console.log('suc');
          console.log(userInfo);
          this.userInfo = userInfo;
          this.locationAuthType = LoginHelper.locationAuthType;
          // this.setData({
          //   userInfo,
          //   locationAuthType: app.locationAuthType
          // })
        },
        error: () => {
          console.log('fail');
          this.locationAuthType = LoginHelper.locationAuthType;
          // this.setData({
          //   locationAuthType: app.locationAuthType
          // })
        }
      })
    },
  
    created () {
        // console.log('hi');
        // console.log(app);
        // this.onTapLogin();
    }
  }
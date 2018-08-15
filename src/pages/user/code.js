
import LoginHelper from '../../utils/LoginHelper'
const qcloud = require( '../../libs/wafer-client-sdk/index' )
import AuthorizeConfig from '../../config/authorize-config'

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
        qcloud.login({
          success:(res)=>{
            console.log('suc');
            console.log(res);
            // this.userInfo = userInfo;
            this.locationAuthType = AuthorizeConfig.AUTHORIZED;
          },
          fail:(err)=> {
            console.log('fail');
            console.log(err);
            this.locationAuthType = AuthorizeConfig.UNAUTHORIZED;
            // this.locationAuthType = LoginHelper.locationAuthType;
          },
          userResult: e.target
        })
      },

    },

    onTapLogin(e) {
      console.log('on click login :' + e );
      qcloud.login({
        success: res => {
          console.log('suc');
          console.log(res);
          // this.userInfo = userInfo;
          // this.locationAuthType = LoginHelper.locationAuthType;
        },
        error: err => {
          console.log('fail');
          console.log(err);
          // this.locationAuthType = LoginHelper.locationAuthType;
        },
        userResult: e
      })
    },
  
    created () {
        // console.log('hi');
        // console.log(app);
        // this.onTapLogin();
    }
  }
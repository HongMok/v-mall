
// import LoginHelper from '../../utils/LoginHelper'
const qcloud = require( '../../libs/wafer-client-sdk/index' )
import AuthorizeConfig from '../../config/authorize-config'
import util from '@/utils/util'
import { mapState } from 'vuex'

export default {
    components: {
    },
  
    data () {
      return {
        msg: '商城首页'
      }
    },

    computed:{
      ...mapState({
        userInfo: state => state.user.userInfo,
        authType: state => state.user.authType
      }),
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

      onGetUserInfo(e) {
        util.showBusy('正在登录...');
        qcloud.login({
          success:(res)=>{
            let info = res;
            let type = AuthorizeConfig.AUTHORIZED;
            this.$store.dispatch('user/actLoginInfo', {info, type});
            util.showSuccess('登录成功');
          },
          fail:(err)=> {
            let type = AuthorizeConfig.UNAUTHORIZED;
            this.$store.commit('user/setAuthType', {type});
            util.showModel('登录失败','请开启授权登录');
          },
          userResult: e.target
        })
      },

      onOpenSetting(e){
        console.log(e);
        let type;
        if(e.target.errMsg.indexOf('ok')==-1){
          //授权失败
          type = AuthorizeConfig.UNAUTHORIZED;
        }
        else{
          type = AuthorizeConfig.UNPROMPTED;
        }
        this.$store.commit('user/setAuthType', {type});
        // success: (res) => {
          /*
           * res.authSetting = {
           *   "scope.userInfo": true,
           *   "scope.userLocation": true
           * }
           */
        // }
      },

    },
  
    created () {
    }
  }
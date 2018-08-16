
// import LoginHelper from '../../utils/LoginHelper'
const qcloud = require( '../../libs/wafer-client-sdk/index' )
import AuthorizeConfig from '../../config/authorize-config'
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
      onTapLogin(e) {
        qcloud.login({
          success:(res)=>{
            let info = res;
            let type = AuthorizeConfig.AUTHORIZED;
            this.$store.dispatch('user/actLoginInfo', {info, type});
          },
          fail:(err)=> {
            let type = AuthorizeConfig.UNAUTHORIZED;
            this.$store.commit('user/setAuthType', {type});
          },
          userResult: e.target
        })
      },

    },
  
    created () {
    }
  }
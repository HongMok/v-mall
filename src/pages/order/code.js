import LoginHelper from '../../utils/LoginHelper'

export default {
    components: {
    },
  
    data () {
      return {
        msg: '商城首页'
      }
    },
  
    created () {
        
    },

    onLoad(){
        console.log('order');
        console.log( LoginHelper.locationAuthType );
    }
  }
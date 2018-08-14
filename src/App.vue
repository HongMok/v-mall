<script>

import {host, config} from '@/config/config';
const qcloud = require( './libs/wafer-client-sdk/index.js' );

export default {
  created () {
  },
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl)
  },

  data(){
    return {
    };
  },

}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>

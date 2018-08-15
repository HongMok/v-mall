import {host, config} from '@/config/config';
import Util from '@/utils/util'
// const qcloud = require( '../../libs/wafer-client-sdk/index.js' );
const qcloud = require( '../../libs/wafer-client-sdk/index' )


export default {
    components: {
    },
  
    data () {
      return {
        product: {
            id: 1,
            image: 'https://product-1256088332.cos.ap-guangzhou.myqcloud.com/product2.jpg',
            name: '商品',
            price: 480.5,
            source: '国内·广东'
          },
      }
    },

    methods:{
      getProductDetail(id) {
        wx.showLoading({
          title: '商品详情加载中',
        })
        qcloud.request({
          url: config.service.productDetail + id,
          success: result => {
            wx.hideLoading()
  
            if (!result.data.code) {
                this.product= result.data.data;
            } else {
              wx.showToast({
                title: '商品详情加载失败',
              })
            }
          },
          fail: result => {
            wx.hideLoading()
            wx.showToast({
              title: '商品数据加载失败',
            })
          }
        });
      },
    },
  
    created () {
        console.log('hi');
    },

    onLoad(options){
      console.log(options);
      this.getProductDetail(options.id);
    },
  }
import { mapState } from 'vuex'

export default {
    components: {
    },
  
    data () {
      return {
        msg: '订单',
        orderList: [
          {
            id: 0,
            list: [{
              count: 1,
              image: 'https://lg-hnvnrwzu-1254268058.cos.ap-shanghai.myqcloud.com/product1.jpg',
              name: '商品1',
              price: 50.5,
            }]
          },
          {
            id: 1,
            list: [{
              count: 1,
              image: 'https://lg-hnvnrwzu-1254268058.cos.ap-shanghai.myqcloud.com/product1.jpg',
              name: '商品1',
              price: 50.5,
            },
            {
              count: 1,
              image: 'https://lg-hnvnrwzu-1254268058.cos.ap-shanghai.myqcloud.com/product1.jpg',
              name: '商品2',
              price: 50.5,
            },
            {
              count: 1,
              image: 'https://lg-hnvnrwzu-1254268058.cos.ap-shanghai.myqcloud.com/product1.jpg',
              name: '商品2',
              price: 50.5,
            }
            ]
          },
          {
            id: 2,
            list: [{
              count: 1,
              image: 'https://lg-hnvnrwzu-1254268058.cos.ap-shanghai.myqcloud.com/product1.jpg',
              name: '商品2',
              price: 50.5,
            }]
          }
        ], // 订单列表
      }
    },

    computed:{
      ...mapState({
        userInfo: state => state.user.userInfo,
        authType: state => state.user.authType
      }),
    },

    methods:{
    },
  
    created () {
    },

    onLoad(){
      // this.orderList = [];
    },

    onShow(){

    }
  }
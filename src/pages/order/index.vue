<template>
  <div>

    <div v-if='!userInfo'>
      <div class='no-login-text'>前往个人中心登录</div>
    </div>

    <div v-else-if="orderList.length > 0">
      <div class="order-head">
        <img class="order-head-line" src="/static/images/line-black.png">
        <div class="order-head-text">已完成</div>
      </div>
      <div v-for="(value, index) in orderList" :key="index" class="order-block">
        <div v-for="(item, key) in value.list" :key="key" class="order-card">
          <img class="order-image" mode="widthFix" :src="item.image">
          <div class="order-info">
            <div class="order-name">{{item.name}}</div>
            <div class="order-price">¥ {{item.price}}</div>
          </div>
          <div class="order-opr">
            <div class="order-btn">评价</div>
            <div class="order-count">x{{item.count}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="order-empty" v-else>
      <img class="empty-image" src="/static/images/order.png">
      <div class="empty-text">暂时还没有订单</div>
    </div> 

  </div>
</template>

<script src='./code.js'>
</script>

<style src='./styles.css' scoped>
</style>

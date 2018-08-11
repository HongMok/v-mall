<template>
  <div>
    <!--pages/home/home.wxml-->
    <img src='/static/images/bg.png' class='bg'>
    <view class='hot-card'>
      <view class='hot-name'>
        <img class='hot-name-line' src='/static/images/line-red.png'>
        <view class='hot-name-text'>{{productList[0].name}}</view>
        <img class='hot-name-line' src='/static/images/line-red.png'>
      </view>
      <img class='hot-info' src='/static/images/discount.png'>
      <img class='hot-image' :src='productList[0].image'>
    </view>
    <view class='list-title'>
      <img class='list-title-line' src='/static/images/line-black.png'>
      <view class='list-title-text'>春季推荐</view>
      <img class='list-title-line' src='/static/images/line-black.png'>
    </view>

    <!-- <view class='product-row' v-for='(item, index) in productList' :key='index' v-if='index%2 === 1'>
      <navigator class='product-card' v-for='(pitem, pindex ) in [productList[index], productList[index+1]]' :key='pindex' url="/pages/detail/detail?id={{pitem.id}}">
        <img class='product-image' src='{{pitem.image}}' mode='widthFix'>
        <view class='product-name'>{{pitem.name}}</view>
        <view class='product-meta'>
          <view class='product-money'>￥</view>
          <view class='product-price'>{{pitem.price}}</view>
          <view class='product-add' @catchtap='addToTrolley' :data-id="pitem.id">+</view>
        </view>
      </navigator>
    </view> -->
  </div>
</template>

<script src='./code.js'>
</script>

<style src='./styles.css' scoped>
</style>

<template>
  <div id='page'>
    <!--pages/home/home.wxml-->
    <img src='/static/images/bg.png' class='bg'>
    <div class='hot-card'>
      <div class='hot-name'>
        <img class='hot-name-line' src='/static/images/line-red.png'>
        <div class='hot-name-text'>{{productList[0].name}}</div>
        <img class='hot-name-line' src='/static/images/line-red.png'>
      </div>
      <img class='hot-info' src='/static/images/discount.png'>
      <img class='hot-image' :src='productList[0].image'>
    </div>
    <div class='list-title'>
      <img class='list-title-line' src='/static/images/line-black.png'>
      <div class='list-title-text'>春季推荐</div>
      <img class='list-title-line' src='/static/images/line-black.png'>
    </div>

    <div class='product-list'>
      <product-item v-for='(item, index) in productList' :key='index' :product='item'></product-item>
    </div>

    <!-- <div class='product-row' v-for='(item, index) in productList' :key='index' v-if='index%2 === 1'>
      <navigator class='product-card' v-for='(pitem, pindex ) in [productList[index], productList[index+1]]' :key='pindex' url="/pages/detail/detail?id={{pitem.id}}">
        <img class='product-image' src='{{pitem.image}}' mode='widthFix'>
        <div class='product-name'>{{pitem.name}}</div>
        <div class='product-meta'>
          <div class='product-money'>￥</div>
          <div class='product-price'>{{pitem.price}}</div>
          <div class='product-add' @catchtap='addToTrolley' :data-id="pitem.id">+</div>
        </div>
      </navigator>
    </div> -->
  </div>
</template>

<script src='./code.js'>
</script>

<style src='./styles.css' scoped>
</style>

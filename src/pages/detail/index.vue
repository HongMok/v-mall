<template>
  <div>

    <!--pages/detail/detail.wxml-->
    <div class='product-card'>
      <img class='product-image' :src='product.image'>
      <div class='product-name'>{{product.name}}</div>
      <div class='product-source'>{{product.source}}</div>
      <div class='product-meta'>
        <div class='product-money'>￥</div>
        <div class='prodct-price'>{{product.price}}</div>
      </div>
    </div>
    <div class='info-card'>
      <div class='advantage-list'>
        <div class='advantage-item'>
          <img class='advantage-icon' src='/static/images/check-yellow.png'>
          <div class='advantage-text'>7天免费退货</div>
        </div>
        <div class='advantage-item'>
          <img class='advantage-icon' src='/static/images/check-yellow.png'>
          <div class='advantage-text'>24小时内发货并配送运费险</div>
        </div>
      </div>
      <div class='comment-entry' bindtap='onTapCommentEntry'>
        <div class='comment-btn'>
          <div class='comment-title'>已买评价</div>
          <div class='comment-count'>{{product.commentCount}}条</div>
          <img class='comment-arrow' src='/static/images/grey-arrow.png'>
        </div>
        <div class='comment-preview' v-if='product.firstComment'>{{product.firstComment.content}}</div>
      </div>
    </div>
    <div class='opr-cnt'>
      <div class='opr-trolley' @click='addToTrolley'>加入购物车</div>
      <div class='opr-buy' @click='buy'>立即购买</div>
    </div>

  </div>
</template>

<script src='./code.js'>
</script>

<style src='./styles.css' scoped>
</style>

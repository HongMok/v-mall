<template>
  <div>
      <navigator class='product-card' :key='product.id' :url="'/pages/detail/main?id='+product.id">
        <img class='product-image' :src='product.image' mode='widthFix'>
        <div class='product-name'>{{product.name}}</div>
        <div class='product-meta'>
          <div class='product-money'>￥</div>
          <div class='product-price'>{{product.price}}</div>
          <div class='product-add' @catchtap='addToTrolley' :data-id="product.id">+</div>
        </div>
      </navigator>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>
  /* .product-row {
    display: flex;
    justify-content: space-around; 
    margin: 0 52rpx 28rpx;
  } */
  
.product-card {
    width: 300rpx;
  /* flex: 1; */
  background: #FFFFFF;
  box-shadow: 0 2rpx 13rpx 5rpx rgba(0, 0, 0, 0.02);
  border-radius: 13rpx;
  margin: 11rpx;
}

/* .product-card:first-child {
  margin-right: 27rpx;
} */

.product-image {
  width: 100%;
  border-radius: 13rpx 13rpx 0 0;
}

.product-name {
  margin: 0 21rpx;
  font-size: 28rpx;
  color: rgba(29, 29, 38, 0.8);
  line-height: 40rpx;
}

.product-meta {
  display: flex;
  align-items: center;
  margin: 9rpx 21rpx 15rpx;
}

.product-money,
.product-add {
  width: 36rpx;
  height: 36rpx;
  line-height: 36rpx;
  text-align: center;
  border-radius: 50%;
  color: #34373D;
  font-weight: 900;
  background: #F7E687;
}

.product-money {
  font-size: 24rpx;
}

.product-add {
  font-size: 32rpx;
}

.product-price {
  flex: 1;
  margin: 0 10rpx;
  font-size: 28rpx;
}
</style>

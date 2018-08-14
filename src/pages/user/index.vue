<template>
  <div>

    <!--pages/user/user.wxml-->
    <img class="bg" src="/static/images/bg.png">
    <div v-if="!userInfo">
      <div class="unlogin-card">
        <div class="unlogin-head"></div>
        <div class="unlogin-info">
          <div class="unlogin-text">未登录</div>
          <div class="unlogin-tips">点击微信登录后可方便购物</div>
        </div>
      </div>
      <button v-if="locationAuthType==0" class="unlogin-btn" open-type='getUserInfo' @getuserinfo='onTapLogin'>微信登录</button>
      <button v-if="locationAuthType==1" class="unlogin-btn" open-type='openSetting' :bindopensetting="onTapLogin">授权登录</button>
    </div>
    <div class="user-card" v-else>
      <div class="user-info">
        <img class="user-head" :src="userInfo.avatarUrl">
        <div class="user-name">{{userInfo.nickName}}</div>
      </div>
      <div class="user-split"></div>
      <div class="user-options">
        <div class="option" bindtap="onTapAddress">
          <div class="option-title">收货地址</div>
          <img class="option-arrow" src="/static/images/grey-arrow.png">
        </div>
        <div class="option" bindtap="onTapKf">
          <div class="option-title">联系客服</div>
          <img class="option-arrow" src="/static/images/grey-arrow.png">
        </div>
      </div>
    </div>


  </div>
</template>

<script src='./code.js'>
</script>

<style src='./styles.css' scoped>
</style>


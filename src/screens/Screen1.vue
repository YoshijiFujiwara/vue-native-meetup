<template>
  <view class="container">
    <text class="text-color-primary">{{title}}</text>
    <button title="ホームスクリーンへ" :on-press="() => navigate('homeScreen')"></button>
  </view>
</template>

<script>
  export default {
    props: {
      navigate: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        title: 'スクリーン！'
      }
    }
  }
</script>

<style>
  .container {
    background-color: white;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .text-color-primary {
    color: blue;
  }
</style>

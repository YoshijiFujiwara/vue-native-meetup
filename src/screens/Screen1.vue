<template>
  <view class="container">
    <text class="text-color-primary">{{title}}</text>
    <button :title="'スクリーン2へ'" :on-press="goToScreen2" />
  </view>
</template>

<script>
  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    data() {
      return {
        title: 'スクリーン1！'
      }
    },
    methods: {
      goToScreen2() {
        this.navigation.navigate('ScreenTwo')
      }
    }
  }
</script>

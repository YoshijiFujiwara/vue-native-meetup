<template>
  <view>
    <text class="text-color-primary">{{message}}</text>
    <button :title="btnMessage" :on-press="handleClick" />
    <text class="count-text">{{clickCount}}</text>
    <text>{{clickMotivation}}</text>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        message: 'ようこそ！',
        btnMessage: 'クリック！',
        clickCount: 0
      }
    },
    computed: {
      clickMotivation() {
        if (this.clickCount < 5) {
          return "クリックしてください";
        } else {
          return "よくできました";
        }
      }
    },
    methods: {
      handleClick() {
        this.clickCount++;
      }
    }
  }
</script>

<style>
  .text-color-primary {
    color: blue;
  }

  .count-text {
    font-size: 30px;
  }
</style>

<template>
  <view class="container">
    <text class="text-color-primary">{{title}}</text>
    <hello />
  </view>
</template>

<script>
  import Hello from '@/components/Hello';

  export default {
    components: {
      Hello
    },
    data() {
      return {
        title: 'ホームスクリーン'
      }
    }
  }
</script>

<style>

</style>

<template>
  <view class="container">
    <text class="text-color-primary">{{title}}</text>
    <text>{{testingData}}</text>
    <hello />
    <button title="スクリーン１へ" :on-press="() => navigate('screen1')"></button>
  </view>
</template>

<script>
  import Hello from '@/components/Hello';

  export default {
    components: {
      Hello
    },
    props: {
      testingData: {
        type: String,
        required: false
      },
      navigate: {
        type: Function,
        required: true
      }
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

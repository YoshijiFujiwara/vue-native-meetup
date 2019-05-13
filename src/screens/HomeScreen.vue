<template>
  <view class="container">
    <text class="text-color-primary">{{title}}</text>
    <hello />
    <nb-button :on-press="goToScreen1">
      <nb-text>クリックして！</nb-text>
    </nb-button>
  </view>
</template>

<script>
  import Hello from '@/components/Hello';

  export default {
    components: {
      Hello
    },
    props: {
      navigation: {
        type: Object
      }
    },
    data() {
      return {
        title: 'ホームスクリーン'
      }
    },
    methods: {
      goToScreen1() {
        this.navigation.navigate('ScreenOne')
      }
    }
  }
</script>

<style>

</style>

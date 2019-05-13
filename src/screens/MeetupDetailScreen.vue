<template>
  <view>
    <text>ミートアップ詳細画面</text>
    <text>{{meetupId}}</text>
  </view>
</template>

<script>
  export default {
    props: {
      navigation: {
        type: Object,
      }
    },
    data() {
      return {
        meetupId: ''
      }
    },
    created() {
      // 画面遷移してきたときに、変数を渡す
      this.meetupId = this.navigation.getParam('meetupId', 'undefined')
    }
  }
</script>

<style>

</style>

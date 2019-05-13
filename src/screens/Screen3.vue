<template>
  <ScreenWithDrawer :navigation="navigation" :headerTitle="title">
    <view>
      <text class="text-color-primary">{{title}}</text>
    </view>
  </ScreenWithDrawer>
</template>

<script>
  import ScreenWithDrawer from '@/components/ScreenWithDrawer';

  export default {
    components: {
      ScreenWithDrawer
    },
    props: {
      navigation: {
        type: Object
      }
    },
    data() {
      return {
        title: 'スクリーン3！'
      }
    },
  }
</script>

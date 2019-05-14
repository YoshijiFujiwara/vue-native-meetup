<template>
  <view class="container">
    <Navigation />
  </view>
</template>

<script>
  import Navigation from './navigation';
  import Vue from 'vue-native-core';
  import { VueNativeBase } from 'native-base';
  import store from './store';
  import ScreenWithDrawer from '@/components/ScreenWithDrawer';

  Vue.use(VueNativeBase);
  Vue.component('ScreenWithDrawer', ScreenWithDrawer); // ここで登録しておき、いちいちインポートしなくていい
  Vue.prototype.$store = store;

  Vue.filter('upperCase', function(value) {
    if (!value) return ''

    return value.toUpperCase()
  })

  export default {
    components: {
      Navigation
    }
  }
</script>

<style>
  .container {
    flex: 1;
  }
</style>

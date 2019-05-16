import Vuex from 'vuex';
import Vue from 'vue-native-core';
import axios from 'axios';

import meetups from './modules/meetups';
import threads from './modules/threads';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meetups,
    threads,
    auth
  },
  // ステートとして保存したいデータ
  state: {
  },
  // store中のstateには、ゲッターを通して取得できる
  getters: {

  },
  // コンポーネント中のメソッドのようなもの
  actions: {
  },
  mutations: {
    // modules以下のsetItems系はここに統一する
    setItems(state, {items, resource}) {
      Vue.set(state[resource], 'items', items)
    }
  }
})

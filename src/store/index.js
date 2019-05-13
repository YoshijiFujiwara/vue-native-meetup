import Vuex from 'vuex';
import Vue from 'vue-native-core';
import axios from 'axios';
import {Platform} from 'react-native';

Vue.use(Vuex);

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                          : 'http://10.0.2.2:3001/api/v1';

export default new Vuex.Store({
  // ステートとして保存したいデータ
  state: {
    todos: [],
    meetups: [],
  },
  // store中のstateには、ゲッターを通して取得できる
  getters: {

  },
  // コンポーネント中のメソッドのようなもの
  actions: {
    // vuex-2.homeScreenからのアクションディスパッチに対応
    fetchTodos({ commit, state }) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          const todos = res.data;
          // vuex-3.mutationをコミット
          commit('setTodos', todos);
          return state.todos;
        })
    },
    fetchMeetups({ commit, state }) {
      axios.get(`${BASE_URL}/meetups`)
        .then(res => {
          const meetups = res.data;
          commit('setMeetups', meetups);
          return state.meetups;
        })
    }
  },
  mutations: {
    setTodos(state, todos) {
      // vuex-4.stateのtodosに反映する
      Vue.set(state, 'todos', todos)
    },
    setMeetups(state, meetups) {
      console.log(meetups.length + 'ほげ')
      Vue.set(state, 'meetups', meetups);
    }
  }
})

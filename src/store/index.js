import Vuex from 'vuex';
import Vue from 'vue-native-core';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // ステートとして保存したいデータ
  state: {
    todos: []
  },
  // store中のstateには、ゲッターを通して取得できる
  getters: {

  },
  // コンポーネント中のメソッドのようなもの
  actions: {
    // vuex-2.homeScreenからのアクションディスパッチに対応
    fetchTodos({ commit, todos }) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          const todos = res.data;
          // vuex-3.mutationをコミット
          commit('setTodos', todos);
          return state.todos;
        })
    }
  },
  mutations: {
    setTodos(state, todos) {
      // vuex-4.stateのtodosに反映する
      Vue.set(state, 'todos', todos)
    }
  }
})

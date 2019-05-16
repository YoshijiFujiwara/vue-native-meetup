import axios from "axios";
import Vue from "vue-native-core";
import {Platform} from "react-native";

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                          : 'http://10.0.2.2:3001/api/v1';

export default {
  namespaced: true,

  state: {
    user: {},
    isAuth: false
  },
  actions: {
    login({commit, state}, userData) {
      return axios.post(`${BASE_URL}/users/login`, userData)
        .then(res => {
          const user = res.data
          commit('setAuthUser', user)
          return state.user
        })
    }
  },
  mutations: {
    setAuthUser(state, user) {
      return state.user = user;
    }
  }
}
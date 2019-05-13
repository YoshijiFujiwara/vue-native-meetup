<template>
  <scroll-view>
    <nb-list>
      <nb-list-item v-for="todo in todos">
        <nb-text>{{ todo.title }}</nb-text>
      </nb-list-item>
    </nb-list>
  </scroll-view>
</template>

<script>
  import axios from 'axios';

  export default {
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
    computed: {
      // vuex-5. ミューテーションした後のデータが反映されている
      todos() {
        return this.$store.state.todos
      }
    },
    created() {
      // vuex-1.vuexのfetchTodosアクションを実行
      this.$store.dispatch('fetchTodos')
    },
    methods: {
      goToScreen1() {
        this.$store.
        this.navigation.navigate('ScreenOne')
      }
    }
  }
</script>

<style>

</style>

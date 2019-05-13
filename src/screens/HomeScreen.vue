<template>
  <scroll-view>
    <nb-list>
      <nb-list-item v-for="meetup in meetups">
        <nb-text>{{ meetup.title }}</nb-text>
      </nb-list-item>
    </nb-list>
  </scroll-view>
</template>

<script>
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
      },
      meetups() {
        return this.$store.state.meetups.items
      }
    },
    created() {
      // vuex-1.vuexのfetchTodosアクションを実行
      this.$store.dispatch('fetchTodos')
      this.$store.dispatch('meetups/fetchMeetups') // namespace: true
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

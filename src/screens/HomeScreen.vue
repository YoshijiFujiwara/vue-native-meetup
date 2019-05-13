<template>
  <scroll-view>
    <nb-text class="header-1">Featured Meetups</nb-text>
    <MeetupCard v-for="meetup in meetups"
                  :meetup="meetup"
                  :navigateToDetail="goToMeetupDetail"
                  :key="meetup._id" />
  </scroll-view>
</template>

<script>
  import MeetupCard from '@/components/MeetupCard';

  export default {
    components: {
      MeetupCard
    },
    props: {
      navigation: {
        type: Object
      }
    },
    data() {
      return {
        title: 'ホームスクリーン',

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
      },
      goToMeetupDetail() {
        this.navigation.navigate('Meetup')
      }
    }
  }
</script>

<style>
  .header-1 {
    font-size: 23px;
    padding: 20px;
    font-weight: bold;
  }
</style>

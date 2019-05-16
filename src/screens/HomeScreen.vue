<template>
  <scroll-view>
    <nb-text class="header-1">Featured Meetups</nb-text>
    <nb-text :style="{paddingLeft: 20}">ようこそ {{user.username}}</nb-text>
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
      meetups() {
        return this.$store.state.meetups.items
      },
      user() {
        return this.$store.state.auth.user
      }
    },
    created() {
      // vuex-1.vuexのfetchTodosアクションを実行
      this.$store.dispatch('meetups/fetchMeetups') // namespace: true
      this.$store.dispatch('meetups/fetchSecret')
    },
    methods: {
      goToScreen1() {
        this.navigation.navigate('ScreenOne')
      },
      goToMeetupDetail(meetupId) {
        // 画面遷移してきたときに、変数を渡せる
        this.navigation.navigate('Meetup', { meetupId })
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

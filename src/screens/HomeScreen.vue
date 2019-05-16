<template>
  <nb-container>
    <AppHeader root
               :navigation="navigation"
               screen="Home" />
    <scroll-view>
      <nb-text class="header-1">Featured Meetups</nb-text>
      <nb-text v-if="user" :style="{paddingLeft: 20}">Welcome {{user.username}}</nb-text>
      <!-- Separate This -->
      <MeetupCard v-for="meetup in meetups"
                  :meetup="meetup"
                  :navigateToDetail="goToMeetupDetail"
                  :key="meetup._id" />
      <!-- Separate This -->
    </scroll-view>
  </nb-container>
</template>

<script>
  import MeetupCard from '@/components/MeetupCard';
  import { AsyncStorage } from 'react-native'

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
    },
    methods: {
      goToScreen1() {
        this.navigation.navigate('ScreenOne')
      },
      goToMeetupDetail(meetupId) {
        // 画面遷移してきたときに、変数を渡せる
        this.navigation.navigate('Meetup', { meetupId })
      },
      logout () {
        AsyncStorage.removeItem('meetuper-jwt')
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

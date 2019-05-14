<template>
  <!-- 読み込まれてから、表示する -->
  <nb-container v-if="isMeetupLoaded">
    <view :style="styles.container">
      <nb-h1 :style="[styles.headerOne, styles.container]">{{meetup.title}}</nb-h1>
      <nb-thumbnail :source="{uri: meetupCreator.avatar}" />
      <nb-text :style="styles.label">
        by {{meetupCreator.name}}
      </nb-text>
    </view>

    <nb-content>
      <nb-card>
        <nb-tabs>
          <nb-tab heading="詳細">
            <MeetupDetailInfo :meetup="meetup" />
          </nb-tab>
          <nb-tab heading="スレ">
            <MeetupThreads :threads="threads" />
          </nb-tab>
          <nb-tab heading="参加者">
            <text>hogehoge</text>
          </nb-tab>
        </nb-tabs>

      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
  import MeetupDetailInfo from '@/components/MeetupDetailInfo';
  import MeetupThreads from '@/components/MeetupThreads';
  import styles from '@/styles';

  export default {
    components: {
      MeetupDetailInfo,
      MeetupThreads
    },
    props: {
      navigation: {
        type: Object,
      }
    },
    data() {
      return {
        styles
      }
    },
    computed: {
      meetup() {
        return this.$store.state.meetups.item;
      },
      threads() {
        return this.$store.state.threads.items
      },
      isMeetupLoaded() {
        return Object.keys(this.meetup).length > 0;
      },
      meetupCreator() {
        return this.meetup.meetupCreator || {}
      },
    },
    created() {
      // 画面遷移してきたときに、変数を渡す
      const meetupId = this.navigation.getParam('meetupId', 'undefined')

      this.$store.dispatch('meetups/fetchMeetupById', meetupId)
      this.$store.dispatch('threads/fetchThreads', meetupId)
    }
  }
</script>

<style>

</style>

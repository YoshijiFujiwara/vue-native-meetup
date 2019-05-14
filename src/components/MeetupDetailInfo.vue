<template>
  <view>
    <nb-card-item bordered>
      <nb-body>
        <!-- Label Styles -->
        <nb-text :style="styles.label">
          日付
        </nb-text>
        <nb-text>
          {{meetup.startDate}}
        </nb-text>
        <!-- Label Styles -->
        <nb-text :style="styles.label">
          開始時刻
        </nb-text>
        <nb-text>
          {{meetup.timeFrom}}
        </nb-text>
        <!-- Label Styles -->
        <nb-text :style="styles.label">
          終了時刻
        </nb-text>
        <nb-text>
          {{meetup.timeTo}}
        </nb-text>
        <!-- Label Styles -->
        <nb-text :style="styles.label">
          カテゴリー
        </nb-text>
        <nb-text>
          {{meetup.category.text}}
        </nb-text>
        <!-- Label Styles -->
        <nb-text :style="styles.label">
          詳細
        </nb-text>
        <!-- Label Styles -->
        <!-- short info -->
        <nb-text>
          {{meetup.description}}
        </nb-text>
      </nb-body>
    </nb-card-item>
    <nb-card-item header bordered>
      <nb-text>概要</nb-text>
    </nb-card-item>
    <nb-card-item bordered>
      <nb-body>
        <!-- description -->
        <nb-text>
          NativeBase is a free and open source framework that enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.
        </nb-text>
      </nb-body>
    </nb-card-item>
  </view>
</template>

<script>
  import styles from '@/styles';
  export default {
    props: {
      meetup: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        styles
      }
    }
  }
</script>

<style>

</style>

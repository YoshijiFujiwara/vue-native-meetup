<template>
  <nb-card>
    <nb-card-item bordered>
      <nb-left>
        <nb-thumbnail :source="{uri: meetup.meetupCreator.avatar}"></nb-thumbnail>
        <nb-body>
          <nb-text>{{meetup.title}}</nb-text>
          <nb-text note>{{meetup.startDate | formatDate}}</nb-text>
        </nb-body>
      </nb-left>
    </nb-card-item>
    <nb-card-item>
      <nb-body>
        <image :source="{uri: meetup.image}"
               :style="stylesObj.cardItemImage"
               class="card-item-image"/>
        <nb-text>{{meetup.description}}</nb-text>
      </nb-body>
    </nb-card-item>
    <nb-card-item :style="{ paddingVertical: 0 }">
      <nb-left>
        <nb-button transparent>
          <nb-icon name="person"></nb-icon>
          <nb-text>{{meetup.joinedPeopleCount}} people are comming</nb-text>
        </nb-button>
      </nb-left>
      <nb-right>
        <nb-button :on-press="navigateHandler">
          <nb-text>ミートアップへ行く</nb-text>
        </nb-button>
      </nb-right>
    </nb-card-item>
  </nb-card>
</template>

<script>
  export default {
    props: {
      meetup: {
        type: Object,
        required: true
      },
      navigateToDetail: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover",
            width: '100%',
            marginBottom: 10
          }
        }
      }
    },
    methods: {
      navigateHandler() {
        this.navigateToDetail(this.meetup._id)
      }
    }
  }
</script>

<style>
  .card-item-image {
    flex: 1;
    height: 200;
  }
</style>

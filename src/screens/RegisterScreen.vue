<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <nb-header>
      <nb-body>
        <nb-title>
          Register
        </nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input v-model="form.username"
                     placeholder="ユーザーネーム"
                     auto-capitalize="none" />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.name"
                     placeholder="フルネーム"
                     auto-capitalize="none" />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.email"
                     placeholder="メールアドレス"
                     auto-capitalize="none" />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.avatar"
                     placeholder="アバターURL"
                     auto-capitalize="none" />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.password"
                     placeholder="パスワード"
                     auto-capitalize="none"
                     secure-text-entry />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.passwordConfirmation"
                     last
                     placeholder="パスワード再入力"
                     auto-capitalize="none" />
        </nb-item>
      </nb-form>
      <view :style="{marginTop:10}">
        <nb-button block>
          <nb-text>登録</nb-text>
        </nb-button>
        <nb-button transparent :on-press="goToLogin">
          <nb-text>登録済み？ログインはここから</nb-text>
        </nb-button>
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
  export default {
    props: {
      navigation: {
        type: Object
      },
    },
    data() {
      return {
        form: {
          username: '',
          name: '',
          avatar: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        }
      }
    },
    methods: {
      register() {
        alert(JSON.stringify(this.form));
      },
      goToLogin() {
        this.navigation.navigate('Login')
      }
    }
  }
</script>

<style>

</style>

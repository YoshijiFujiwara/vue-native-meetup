<template>
  <nb-container class="spinner-container" v-if="isCheckingUser">
    <nb-spinner color="blue" />
  </nb-container>
  <nb-container v-else :style="{backgroundColor: '#fff'}">
    <nb-header>
      <nb-body>
        <nb-title>
          Login
        </nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <InputWithError :error="$v.form.email.$dirty && !$v.form.email.required"
                        msg="メールアドレスは必須です">
          <nb-input v-model="form.email"
                     placeholder="メールアドレス"
                     auto-capitalize="none"
                     :on-blur="() => $v.form.email.$touch()" />
        </InputWithError>
        <InputWithError :error="$v.form.password.$dirty && !$v.form.password.required"
                        msg="パスワードは必須です">
          <nb-input v-model="form.password"
                     placeholder="Password"
                     auto-capitalize="none"
                     secure-text-entry
                     :on-blur="() => $v.form.password.$touch()" />
        </InputWithError>
      </nb-form>
      <view :style="{marginTop:10}">
        <nb-button :on-press="login" block>
          <nb-text>ログイン</nb-text>
        </nb-button>
        <nb-button transparent :on-press="goToRegister">
          <nb-text>登録はまだ？ここから登録</nb-text>
        </nb-button>
        <nb-button transparent :on-press="goToHome">
          <nb-text>ホームへ</nb-text>
        </nb-button>
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
  import { required } from 'vuelidate/lib/validators';
  import {Toast} from 'native-base';

  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    data() {
      return {
        isCheckingUser: false,
        form: {
          email: '',
          password: ''
        }
      }
    },
    async created() {
      this.isCheckingUser = true
      this.$store.dispatch('auth/verifyUser')
        .then(() => this.navigation.navigate('Home'))
        .catch(() => this.isCheckingUser = false)
    },
    validations: {
      form: {
        email: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
      login() {
        this.$v.form.$touch()

        if (!this.$v.form.$invalid) {
          this.$store.dispatch('auth/login', this.form)
            .then(user => {
              this.navigation.navigate('Home')
            })
            .catch(err => {
              Toast.show({
                text: 'メールアドレスかパスワードが正しくありません',
                buttonText: "OK",
                type: 'danger',
                duration: 3000
              })
            })
        }
      },
      goToRegister() {
        this.navigation.navigate('Register')
      },
      goToHome () {
        this.navigation.navigate('Home')
      }
    }
  }
</script>

<style>
  .spinner-container {
    display: flex;
    justify-content: center;
  }
</style>

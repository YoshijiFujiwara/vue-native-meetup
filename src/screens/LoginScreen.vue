<template>
  <nb-container :style="{backgroundColor: '#fff'}">
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
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
  import { required } from 'vuelidate/lib/validators';
  import {Toast} from 'native-base';
  import { AsyncStorage } from 'react-native';

  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    created() {
      this.$store.dispatch('auth/verifyUser')
        .then(() => this.navigation.navigate('Home'))
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
      }
    }
  }
</script>

<style>

</style>

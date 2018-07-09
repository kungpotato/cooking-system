<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <panel title="Login">
          <form
            name="cooking-form"
            autocomplete="off"
          >
            <v-text-field
              label="Email"
              v-model="email"
            /><br/>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
            /><br/>
            <div class="danger-alert" v-html="error"></div><br/>
            <v-btn class="teal" @click="login" dark>Login</v-btn>
          </form>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.User)
        this.$router.push({
          name: 'cook'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>

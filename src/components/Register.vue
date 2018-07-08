<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <panel title="Register">
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
            /><br/>
            <div class="error" v-html="error"></div><br/>
            <v-btn class="teal" @click="register" dark>Register</v-btn>
          </form>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.User)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: black;
}
</style>

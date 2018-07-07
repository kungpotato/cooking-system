<template>
  <v-toolbar fixed class="teal" dark>
    <v-toolbar-title class="mr-4">
        <span
          class="home"
          @click="navigateTo({name: 'root'})"
        >
            LEARN COOKING
        </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        to="cook"
        flat dark
      >Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        to="login"
        flat dark
      >Login</v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        to="register"
        flat dark
      >Sign Up</v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        to="root"
        flat dark
        @click="logout"
      >Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style>
.home {
  cursor: pointer;
}
</style>

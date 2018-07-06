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
      <!-- <v-toolbar-items>
          <v-btn flat dark>
              Browser
          </v-btn>
      </v-toolbar-items> -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          to="login"
          flat dark
          v-if="$store.state.isUserLoggedIn"
        >Login</v-btn>
        <v-btn
          to="register"
          flat dark
          v-if="$store.state.isUserLoggedIn"
        >Sign Up</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
.home {
  cursor: pointer;
}
</style>

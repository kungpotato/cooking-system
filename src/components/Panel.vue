<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout column>
      <v-flex xs10>
        <div class="white elevation-2">
          <v-toolbar flat dense class="teal" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action"/>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
              <slot>
                  No slot content define!
              </slot>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'panel',
  props: [
    'title'
  ]
}
</script>

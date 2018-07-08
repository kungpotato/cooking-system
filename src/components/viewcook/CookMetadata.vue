<template>
  <panel title="Cooking Metadata">
    <div>
      <v-layout>
        <v-flex xs12>
          <div class="cook-title">
            {{cook.title}}
          </div>
          <img class="cook-image" :src="cook.cookImageUrl"/>
          <div class="cook-material">
            <h3>วัตถุดิบ</h3>
            {{cook.material}}
          </div>
          <div class="cook-material">
            <h3>วิธีทำ</h3>
            {{cook.content}}
          </div>
          <v-btn
            class="teal"
            dark
            @click="navigateTo({
              name: 'cook-edit',
              params: {cookId: cook.id}
            })"
          >Edit</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
export default {
  props: [
    'cook'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.cook-image{
  width: 70%;
  margin: 0 auto
}
.cook-title {
  font-size: 30px
}
.cook-material {
  font-size: 15
}
</style>

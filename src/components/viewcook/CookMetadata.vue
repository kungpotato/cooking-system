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
            :to="{
              name: 'cook-edit',
              params () {
                return {cookId: cook.id}
              }
            }"
          >Edit</v-btn>
          <v-btn
            v-if="isUserLoggedIn && !isBookmarked"
            class="teal"
            dark
            @click="bookmark"
          >Bookmark</v-btn>
          <v-btn
            v-if="isUserLoggedIn && isBookmarked"
            class="teal"
            dark
            @click="unBookmark"
          >UnBookmark</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'cook'
  ],
  data () {
    return {
      isBookmarked: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
      return
    }
    try {
      const bookmark = (await BookmarksService.index({
        cookId: this.cook.id,
        userId: this.$store.state.user.id
      })).data
      this.isBookmarked = !!bookmark
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async bookmark () {
      try {
        const bookmark = (await BookmarksService.post({
          cookId: this.cook.id,
          userId: this.$store.state.user.id
        })).data
        this.isBookmarked = !!bookmark
      } catch (err) {
        console.log(err)
      }
    },
    async unBookmark () {
      try {
        const bookmark = (await BookmarksService.delete({
          cookId: this.cook.id,
          userId: this.$store.state.user.id
        })).data
        this.isBookmarked = !!bookmark
      } catch (err) {
        console.log(err)
      }
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

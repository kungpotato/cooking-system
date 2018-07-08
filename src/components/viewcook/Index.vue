<template>
  <v-layout>
    <v-flex xs6>
      <cook-metadata :cook="cook"/>
    </v-flex>
    <v-flex xs6>
      <you-tube :youtubeId="cook.youtubeId"/>
    </v-flex>
  </v-layout>
</template>

<script>
import CookingService from '@/services/CookingService'
import CookMetadata from './CookMetadata'
import YouTube from './Youtube'
export default {
  data () {
    return {
      cook: {}
    }
  },
  async mounted () {
    const cookId = this.$store.state.route.params.cookId
    this.cook = (await CookingService.show(cookId)).data
  },
  components: {
    CookMetadata,
    YouTube
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
.cook {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
</style>

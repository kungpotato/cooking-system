<template>
  <v-layout>
    <v-flex>
      <cook-search-panel/>
      <cook-panel/>
    </v-flex>
  </v-layout>
</template>

<script>
import CookingService from '@/services/CookingService'
import CookPanel from './CookPanel'
import CookSearchPanel from './CookSearchPanel'
export default {
  components: {
    CookPanel,
    CookSearchPanel
  },
  data () {
    return {
      cooks: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // ส่ง request ไป backend เพื่อขอวิธีทำอาหารทั้งหมด
    this.cooks = (await CookingService.index()).data
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

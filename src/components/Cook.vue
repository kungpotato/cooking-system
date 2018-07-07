<template>
  <v-layout>
    <v-flex>
      <panel title="Cooking">
        <v-btn
          to="/cook/create"
          slot="action"
          class="teal accent-1"
          light
          medium
          absolute
          right
          middle
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="cook in cooks" class="cook" :key="cook.id">
          <v-layout>
            <v-flex xs6>
              <div class="cook-title">
                {{cook.title}}
              </div>
               <div class="cook-material">
                 {{cook.material}}
              </div>
              <v-btn
                class="teal"
                dark
                @click="navigateTo({
                  name: 'cooking',
                  params: {cookId: cook.id}
                })"
              >View</v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="cook-image" :src="cook.cookImageUrl"/>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import CookingService from '@/services/CookingService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
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

<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Cook Metadata">
        <v-text-field
          label="Title"
          v-model="cook.title"
          :rules="[required]"
          required
        /><br/>
        <v-text-field
          label="Image Url"
          v-model="cook.cookImageUrl"
          :rules="[required]"
          required
        /><br/>
        <v-text-field
          label="Youtube ID"
          v-model="cook.youtubeId"
          :rules="[required]"
          required
        /><br/>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Cook Structure" class="ml-2">
        <v-textarea
          label="Material"
          v-model="cook.material"
          :rules="[required]"
          required
        /><br/>
        <v-textarea
          label="Content"
          v-model="cook.content"
          :rules="[required]"
          required
        /><br/>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn class="teal" dark @click="save">Save</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import CookingService from '@/services/CookingService'

export default {
  name: '',
  data () {
    return {
      cook: {
        title: null,
        material: null,
        content: null,
        cookImageUrl: null,
        youtubeId: null
      },
      required: (value) => !!value || 'Required.',
      error: null
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.cook)
        .every(key => !!this.cook[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required field'
        return
      }
      const cookId = this.$store.state.route.params.cookId
      try {
        await CookingService.put(this.cook)
        this.$router.push({
          name: 'cooking',
          params: {
            cookId: cookId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const cookId = this.$store.state.route.params.cookId
      this.cook = (await CookingService.show(cookId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

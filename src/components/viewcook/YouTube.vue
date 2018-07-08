<template>
  <panel title="Cooking Video">
    <div>
      <youtube
      :video-id="youtubeId"
      :player-width="300"
      :player-height="150">
      </youtube>
    </div>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

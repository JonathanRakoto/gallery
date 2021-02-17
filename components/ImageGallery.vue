<template>
  <div class="px-3 py-2 pb-5">
    <nuxt-img
      v-shared-element:[`image-${image.id}`]
      loading="lazy"
      :src="image.urls.raw"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    image: Object,
  },
}
</script>

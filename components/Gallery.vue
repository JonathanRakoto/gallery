<template>
  <masonry :cols="columns" :gutter="gutter">
    <div v-for="image in gallery" :key="image.id">
      <NuxtLink
        :to="{
          name: 'details-id',
          params: { id: image.id, image: image, searchQuery: query },
        }"
      >
        <ImageGallery :image="image" />
      </NuxtLink>
    </div>
  </masonry>
</template>

<script>
import ImageGallery from '@/components/ImageGallery'

export default {
  name: 'Gallery',
  components: { ImageGallery },
  props: ['gallery', 'query'],
  data() {
    return {
      columns: 4,
      gutter: 25,
      options: { width: 300, padding: 12 },
      ssr: { columns: 3 },
    }
  },
}
</script>

<style>
.masonry-container {
  width: 55%;
  margin: 0 auto;
}
</style>

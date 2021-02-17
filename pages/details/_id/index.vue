<template>
  <div>
    <Header />
    <nuxt-img v-shared-element:[id] loading="lazy" :src="image.urls.regular" />
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Detail',
  components: { Header },
  data() {
    return {
      id: this.$route.params.id,
      image: this.$route.params.image,
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
    .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
    } color: #35495e;
    */
</style>

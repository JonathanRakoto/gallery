<template>
  <div>
    <Header>
      <Search :query="query" @searchResult="searchResult" />
    </Header>
    <div class="container">
      <Gallery :gallery="galleryImages" :query="query" />
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Search from '@/components/Search'

export default {
  components: { Gallery, Header, Search },
  data() {
    return {
      galleryImages: [],
      query: '',
    }
  },
  head: {
    bodyAttrs: {
      class: 'mode',
    },
  },
  mounted() {
    this.query = 'Japan'
    if (
      this.$route.params.searchQuery !== '' &&
      this.$route.params.searchQuery !== undefined
    ) {
      this.query = this.$route.params.searchQuery
      this.loadGallery(this.$route.params.searchQuery)
    } else {
      this.loadGallery(this.query)
    }
  },
  methods: {
    async loadGallery(value) {
      try {
        const search = await this.$images.getSearch(value, 10)
        this.galleryImages = search.results
      } catch (error) {
        console.log('Search', error)
      }
    },
    async searchResult(value) {
      this.query = value
      await this.loadGallery(value)
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
} color: #35495e;
*/
.container {
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  text-align: center;
}
</style>

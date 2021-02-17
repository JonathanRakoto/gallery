<template>
  <div class="flex justify-between items-center pt-0">
    <div class="relative flex w-full flex-wrap items-stretch">
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="`Actual Search: ${query}`"
        class="px-3 py-3 pr-20 placeholder-gray-400 text-gray-700 relative background rounded text-sm border outline-none focus:outline-none focus:shadow-outline w-full"
      />
      <span
        class="z-10 h-full leading-snug font-normal absolute text-center text-indigo-500 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
      >
        <button type="button" class="outline-none" @click="onClickResult">
          <font-awesome-icon :icon="['fas', 'search']" />
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['query'],
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    onClickResult() {
      const { searchQuery } = this
      if (searchQuery !== '') this.$emit('searchResult', searchQuery)
    },
  },
}
</script>

<style>
.background {
  @apply bg-gray-200 border-transparent;
}

.dark-mode .background {
  @apply bg-gray-900 text-white;
}
</style>

<template>
  <Nuxt />
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'mode',
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.dark-mode .mode {
  @apply bg-gray-800 text-white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

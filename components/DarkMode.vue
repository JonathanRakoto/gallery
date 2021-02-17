<template>
  <button class="btn border button-mode" @click="changeMode">
    <p class="p-2">
      <nuxt-img src='/icons/sun.svg' />
    </p>
  </button>
</template>

<script lang="ts">
  export default {
    computed: {
      icon(): String {
        return this.$colorMode.preference === 'light' ? 'assets/icons/sun.svg' : 'assets/icons/moon.svg'
      }
    },
    methods: {
      changeMode() {
        this.$colorMode.preference =
          this.$colorMode.preference === 'light' ? 'dark' : 'light'
      }
    }
  }
</script>

<style>
  .button-mode, .button-mode:focus{
    border: 2px solid #35495e;
    border-radius: 5px;
  }

  .dark_mode .button-mode, .dark_mode .button-mode:focus {
    border: 2px solid #35495e;
    border-radius: 5px;
  }
</style>

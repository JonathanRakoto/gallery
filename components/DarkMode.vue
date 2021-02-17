<template>
  <toggle-button
    color="#bfccd9"
    font-size="12"
    height="33"
    width="75"
    :labels="{ checked: 'Dark', unchecked: 'Light' }"
    :switch-color="{ checked: '#2d3748', unchecked: '#fff' }"
    value="false"
    @change="onChangeMode"
  />
</template>

<script>
export default {
  data() {
    return {
      colorMode: this.$colorMode.preference,
    }
  },
  methods: {
    onChangeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

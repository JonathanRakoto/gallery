<template>
  <div class="flex py-2">
    <div class="w-full px-4">
      <nav
        class="relative flex items-center justify-between px-2 py-3 navbar-expand-lg header"
      >
        <div
          class="relative flex flex-row lg:w-auto px-4 lg:static lg:justify-start"
        >
          <div>
            <NuxtLink to="/">
              <h1
                class="title text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
              >
                Gallery
              </h1>
            </NuxtLink>
          </div>
          <slot />
        </div>
        <DarkMode />
      </nav>
    </div>
  </div>
</template>

<script>
import DarkMode from '@/components/DarkMode'

export default {
  name: 'Header',
  components: { DarkMode },
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 1px;
}

.header {
  @apply border-gray-100 border-b-2;
}

.dark-mode .header {
  @apply border-gray-100 border-b-2;
}
</style>

<template>
  <div>
    <Header />
    <div class="container">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1 py-3 mr-64">
          <NuxtLink
            :to="{
              name: 'index',
              params: { searchQuery: $route.params.searchQuery },
            }"
          >
            <button
              class="goBack border border-gray-100 active:bg-gray-100 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-box outline-none focus:outline-none mr-1 mb-1"
              style="transition: all 0.15s ease"
            >
              <span class="px-1">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
              </span>
              Go Back
            </button>
          </NuxtLink>
        </div>
        <div class="col-span-3">
          <div class="flex">
            <div class="image">
              <nuxt-img
                v-shared-element:[`image-${id}`]
                loading="lazy"
                :src="resizeImage"
              />
            </div>
            <div class="display w-full">
              <ul class="flex mb-0 list-none flex-wrap pb-4 flex-row">
                <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    class="text-xs font-bold uppercase px-5 py-3 shadow-box rounded block leading-normal"
                    :class="{
                      'text-indigo-600 bg-white': openTab !== 1,
                      'text-white bg-indigo-600': openTab === 1,
                    }"
                    @click="toggleTabs(1)"
                  >
                    Information
                  </a>
                </li>
                <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    class="text-xs font-bold uppercase px-5 py-3 shadow-box rounded block leading-normal"
                    :class="{
                      'text-indigo-600 bg-white': openTab !== 2,
                      'text-white bg-indigo-600': openTab === 2,
                    }"
                    @click="toggleTabs(2)"
                  >
                    User
                  </a>
                </li>
              </ul>
              <div
                class="relative flex flex-col min-w-0 shadow-box break-words w-full mb-6 rounded"
              >
                <div class="px-4 py-5 flex-auto">
                  <div class="tab-content tab-space">
                    <div
                      :class="{
                        hidden: openTab !== 1,
                        block: openTab === 1,
                      }"
                    >
                      <div class="flex flex-col text-justify">
                        <p>
                          Search Query:
                          <span class="font-medium">{{
                            $route.params.searchQuery
                          }}</span>
                          <br />
                          Original Size:
                          <span class="font-medium">
                            {{ image.width }}x{{ image.height }}
                          </span>
                          <br />
                          <br />
                          <span v-if="image.description">{{
                            image.description
                          }}</span>
                          <span v-else>No Description</span>
                          <br />
                          <br />
                          <span class="font-medium">
                            {{ image.likes }}
                          </span>
                          Likes
                        </p>
                      </div>
                    </div>
                    <div
                      :class="{
                        hidden: openTab !== 2,
                        block: openTab === 2,
                      }"
                    >
                      <div class="flex flex-col text-justify">
                        <p>
                          <span class="font-semibold text-xl">
                            @{{ image.user.username }}
                          </span>
                          <br />
                          <br />
                          <span v-if="image.user.instagram_username">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                            <span class="font-medium">{{
                              image.user.instagram_username
                            }}</span>
                          </span>
                          <span v-else>No Instagram Username</span>
                          <br />
                          <br />
                          <span v-if="image.user.twitter_username">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                            <span class="font-medium">{{
                              image.user.twitter_username
                            }}</span>
                          </span>
                          <span v-else>No Twitter Username</span>
                          <br />
                          <br />
                          <span v-if="image.user.portfolio_url">
                            <a target="_blank" :href="image.user.portfolio_url">
                              <font-awesome-icon :icon="['fas', 'desktop']" />
                              <span class="font-medium">{{
                                image.user.portfolio_url
                              }}</span>
                            </a>
                          </span>
                          <span v-else>No Portfolio Username</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      resizeImage: this.$route.params.image.urls.raw,
      openTab: 1,
    }
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
    toggleTabs(index) {
      this.openTab = index
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
}

.color {
  background-color: dodgerblue;
}

.size {
  height: 60%;
}

.image {
  padding: 15px 10px 25px 10px;
  width: 70%;
}

.display {
  padding: 15px 0 25px 0;
  width: 30%;
}

.goBack {
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease;
  box-shadow: 0 16px 32px rgba(53, 73, 94, 0.1);
}

.dark-mode .goBack {
  @apply border border-gray-700;
  box-shadow: 0 16px 32px rgba(74, 89, 104, 0.4);
}

.shadow-box {
  @apply shadow-lg;
}

.dark-mode .shadow-box {
  box-shadow: 0 16px 32px rgba(74, 89, 104, 0.4);
}
</style>

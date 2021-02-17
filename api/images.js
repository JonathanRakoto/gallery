const clientId = process.env.API_KEY_URL

export default ($axios) => ({
  getSearch(search, per_page = 20) {
    const params = {
      query: search,
      per_page,
      client_id: clientId,
    }

    return $axios.$get('/search/photos', { params })
  },
})

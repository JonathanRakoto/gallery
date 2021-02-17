import apiRepository from '@/api/images'
export default ({ $axios }, inject) => {
  inject('images', apiRepository($axios))
}

import Api from '@/services/Api'
// import axios from 'axios'

export default {
  index () {
    return Api().get('/cooks')
  },
  post (cook) {
    return Api().post('/cooks', cook)
  }
}

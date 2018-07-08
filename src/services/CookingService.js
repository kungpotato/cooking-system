import Api from '@/services/Api'
// import axios from 'axios'

export default {
  index (search) {
    return Api().get('/cooks', {
      params: {
        search: search
      }
    })
  },
  show (cookId) {
    return Api().get(`/cooks/${cookId}`)
  },
  post (cook) {
    return Api().post('/cooks', cook)
  },
  put (cook) {
    return Api().put(`/cooks/${cook.id}`, cook)
  }
}

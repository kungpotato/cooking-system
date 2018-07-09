import Api from '@/services/Api'
// import axios from 'axios'

export default {
  index (bookmark) {
    return Api().get('/bookmarks', {
      params: bookmark
    })
  },
  post (bookmark) {
    return Api().post('/bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return Api().delete(`/bookmarks/${bookmarkId}`)
  }
}

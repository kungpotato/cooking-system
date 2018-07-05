import Api from '@/services/Api'
// import axios from 'axios'

export default {
  register (credentials) {
    // return axios.post('http://localhost:8000/register', credentials)
    return Api().post('/register', credentials)
  }
}

import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:1337/', // process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async login(user) {
    const response = await API.post('/auth/local', {
      ...user
    })
    return response.data
  },
  async createClient(newClient) {
    const response = await API.post('/pd-databases', {
      headers: {
        Authorization:
          `Bearer ${localStorage.token}`, // eslint-disable-line
      },
      ...newClient
    })
    return response.data
  },
  async getClient(clientId) {
    const response = await API.get('/pd-databases/' + clientId, {
      headers: {
        Authorization:
          `Bearer ${localStorage.token}`, // eslint-disable-line
      },
    })
    return response.data
  }
}

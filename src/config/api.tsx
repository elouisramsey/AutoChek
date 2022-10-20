import axios from 'axios'

const defaults = {
  timeout: 30000,
  validateStatus: (status: number) =>
    [200, 400, 401, 404, 500].includes(status),
  headers: {
    'Content-Type': 'application/json'
  }
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  ...defaults
})

api.interceptors.response.use(
  (response: any) => {
    return response.headers['content-type'] === 'text/html'
      ? alert('We are unable to process your request.')
      : response
  },
  (error) => Promise.reject(error)
)

export { api }

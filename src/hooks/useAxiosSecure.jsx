import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import useAuth from './useAuth'
import { auth } from '../firebase/firebase.config'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL_KEY,
  withCredentials: true,
})

const useAxiosSecure = () => {
  const { logOutFunc } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // REQUEST interceptor
    const requestInterceptor = axiosInstance.interceptors.request.use(
      async config => {
        const currentUser = auth.currentUser

        if (currentUser) {
          // ALWAYS get fresh Firebase ID token
          const token = await currentUser.getIdToken(true)
          config.headers.authorization = `Bearer ${token}`
        }

        return config
      },
      error => Promise.reject(error)
    )

    // RESPONSE interceptor
    const responseInterceptor = axiosInstance.interceptors.response.use(
      res => res,
      async err => {
        const status = err?.response?.status

        if (status === 401 || status === 403) {
          await logOutFunc()
          navigate('/login')
        }

        return Promise.reject(err)
      }
    )

    // Cleanup
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
      axiosInstance.interceptors.response.eject(responseInterceptor)
    }
  }, [logOutFunc, navigate])

  return axiosInstance
}

export default useAxiosSecure

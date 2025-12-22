import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import useAuth from './useAuth'
import { auth } from '../firebase/firebase.config'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL_KEY,
  withCredentials: true,
})

let tokenPromise = null // token cache

const useAxiosSecure = () => {
  const { logOutFunc } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      async config => {
        const currentUser = auth.currentUser
        if (!currentUser) return config

        // reuse token promise (prevents multiple refresh calls)
        if (!tokenPromise) {
          tokenPromise = currentUser.getIdToken(false)
            .finally(() => {
              tokenPromise = null
            })
        }

        const token = await tokenPromise
        config.headers.authorization = `Bearer ${token}`

        return config
      }
    )

    const responseInterceptor = axiosInstance.interceptors.response.use(
      res => res,
      async err => {
        const status = err?.response?.status

        // token expired → try ONE refresh
        if (status === 401 && auth.currentUser) {
          try {
            const newToken = await auth.currentUser.getIdToken(true)
            err.config.headers.authorization = `Bearer ${newToken}`
            return axiosInstance(err.config) // retry request
          } catch {
            await logOutFunc()
            navigate('/login')
          }
        }

        if (status === 403) {
          await logOutFunc()
          navigate('/login')
        }

        return Promise.reject(err)
      }
    )

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
      axiosInstance.interceptors.response.eject(responseInterceptor)
    }
  }, [logOutFunc, navigate])

  return axiosInstance
}

export default useAxiosSecure

import { removeRouteListener } from '@/utils/emitter/router'
import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'

export const useUserStore = defineStore('userStore', {
  state: (): Partial<INIS.Login> => ({
    token: undefined,
    user: undefined
  }),

  getters: {
    // role: (state) => {
    //   if (state.token) {
    //     const payload = jwtDecode<INIS.JwtHeader>(state.token)
    //     return payload.data.role
    //   } else return undefined
    // },
    hasLogin: (state) => !!state.token
  },

  actions: {
    checkLogin() {
      return false
    },

    setUserInfo(data: INIS.Login) {
      this.$patch(data)
    },

    async logout() {
      this.$reset()
      removeRouteListener()
    }
  },

  persist: [
    {
      key: 'LOGIN-USER',
      pick: ['user', 'token'],
      storage: localStorage
    }
  ]
})

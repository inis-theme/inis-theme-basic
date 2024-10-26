import { defineStore } from 'pinia'

export const useSystemStore = defineStore('systemStore', {
  state: (): Partial<INIS.ThemeConfigJson> => ({
    site: undefined
  }),

  getters: {
    pass: (state) => !!state.site
  },
  actions: {
    async init() {
      if (this.site) return
      const { code, data } = await useConfigApi.one<INIS.ThemeConfigJson>(
        `config:theme-${import.meta.env.APP_THEME_NAME || 'basic'}`
      )
      if (code === 200) {
        this.$patch(data.json)
      } else {
        this.$patch({
          site: {
            site_name: import.meta.env.APP_TITLE,
            logo: '/static/images/logo/logo.svg'
          }
        })
      }
    }
  },
  persist: [
    {
      key: 'SYSTEM-CONFIG',
      storage: sessionStorage
    }
  ]
})

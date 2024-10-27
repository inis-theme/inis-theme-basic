namespace INIS {
  export interface Config<T> {
    create_time: number
    delete_time: number
    id: number
    json: T
    key: string
    remark: string
    result: { [key: string]: any }
    text: string
    update_time: number
    value: string
  }

  export interface ThemeConfigJson {
    logo: string
    email: EmailConfigJson
    site: SiteConfigJson
    pass?: boolean
  }

  export interface SiteConfigJson {
    description: string
    logo: string
    site_name: string
    tags: string[]
    sysdesc: string
  }

  export interface EmailConfigJson {
    account: string
    host: string
    nickname: string
    password: string
    port: string
    subject: string
  }
}

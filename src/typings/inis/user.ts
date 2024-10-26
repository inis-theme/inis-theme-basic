namespace INIS {
  interface authItem {
    id: number
    key: string
    name: string
    pages: string
    root: number
    rules: string
  }

  interface auth {
    all: boolean
    group: {
      ids: number[]
      list: authItem[]
    }
    pages: {
      hash: string[]
    }
    rules: {
      hash: string[]
    }
  }

  interface levelItem {
    name: string
    text?: string
    json?: any
    description: string
    exp: number
    value: number
  }

  interface level {
    current: levelItem
    next?: levelItem
  }

  interface userJson {
    qq?: string
    wechat?: string
    github?: string
    bilibili?: string
    cover?: string
  }

  export interface userResult {
    auth: auth
    level: level
  }

  export interface User extends Common<userResult, userJson> {
    account: string
    avatar: string
    count?: number
    login_time: number
    description: string
    gender: string
    password: string
    title: string
    email: string
    id: number
    exp: number
    nickname: string
    source: string
    auth_ids: number[]
  }

  export interface CheckToken {
    token: string
    user: User
    valid_time: number
  }
  export interface Login {
    token: string
    user: User
  }

  export interface UserList extends IPageList<User> {}
}

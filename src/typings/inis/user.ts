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
      ids?: number[]
      list: authItem[]
    }
    pages: {
      hash?: string[]
    }
    rules: {
      hash?: string[]
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
    curr: levelItem
    next?: levelItem
  }

  interface userJson {
    qq?: string
    wechat?: string
    github?: string
    bilibili?: string
    cover?: string
  }

  interface userDisplay {
    id: number
    uid: number
    avatar: string
    description: string
    exp: number
    covers: string
    create_time: number
    update_time: number
    delete_time: number
  }

  export interface userResult {
    auth: auth
    level: level
    display: userDisplay
  }

  export interface User extends Common<userResult, userJson> {
    id: number
    account: string
    nickname: string
    email: string
    phone: string
    status: string
    invite_uid: number
    gender: 'unknown' | 'girl' | 'boy'
    login_time: number
    description: string
    password: string
    source: string
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

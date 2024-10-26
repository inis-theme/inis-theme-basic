namespace INIS {
  export interface AuthPages extends Common<any, any> {
    hash: string
    name: string
  }

  export interface AuthRules extends Common<any, any> {
    cost: number
    hash: string
    name: string
    type: string
    route: string
    method: string
  }

  export interface AuthGroup extends Common<authGroupResult, any> {
    key: string
    name: string
    uids: string
    root: number
    pages: string
    rules: string
  }

  interface authGroupResult {
    users: authGroupUser[]
  }

  interface authGroupUser {
    id: number
    name: string
    avatar: string
    account: string
  }
}

namespace INIS {
  export interface Links extends Common<linksResult, any> {
    uid: number
    url: string
    ping: string
    group: number
    state: string
    check: string
    avatar: string
    target: string
    nickname: string
    description: string
  }

  interface linksResult {
    group: linksGroup
  }

  interface linksGroup {
    id: number
    name: string
    avatar: string
    description: string
  }
}

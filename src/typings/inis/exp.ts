namespace INIS {
  export interface Exp extends Common<expResult, any> {
    uid: number
    type: string
    value: number
    state: number
    bind_id: number
    bind_type: string
    description: string
  }

  interface expResult {
    author?: expAuthor
    article?: {
      id?: number
      title?: string
    }
    page?: {
      id?: number
      title?: string
    }
  }

  interface expAuthor {
    id: number
    avatar: string
    title: string
    nickname: string
    description: string
    result: userResult
  }
}

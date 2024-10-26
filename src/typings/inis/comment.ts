namespace INIS {
  export interface Comment extends Common<commentResult, commentJson> {
    ip: string
    uid: number
    pid: number
    tags?: string
    agent: string
    editor: string
    content: string
    bind_id: number
    bind_type: string
    replies?: Comment[]
  }

  interface commentResult {
    article?: commentAricle
    author?: commentAuthor
    page?: commentPage
    tags?: Tags[]
  }

  interface commentJson {
    area?: string
    addres?: string
    lat?: number
    lon?: number
    images?: string[]
    video?: string
  }

  interface commentAuthor {
    id: number
    avatar: string
    nickname: string
    description: string
    result: userResult
  }

  interface commentAricle {
    id?: number
    title?: string
  }

  interface commentPage {
    id?: number
    key?: string
    title?: string
  }
}

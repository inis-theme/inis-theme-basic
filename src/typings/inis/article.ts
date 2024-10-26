namespace INIS {
  export interface Article extends Common<articleResult, articleJson> {
    title: string
    abstract: string
    audit: number
    content: string
    covers: string
    editor: string
    group: string
    last_update: number
    tags: string
    views: number
    top: number
    uid: number
  }

  interface articleResult {
    collect: number[]
    like: number[]
    share: number[]
    tags?: Tags[]
    author: articleAuthor
    comment: comentCofig
    group: articleGroup[]
  }

  interface articleJson {
    comment?: articleComment
    auth?: articleAuth
    copyright?: string
  }

  export interface articleComment {
    allow?: number
    show?: number
  }

  export interface articleAuth {
    auth?: ViewAuth
    password?: string
  }

  interface articleAuthor {
    id: number
    nickname: string
    avatar: string
    title: string
    description: string
    result: userResult
  }

  interface comentCofig {
    allow: number
    count: number
    show: number
  }

  interface articleGroup {
    id: number
    pid: number
    name: string
    avatar: string
    description: string
  }
}

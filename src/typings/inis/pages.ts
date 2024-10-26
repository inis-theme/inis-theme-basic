namespace INIS {
  export interface Pages extends Common<pagesResult, pagesJson> {
    uid: number
    key: string
    tags: string
    title: string
    audit: number
    editor: string
    content: string
    description: string
    last_update: number
  }

  interface pagesResult {
    comment: pagesComment
    tags: pagesTags[]
  }

  interface pagesJson {
    comment?: pagesComment
    auth?: pagesAuth
    sort?: number
  }

  export interface pagesComment {
    allow?: number
    show?: number
  }

  export interface pagesAuth {
    auth?: ViewAuth
    password?: string
  }

  interface pagesTags {
    id: number
    name: string
    avatar?: string
    description?: string
  }
}

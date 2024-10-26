namespace INIS {
  export interface ArticleGroup extends Common<articleGroupResult, articleGroupJson> {
    pid: number
    key: string
    name: string
    avatar: string
    description: string
  }

  export interface ArticleGroupTree extends option {
    data: ArticleGroup
    children?: {
      value: number
      label: string
      data: ArticleGroup
    }[]
  }

  interface articleGroupResult {
    article: {
      count: number
      ids?: number[]
    }
  }

  interface articleGroupJson {
    cover?: string
  }

  interface option {
    value: number
    label: string
  }
}

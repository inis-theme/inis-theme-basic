namespace INIS {
  export interface Chart {
    article: articleCount
    banner: bannerCount
    comment: commentCount
    links: linkCount
    page: pageCount
    tag: tagCount
    users: usersCount
    placard: placardCount
  }

  export interface Participate {
    article?: {
      collect?: number[]
      issue?: number[]
      like?: number[]
      share?: number[]
    }
    comment?: {
      collect?: number[]
      issue?: number[]
      like?: number[]
      share?: number[]
    }
    page?: {
      collect?: number[]
      issue?: number[]
      like?: number[]
      share?: number[]
    }
  }

  interface count {
    total?: number
    no?: number[]
    yes?: number
  }

  interface articleCount {
    audit: count
    group: {
      recycle: count
    }
    recycle: count
  }

  interface bannerCount {
    recycle: count
  }

  interface commentCount {
    article: {
      ids?: number[]
      total: number
    }
    page: {
      ids?: number[]
      total: number
    }
    recycle: count
  }

  interface linkCount {
    check: count
    group: {
      recycle: count
    }
    recycle: count
    state: {
      ok?: number[]
      total: number
    }
  }

  interface pageCount {
    recycle: count
  }

  interface placardCount {
    recycle: count
  }

  interface tagCount {
    recycle: count
  }

  interface usersCount {
    recycle: count
  }
}

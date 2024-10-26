namespace INIS {
  export interface AlbumGroup extends Common<albumGroupResult, any> {
    id: number
    name: string
    covers: string
    description: string
  }

  interface albumGroupResult {
    album?: {
      count: number
      ids?: number[]
      views?: number
    }
  }
}

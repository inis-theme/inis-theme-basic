namespace INIS {
  export interface Album extends Common<albumResult, albumJson> {
    id: number
    group?: number
    title?: string
    tags?: string
    tags_arr?: number[]
    image?: string
    content?: string
  }

  interface albumResult {
    tags?: Tags[]
  }

  interface albumJson {
    size?: number
    type?: string
    device?: string
  }
}

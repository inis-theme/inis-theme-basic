namespace INIS {
  export declare type FileStatus = 'init' | 'uploading' | 'done' | 'error'

  export interface Emoji {
    qq?: string[]
    tiktok?: string[]
    bilibili?: string[]
  }

  export interface Upload {
    path: string
    name: string
    size: number
    ext: string
    type: string
  }

  export interface FileItem {
    uid: string
    status?: FileStatus
    file?: File
    percent?: number
    response?: any
    url?: string
    name?: string
  }
}

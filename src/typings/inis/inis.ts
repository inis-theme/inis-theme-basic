namespace INIS {
  export interface ThemeVersion {
    id: number
    libs: string
    title: string
    version: string
    content: string
    download: string
    progress: string
    create_time: number
  }

  export interface SystemVersion {
    id: number
    libs: string
    title: string
    version: string
    content: string
    download: string
    progress: string
    create_time: number
    result: {
      download: {
        count: number
      }
    }
  }

  export interface DownloadUrl {
    url: string
  }
}

namespace INIS {
  export interface Banner extends Common<any, any> {
    url: string
    title: string
    image: string
    target: string
    content: string
    end_time: number
    start_time: number
    time_range?: [any, any]
  }
}

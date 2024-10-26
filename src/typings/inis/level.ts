namespace INIS {
  export interface Level extends Common<any, levelJson> {
    exp: number
    value: number
    name: string
    description: string
  }

  interface levelJson {
    icon?: string
  }
}

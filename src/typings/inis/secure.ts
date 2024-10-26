namespace INIS {
  export interface ApiKeys extends Common<any, any> {
    value: string
  }

  export interface IpBlack extends Common<any, any> {
    ip: string
    agent: string
    cause: string
  }

  export interface QpsWarn extends Common<any, any> {
    ip: string
    path: string
    agent: string
    method: string
  }
}

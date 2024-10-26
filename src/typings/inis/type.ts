namespace INIS {
  export type ViewAuth = 'everyone' | 'me' | 'login' | 'password'
  export type RequestType = 'GET' | 'POST' | 'DELETE' | 'PUT'
  export type RouteKey = 'name' | 'path' | 'component' | 'meta' | 'children' | 'redirect'

  export type ThemeMode = 'light' | 'dark'

  export type ThemeColor = {
    primary: string
    info: string
    warning: string
    success: string
    danger: string
  }

  export type Theme = {
    colors: ThemeColor
  }

  // 颜色类型
  export type RGB = {
    r: number
    g: number
    b: number
  }
  export type HSL = {
    h: number
    s: number
    l: number
  }
  export type HEX =
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
}

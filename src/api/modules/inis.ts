/**
 * INIS API
 */
export default class INISApi {
  /**
   * 获取主题下个版本
   * @returns
   */
  themeNext(params?: any) {
    return request.get<INIS.ThemeVersion>('/inis/theme-version/next', params)
  }

  /**
   * 获取主题下载地址
   * @param id 主题版本id
   * @returns
   */
  themeUrl(id: number) {
    return request.get<INIS.DownloadUrl>('/inis/theme-version/download', { id }, true)
  }

  /**
   * 获取系统下个版本
   * @returns
   */
  systemNext(params?: any) {
    return request.get<INIS.SystemVersion>('/inis/system-version/next', params)
  }

  /**
   * 升级系统
   * @param id 系统版本id
   * @returns
   */
  upgrade(id: number) {
    return request.post<any>('/api/upgrade/system', { id }, true)
  }

  /**
   * 获取系统下载地址
   * @param id 系统版本id
   * @returns
   */
  systemUrl(id: number) {
    return request.get<INIS.DownloadUrl>('/inis/system-version/download', { id }, true)
  }

  /**
   * 查询已购主题
   * @param key 主题key
   * @returns
   */
  order(key: string) {
    return request.get<any>('/inis/order/theme', { key }, false)
  }
}

/**
 * 开发 API
 */
export default class DevApi {
  /**
   * 获取当前系统版本
   * @returns
   */
  systemVersion() {
    return request.get<INIS.InisVersion>('/dev/info/version')
  }
}

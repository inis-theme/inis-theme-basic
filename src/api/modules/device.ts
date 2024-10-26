/**
 * 设备API
 */
export default class DeviceApi {
  /**
   * 绑定的用户信息
   * @returns
   */
  user() {
    return request.get<INIS.User>('/inis/device/user', null, true)
  }

  /**
   * 设备绑定（绑定社区账号）
   * @param account 社区账号
   * @param password 社区密码
   * @returns
   */
  bind(account: string, password: string) {
    return request.post<INIS.Login>('/inis/device/bind', { account, password }, true)
  }

  /**
   * 设备解绑
   * @returns
   */
  unbind() {
    return request.delete<INIS.Login>('/inis/device/bind', null, true)
  }
}

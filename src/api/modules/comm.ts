/**
 * 公共API
 */
export default class CommApi {
  /**
   * ### 账号密码登录
   * @param account 账号
   * @param password 密码
   */
  login(account: string, password: string) {
    return request.post<INIS.Login>('/api/comm/sign-in', { account, password })
  }

  /**
   * ### 重置密码
   * @param social 账号
   * @param code 验证码，为空自动获取验证码
   * @param password 密码
   */
  resetPwd(social: string, code?: string, password?: string) {
    return request.post<INIS.Login>('/api/comm/reset-password', { social, password, code })
  }

  /**
   * ### 验证码登录
   * @param social 账号
   * @param code 验证码，为空自动获取验证码
   */
  loginByCode(social: string, code?: string) {
    return request.post<INIS.Login>('/api/comm/social-login', { social, code })
  }

  /**
   * ### 校验登录
   * @param renew 续签有效时长，续签会发生token变更，请注意更换新的token
   */
  checkToken(renew?: string) {
    return request.post<INIS.CheckToken>('/api/comm/check-token', { renew }, true)
  }

  /**
   * ### 注册账户
   * @param social 邮箱或手机号
   * @param account 账号
   * @param password 密码
   * @param nickname 昵称
   * @param code 验证码
   * @returns
   */
  register(social: string, account?: string, password?: string, nickname?: string, code?: string) {
    return request.post<INIS.CheckToken>('/api/comm/register', {
      social,
      account,
      password,
      nickname,
      code
    })
  }

  /**
   * ### 退出登录
   */
  logout() {
    return request.delete<null>('/api/comm/logout', null, true)
  }
}

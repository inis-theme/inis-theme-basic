/**
 * JWT配置
 */
export default class JwtApi {
  /**
   * 获取加密服务配置
   * @param name 配置名
   * @returns
   */
  crypt(name: string) {
    return request.get<INIS.JWT>('/api/toml/crypt', { name })
  }

  /**
   * 修改JWT配置
   * @param key 秘钥
   * @param expire 过期时间(秒)
   * @param issuer 签发者
   * @param subject 主题
   * @returns
   */
  save(key: string, expire: string, issuer: string, subject: string) {
    return request.put<any>('/api/toml/crypt-jwt', { key, expire, issuer, subject })
  }
}

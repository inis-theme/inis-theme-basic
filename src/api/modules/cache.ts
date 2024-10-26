/**
 * 缓存配置
 */
export default class CacheApi {
  /**
   * 获取缓存服务配置
   * @param name 获取指定配置（redis、file、ram）
   * @returns
   */
  cache(name: string) {
    return request.get<any>('/api/toml/cache', { name })
  }

  /**
   * 测试Redis连接
   * @param host 主机地址
   * @param database 数据库
   * @param port 端口
   * @param password 密码，无密码为空即可
   * @returns
   */
  testRedis(host: string, database: number, port: number, password: string) {
    return request.post<any>('/api/toml/test-redis', { host, database, port, password })
  }

  /**
   * 修改缓存默认服务类型
   * @param value 目前只允许是redis、file、ram
   * @param open 是否开启缓存，0、1、true、false 皆可
   * @returns
   */
  default(value: string, open: string | boolean) {
    return request.put<any>('/api/toml/cache-default', { value, open }, true)
  }

  /**
   * 修改Redis缓存配置
   * @param host 主机地址
   * @param database 数据库
   * @param port 端口
   * @param password 密码，无密码为空即可
   * @param prefix 前缀
   * @param expire 过期时间
   * @returns
   */
  redis(
    host: string,
    database: number,
    port: number,
    password: string,
    prefix?: string,
    expire?: string
  ) {
    return request.put<any>(
      '/api/toml/cache-redis',
      { host, database, port, password, prefix, expire },
      true
    )
  }

  /**
   * 修改文件缓存配置
   * @param path 缓存目录
   * @param prefix 缓存前缀
   * @param expire 过期时间
   * @returns
   */
  file(path?: string, prefix?: string, expire?: string) {
    return request.put<any>('/api/toml/cache-file', { path, prefix, expire }, true)
  }

  /**
   * 修改内存缓存配置
   * @param expire 过期时间
   * @returns
   */
  ram(expire?: string) {
    return request.put<any>('/api/toml/cache-ram', { expire }, true)
  }

  /**
   * 清除缓存
   * @returns
   */
  clear() {
    return request.delete<any>('/api/cache/clear')
  }
}

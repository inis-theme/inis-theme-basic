/**
 * 存储配置
 */
export default class StorageApi {
  /**
   * 获取存储服务配置
   * @param name 获取指定配置（local、oss、cos、kodo）
   * @returns
   */
  storage(name: string) {
    return request.get<any>('/api/toml/storage', { name }, true)
  }

  /**
   * 修改缓存默认服务类型
   * @param value 可选服务类型（local、oss、cos、kodo）
   * @returns
   */
  default(value: string) {
    return request.put<any>('/api/toml/storage-default', { value }, true)
  }

  /**
   * 修改本地存储配置
   * @param domain 域名
   * @param path 存储目录
   * @returns
   */
  local(domain: string, path?: string) {
    return request.put<any>('/api/toml/storage-local', { domain, path }, true)
  }

  /**
   * 测试OSS连接
   * @param access_key_id 阿里云AccessKey ID
   * @param access_key_secret 阿里云AccessKey Secret
   * @param endpoint OSS 外网 Endpoint
   * @param bucket OSS Bucket - 存储桶名称
   * @returns
   */
  testOss(access_key_id: string, access_key_secret: string, endpoint: string, bucket: string) {
    return request.post<any>(
      '/api/toml/test-oss',
      { access_key_id, access_key_secret, endpoint, bucket },
      true
    )
  }

  /**
   * 修改OSS存储配置
   * @param access_key_id 阿里云AccessKey ID
   * @param access_key_secret 阿里云AccessKey Secret
   * @param endpoint OSS 外网 Endpoint
   * @param bucket OSS Bucket - 存储桶名称
   * @param domain OSS 外网域名
   * @param path 存储路径
   * @returns
   */
  oss(
    access_key_id: string,
    access_key_secret: string,
    endpoint: string,
    bucket: string,
    domain?: string,
    path?: string
  ) {
    return request.put<any>(
      '/api/toml/storage-oss',
      { access_key_id, access_key_secret, endpoint, bucket, domain, path },
      true
    )
  }

  /**
   * 测试OSS连接
   * @param secret_id 腾讯云COS SecretId
   * @param secret_key 腾讯云COS SecretKey
   * @param app_id 腾讯云COS AppId
   * @param bucket OSS Bucket - 存储桶名称
   * @param region COS 所在地区，如这里的 ap-guangzhou（广州）
   * @returns
   */
  testCos(secret_id: string, secret_key: string, app_id: string, bucket: string, region: string) {
    return request.post<any>(
      '/api/toml/test-cos',
      { secret_id, secret_key, app_id, bucket, region },
      true
    )
  }

  /**
   * 修改COS存储配置
   * @param secret_id 腾讯云COS SecretId
   * @param secret_key 腾讯云COS SecretKey
   * @param app_id 腾讯云COS AppId
   * @param bucket OSS Bucket - 存储桶名称
   * @param region COS 所在地区，如这里的 ap-guangzhou（广州）
   * @param domain COS 外网域名 - 用于访问 - 不填写则使用默认域名
   * @param path 存储路径
   * @returns
   */
  cos(
    secret_id: string,
    secret_key: string,
    app_id: string,
    bucket: string,
    region: string,
    domain?: string,
    path?: string
  ) {
    return request.put<any>(
      '/api/toml/storage-cos',
      { secret_id, secret_key, app_id, bucket, region, domain, path },
      true
    )
  }

  /**
   * 测试KODO连接
   * @param access_key 七牛云AccessKey
   * @param secret_key 七牛云SecretKey
   * @param bucket OSS Bucket - 存储桶名称
   * @param region 所在地区
   * @returns
   */
  testKodo(access_key: string, secret_key: string, bucket: string, region: string) {
    return request.post<any>(
      '/api/toml/test-kodo',
      { access_key, secret_key, bucket, region },
      true
    )
  }

  /**
   * 修改KODO存储配置
   * @param access_key 七牛云AccessKey
   * @param secret_key 七牛云SecretKey
   * @param bucket OSS Bucket - 存储桶名称
   * @param region 所在地区
   * @param domain 外网域名
   * @returns
   */
  kodo(access_key: string, secret_key: string, bucket: string, region: string, domain: string) {
    return request.put<any>(
      '/api/toml/storage-kodo',
      { access_key, secret_key, bucket, region, domain },
      true
    )
  }
}

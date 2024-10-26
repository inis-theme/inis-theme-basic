/**
 * SMS配置
 */
export default class SmsApi {
  /**
   * 获取SMS服务配置
   * @param name email、aliyun、tencent
   * @returns
   */
  sms(name: string) {
    return request.get<any>('/api/toml/sms', { name }, true)
  }

  /**
   * 修改SMS服务配置
   * @param name email、aliyun、tencent
   * @returns
   */
  service(value: string) {
    return request.put<any>('/api/toml/sms', { value }, true)
  }

  /**
   * 修改SMS驱动配置
   * @param sms SMS驱动，可选（aliyun、tencent）
   * @param email 邮件驱动，可选（email）
   * @param defdrive 默认驱动，可选（email、aliyun、tencent）
   * @returns
   */
  drive(sms?: string, email?: string, defdrive?: string) {
    return request.put<any>('/api/toml/sms-drive', { sms, email, default: defdrive }, true)
  }

  /**
   * 修改邮件服务配置
   * @param host 邮件服务器地址
   * @param port 邮件服务端口
   * @param account 邮件账号
   * @param password 服务密码
   * @param sign_name 邮件签名
   * @param nickname 邮件昵称
   * @returns
   */
  smsEmail(
    host: string,
    port: number,
    account: string,
    password: string,
    sign_name: string,
    nickname?: string
  ) {
    return request.put<any>(
      '/api/toml/sms-email',
      { host, port, account, password, sign_name, nickname },
      true
    )
  }

  /**
   * 发送测试邮件
   * @param host 邮件服务器地址
   * @param port 邮件服务端口
   * @param account 邮件账号
   * @param password 服务密码
   * @param sign_name 邮件签名
   * @param email 接收者邮箱
   * @param nickname 邮件昵称
   * @returns
   */
  testEmail(
    host: string,
    port: number,
    account: string,
    password: string,
    sign_name: string,
    email: string,
    nickname?: string
  ) {
    return request.post<any>(
      '/api/toml/test-sms-email',
      { host, port, account, password, sign_name, email, nickname },
      true
    )
  }

  /**
   * 修改阿里云短信服务配置
   * @param access_key_id 阿里云AccessKey ID
   * @param access_key_secret 阿里云AccessKey Secret
   * @param endpoint 阿里云短信服务endpoint
   * @param sign_name 短信签名
   * @param verify_code 验证码模板
   * @returns
   */
  smsAliyun(
    access_key_id: string,
    access_key_secret: string,
    endpoint: string,
    sign_name: string,
    verify_code: string
  ) {
    return request.put<any>(
      '/api/toml/sms-aliyun',
      { access_key_id, access_key_secret, endpoint, sign_name, verify_code },
      true
    )
  }

  /**
   * 发送阿里云测试短信
   * @param access_key_id 阿里云AccessKey ID
   * @param access_key_secret 阿里云AccessKey Secret
   * @param endpoint 阿里云短信服务endpoint
   * @param sign_name 短信签名
   * @param verify_code 验证码模板
   * @param phone 接收测试信息的手机号
   * @returns
   */
  testAliyun(
    access_key_id: string,
    access_key_secret: string,
    endpoint: string,
    sign_name: string,
    verify_code: string,
    phone: string
  ) {
    return request.post<any>(
      '/api/toml/test-sms-aliyun',
      { access_key_id, access_key_secret, endpoint, sign_name, verify_code, phone },
      true
    )
  }

  /**
   * 修改腾讯云短信服务配置
   * @param secret_id 腾讯云SecretId
   * @param secret_key 腾讯云SecretKey
   * @param endpoint 腾讯云短信服务endpoint
   * @param sms_sdk_app_id 腾讯云短信服务appid
   * @param sign_name 短信签名
   * @param verify_code 验证码模板id
   * @param region 区域
   * @returns
   */
  smsTencent(
    secret_id: string,
    secret_key: string,
    endpoint: string,
    sms_sdk_app_id: string,
    sign_name: string,
    verify_code: string,
    region: string
  ) {
    return request.put<any>(
      '/api/toml/sms-tencent',
      { secret_id, secret_key, endpoint, sms_sdk_app_id, sign_name, verify_code, region },
      true
    )
  }

  /**
   * 发送腾讯云测试短信
   * @param secret_id 腾讯云COS SecretId
   * @param secret_key 腾讯云COS SecretKey
   * @param endpoint 腾讯云短信服务endpoint
   * @param sms_sdk_app_id 腾讯云短信服务appid
   * @param sign_name 短信签名
   * @param verify_code 验证码模板id
   * @param region 区域
   * @param phone 接收测试信息的手机号
   * @returns
   */
  testTencent(
    secret_id: string,
    secret_key: string,
    endpoint: string,
    sms_sdk_app_id: string,
    sign_name: string,
    verify_code: string,
    region: string,
    phone: string
  ) {
    return request.post<any>(
      '/api/toml/test-sms-tencent',
      { secret_id, secret_key, endpoint, sms_sdk_app_id, sign_name, verify_code, region, phone },
      true
    )
  }

  /**
   * 修改短信宝短信服务配置
   * @param account 短信宝账号
   * @param api_key 短信宝API KEY
   * @param base_url 短信宝服务地址
   * @returns
   */
  smsBao(account: string, api_key: string, base_url: string) {
    return request.put<any>('/api/toml/sms-smsbao', { account, api_key, base_url }, true)
  }

  /**
   * 发送短信宝测试短信
   * @param account 短信宝账号
   * @param api_key 短信宝API KEY
   * @param base_url 短信宝服务地址
   * @param phone 目标手机号
   * @returns
   */
  testBao(account: string, api_key: string, base_url: string, phone: string) {
    return request.post<any>(
      '/api/toml/test-sms-smsbao',
      { account, api_key, base_url, phone },
      true
    )
  }
}

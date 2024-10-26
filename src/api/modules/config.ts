/**
 * 配置API
 */
export default class ConfigApi {
  /**
   * 获取指定配置
   * @param key 配置键
   * @returns
   */
  one<T>(key: string) {
    return request.get<INIS.Config<T>>('api/config/one', { key })
  }

  /**
   * 获取配置列表
   * @returns
   */
  list() {
    return request.get<INIS.Config<any>[]>('api/config/list', undefined, true)
  }

  /**
   * ## 保存配置
   * ---
   * @param key 配置键 存在则更新，不存在则新建
   * @param value 配置值
   * @param json 配置json
   * @param text 文本数据
   * @param remark 备注
   */
  save(params?: any) {
    return request.post<INIS.Id>('api/config/save', params, true)
  }
}

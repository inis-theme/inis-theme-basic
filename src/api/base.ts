export default class BaseApi<T> {
  private readonly apiPrefix: string

  constructor(apiUrlPrefix: string) {
    this.apiPrefix = '/api/' + apiUrlPrefix
  }

  /**
   * 获取单条数据
   */
  one(params?: any) {
    return request.get<T>(`${this.apiPrefix}/one`, params)
  }

  /**
   * 随机获取
   */
  rand(params?: any) {
    return request.get<T[]>(`${this.apiPrefix}/rand`, params)
  }

  /**
   * 求和
   */
  sum(params?: any) {
    return request.get<T>(`${this.apiPrefix}/sum`, params)
  }

  /**
   * 最小值
   */
  min(params?: any) {
    return request.get<T>(`${this.apiPrefix}/min`, params)
  }

  /**
   * 最大值
   */
  max(params?: any) {
    return request.get<T>(`${this.apiPrefix}/max`, params)
  }

  /**
   * 批量查询
   */
  all(params?: any) {
    return request.get<INIS.IPageList<T>>(`${this.apiPrefix}/all`, params)
  }

  /**
   * 获取全部
   */
  column(params?: any) {
    return request.get<T[]>(`${this.apiPrefix}/column`, params)
  }

  /**
   * 树形结构
   */
  tree<D>(params?: any) {
    return request.get<D[]>(`${this.apiPrefix}/tree`, params)
  }

  /**
   * 统计数据
   */
  count() {
    return request.get<number>(`${this.apiPrefix}/count`)
  }

  /**
   * 创建数据
   */
  create = (params: any) => {
    return request.post<INIS.Id>(`${this.apiPrefix}/create`, params, true)
  }

  /**
   * 更新数据
   */
  update = (params: any) => {
    return request.put<INIS.Id>(`${this.apiPrefix}/update`, params, true)
  }

  /**
   * 保存数据
   */
  save = (params: any) => {
    return request.post<INIS.Id>(`${this.apiPrefix}/save`, params, true)
  }

  /**
     * 软删除
     * @param ids 待删除数据id列表
  
     */
  remove = (ids: number[]) => {
    return request.delete<INIS.Ids>(`${this.apiPrefix}/remove`, { ids }, true)
  }

  /**
     * 彻底删除
     * @param ids 待删除数据id列表
  
     */
  delete = async (ids: number[]) => {
    return request.delete<INIS.Ids>(`${this.apiPrefix}/delete`, { ids }, true)
  }

  /**
     * 清空回收站
  
     */
  clear = async () => {
    return request.delete<INIS.Ids>(`${this.apiPrefix}/clear`, undefined, true)
  }

  /**
     * 恢复数据
     * @param ids 待恢复数据id列表
  
     */
  restore = async (ids: number[]) => {
    return request.put<INIS.Ids>(`${this.apiPrefix}/restore`, { ids }, true)
  }
}

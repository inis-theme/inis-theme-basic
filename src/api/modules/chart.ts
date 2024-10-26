/**
 * 图表API
 */
export default class ChartApi {
  /**
   * 统计
   * @returns
   */
  count() {
    return request.get<INIS.Chart>('/api/chart/count')
  }
  /**
   * 用户参与度
   * @returns
   */
  participate(uid: number | string) {
    return request.get<INIS.Participate>('/api/chart/user-participate', { uid })
  }
}

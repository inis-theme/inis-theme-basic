import BaseApi from '../base'

export default class ExpApi extends BaseApi<INIS.Exp> {
  active(params?: any) {
    return request.get<INIS.User[]>(`/api/exp/active`, params)
  }

  like(params?: any) {
    return request.post<any>(`/api/exp/like`, params, true)
  }

  collect(params?: any) {
    return request.post<any>(`/api/exp/collect`, params, true)
  }

  share(params?: any) {
    return request.post<any>(`/api/exp/share`, params, true)
  }

  checkIn() {
    return request.post<any>(`/api/exp/check-in`, null, true)
  }
}

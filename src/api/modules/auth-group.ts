import BaseApi from '../base'

export default class AuthGroupApi extends BaseApi<INIS.AuthGroup> {
  uids(params?: any) {
    return request.put<any>(`/api/auth-group/uids`, params, true)
  }
}

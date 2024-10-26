import BaseApi from '../base'

export default class CommentApi extends BaseApi<INIS.Comment> {
  flat(params?: any) {
    return request.get<INIS.IPageList<INIS.Comment>>(`/api/comment/flat`, params)
  }
}

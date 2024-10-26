import BaseApi from './base'
import ExpApi from './modules/exp'
import DevApi from './modules/dev'
import JwtApi from './modules/jwt'
import SmsApi from './modules/sms'
import FileApi from './modules/file'
import INISApi from './modules/inis'
import CommApi from './modules/comm'
import ChartApi from './modules/chart'
import CacheApi from './modules/cache'
import ConfigApi from './modules/config'
import DeviceApi from './modules/device'
import CommentApi from './modules/comment'
import StorageApi from './modules/storage'
import AuthGroupApi from './modules/auth-group'

class TagsApi extends BaseApi<INIS.Tags> {}
class AlbumApi extends BaseApi<INIS.Album> {}
class LevelApi extends BaseApi<INIS.Level> {}
class LinksApi extends BaseApi<INIS.Links> {}
class PagesApi extends BaseApi<INIS.Pages> {}
class UsersApi extends BaseApi<INIS.User> {}
class BannerApi extends BaseApi<INIS.Banner> {}
class ArtileApi extends BaseApi<INIS.Article> {}
class PlacardApi extends BaseApi<INIS.Placard> {}
class ApiKeysApi extends BaseApi<INIS.ApiKeys> {}
class IpBlackApi extends BaseApi<INIS.IpBlack> {}
class QpsWarnApi extends BaseApi<INIS.QpsWarn> {}
class AuthPagesApi extends BaseApi<INIS.AuthPages> {}
class AuthRulesApi extends BaseApi<INIS.AuthRules> {}
class AlbumGroupApi extends BaseApi<INIS.AlbumGroup> {}
class LinksGroupApi extends BaseApi<INIS.LinksGroup> {}
class ArtileGroupApi extends BaseApi<INIS.ArticleGroup> {}

export const useDevApi = new (Helper.comm.singleton(DevApi))()
export const useSmsApi = new (Helper.comm.singleton(SmsApi))()
export const useJwtApi = new (Helper.comm.singleton(JwtApi))()
export const useFileApi = new (Helper.comm.singleton(FileApi))()
export const useCommApi = new (Helper.comm.singleton(CommApi))()
export const useCacheApi = new (Helper.comm.singleton(CacheApi))()
export const useINISApi = new (Helper.comm.singleton(INISApi))()
export const useChartApi = new (Helper.comm.singleton(ChartApi))()
export const useConfigApi = new (Helper.comm.singleton(ConfigApi))()
export const useDeviceApi = new (Helper.comm.singleton(DeviceApi))()
export const useStorageApi = new (Helper.comm.singleton(StorageApi))()
export const useExpApi = new (Helper.comm.singleton(ExpApi))('exp')
export const useTagsApi = new (Helper.comm.singleton(TagsApi))('tags')
export const useAlbumApi = new (Helper.comm.singleton(AlbumApi))('album')
export const useLinksApi = new (Helper.comm.singleton(LinksApi))('links')
export const useLevelApi = new (Helper.comm.singleton(LevelApi))('level')
export const usePagesApi = new (Helper.comm.singleton(PagesApi))('pages')
export const useUsersApi = new (Helper.comm.singleton(UsersApi))('users')
export const useBannerApi = new (Helper.comm.singleton(BannerApi))('banner')
export const useArticleApi = new (Helper.comm.singleton(ArtileApi))('article')
export const usePlacardApi = new (Helper.comm.singleton(PlacardApi))('placard')
export const useCommentApi = new (Helper.comm.singleton(CommentApi))('comment')
export const useIpBlackApi = new (Helper.comm.singleton(IpBlackApi))('ip-black')
export const useQpsWarnApi = new (Helper.comm.singleton(QpsWarnApi))('qps-warn')
export const useApiKeysApi = new (Helper.comm.singleton(ApiKeysApi))('api-keys')
export const useAuthPagesApi = new (Helper.comm.singleton(AuthPagesApi))('auth-pages')
export const useAuthGroupApi = new (Helper.comm.singleton(AuthGroupApi))('auth-group')
export const useAuthRulesApi = new (Helper.comm.singleton(AuthRulesApi))('auth-rules')
export const useLinksGroupApi = new (Helper.comm.singleton(LinksGroupApi))('links-group')
export const useAlbumGroupApi = new (Helper.comm.singleton(AlbumGroupApi))('album-group')
export const useArticleGroupApi = new (Helper.comm.singleton(ArtileGroupApi))('article-group')

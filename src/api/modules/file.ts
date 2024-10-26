import type { AxiosProgressEvent } from 'axios'

/**
 * 文件API
 */
export default class FileApi {
  /**
   * 上传
   * @param file 文件对象
   * @param path 文件路径
   * @param name 文件名
   * @returns
   */
  upload(
    file: File,
    path?: string,
    name?: string,
    handleUpload?: (progressEvent: AxiosProgressEvent) => void
  ) {
    const formData = new FormData()
    formData.append('file', file)
    path && formData.append('path', path)
    name && formData.append('name', name)
    return request.upload<{ path: string }>('api/file/upload', formData, true, handleUpload)
  }

  /**
   * 网图转base64
   * @param url 网图URL
   * @returns
   */
  base64(url: string) {
    return request.post<string>('api/file/to-base64', { url })
  }

  /**
   * 表情包
   * @returns
   */
  emoji() {
    return request.get<INIS.Emoji>('/api/file/emoji')
  }
}

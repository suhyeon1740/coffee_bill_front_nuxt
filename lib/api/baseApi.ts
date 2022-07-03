import { CancelTokenSource } from 'axios'
import { Rest } from './rest'

/**
 * BaseApi
 */
export class BaseApi {
  /**
   * 취소 요청을 위한 토큰을 반환한다.
   * @return {CancelTokenSource} 취소 요청을 위한 토큰
   */
  public static cancelToken(): CancelTokenSource {
    return Rest.cancelToken()
  }

  /**
   * API 요청을 취소한다.
   * @param {CancelTokenSource} cancelToken
   */
  public static cancel(cancelToken: CancelTokenSource): void {
    cancelToken.cancel()
  }
}

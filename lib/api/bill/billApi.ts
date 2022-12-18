import { AxiosResponse, CancelTokenSource } from 'axios'
import { Rest, RestUrl } from '../rest'
import { BaseApi } from '../baseApi'
import { BillResVo, BillsResVo } from '~/lib/api/bill/billApiResVo'

/**
 * bill 관련 API
 */
export default class BillApi extends BaseApi {
  public static getBills(cancelToken: CancelTokenSource): Promise<BillsResVo> {
    return new Promise((resolve, reject) => {
      const url = RestUrl.Bills

      Rest.get(url(), cancelToken)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((response: AxiosResponse) => {
          resolve(BillsResVo.from(response.data))
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  public static getBill(billSeq: number, cancelToken: CancelTokenSource): Promise<BillResVo> {
    return new Promise((resolve, reject) => {
      const url = RestUrl.Bill

      Rest.get(url(billSeq), cancelToken)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((response: AxiosResponse) => {
          resolve(BillResVo.from(response.data[0]))
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

    public static createBill(data: any, cancelToken: CancelTokenSource): Promise<BillResVo> {
    return new Promise((resolve, reject) => {
      const url = RestUrl.Bills

      Rest.post(url(), data, cancelToken)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((response: AxiosResponse) => {
          console.log('billApi, createBill response.data', response.data)
          resolve(BillResVo.from(response.data))
        })
        .catch((error) => {
          reject(error)
        })
    })
  }


}

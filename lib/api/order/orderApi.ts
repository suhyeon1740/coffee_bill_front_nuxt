import { AxiosResponse, CancelTokenSource } from 'axios'
import { Rest, RestUrl } from '../rest'
import { BaseApi } from '../baseApi'
import { OrdersResVo } from '~/lib/api/order/orderApiResVo'

/**
 * order 관련 API
 */
export default class OrderApi extends BaseApi {
  public static getOrders(billSeq: number, cancelToken: CancelTokenSource): Promise<OrdersResVo> {
    return new Promise((resolve, reject) => {
      const url = RestUrl.Orders

      Rest.get(url(billSeq), cancelToken)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((response: AxiosResponse) => {
          console.log('OrderApi.. response', response)
          resolve(OrdersResVo.from(response.data))
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // public static getBill(seq: number, cancelToken: CancelTokenSource): Promise<BillResVo> {
  //   return new Promise((resolve, reject) => {
  //     const url = RestUrl.Bill

  //     Rest.get(url(seq), cancelToken)
  //       // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //       .then((response: AxiosResponse) => {
  //         console.log('getBill response.data', response.data)
  //         resolve(BillResVo.from(response.data[0]))
  //       })
  //       .catch((error) => {
  //         reject(error)
  //       })
  //   })
  // }


}

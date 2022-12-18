export class OrderResVo {
  drinkSeq!: number
  drinkName?: string
  drinkType?: number
  optionDescription?: string
  drinkTypeLabel?: string


  public static from(item: any): OrderResVo {
    const order = new OrderResVo()
    order.drinkSeq = item.drinkSeq
    order.drinkName = item.drinkName
    order.drinkType = item.drinkType
    order.optionDescription = item.optionDescription
    order.drinkTypeLabel = item.drinkType === 0 ? 'HOT' : 'ICE' 
    return order
  }
}

export class OrdersResVo {
  public orders: OrderResVo[] = []

  public static from(data: any): OrdersResVo {
    const ordersResVo = new OrdersResVo()
    ordersResVo.orders = data.map((item: any) => {
      return OrderResVo.from(item)
    })
    return ordersResVo
  }
}

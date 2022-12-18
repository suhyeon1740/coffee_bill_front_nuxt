export class BillResVo {
  seq!: number
  status?: number
  name?: string
  description?: string
  userId?: number
  endTime?: string


  public static from(item: any): BillResVo {
    const bill = new BillResVo()
    bill.seq = item.seq
    bill.status = item.status
    bill.name = item.name
    bill.description = item.description
    bill.userId = item.userId
    bill.endTime = item.endTime
    return bill
  }
}

export class BillsResVo {
  public bills: BillResVo[] = []

  public static from(data: any): BillsResVo {
    const billsResVo = new BillsResVo()
    billsResVo.bills = data.map((item: any) => {
      return BillResVo.from(item)
    })
    return billsResVo
  }
}

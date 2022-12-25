<template>
  <div class="flex flex-col flex-1">
    <header>{{ billInfo?.name }}</header>
    <p class="sub-title">{{ billInfo?.description }}</p>
    <list-button></list-button>
    <div class="body-container">
      <div class="text-right">
        <button class="bg-gray-300 text-white" @click.stop="finishBill">
          주문마감
        </button>
        <button class="bg-primary text-white" @click.stop="addOrder">
          추가
        </button>
      </div>
      <div class="mt-8px">
        <h3 class="mb-4px font-medium">
          총 <strong>{{ orders?.length }}잔</strong>
        </h3>
        <ul class="text-12px h-[450px] md:h-[300px] overflow-y-auto">
          <li
            v-for="(order, index) in orders"
            :key="index"
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer"
          >
            <div class="flex items-center">
              <span class="flex-1">{{ order.drinkName }}</span>
              <span
                class="type-badge mr-4px"
                :class="[
                  { 'bg-blue-500': order.drinkType === 1 },
                  { 'bg-red-500': order.drinkType === 0 }
                ]"
                >{{ order.drinkTypeLabel }}</span
              >
            </div>
            <div class="text-[10px] text-gray-500">
              {{ order.optionDescription }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import BillApi from '~/lib/api/bill/billApi'
import OrderApi from '~/lib/api/order/orderApi'
import ApiComponent from '~/lib/ApiComponent.vue'
import { BaseBillVo, BaseOrderVo } from '~/models/baseBillVo'

@Component
export default class Detail extends mixins(ApiComponent) {
  // billSeq
  private billSeq: number = parseInt(this.$route.params.seq)

  public billInfo?: BaseBillVo = {}
  public orders?: BaseOrderVo[] = []

  async created() {
    await Promise.all([this.fetchBill(), this.fetchOrders()])
  }

  async fetchBill() {
    try {
      const response = await BillApi.getBill(this.billSeq, this.cancelToken)
      this.billInfo = response
    } catch (e) {
      // alert(e)
      console.error(e)
    }
  }

  async fetchOrders() {
    try {
      const response = await OrderApi.getOrders(this.billSeq, this.cancelToken)
      this.orders = response.orders
    } catch (e) {
      // alert(e)
      console.error(e)
    }
  }

  addOrder() {
    // TODO: addOrder 모달 --> 새 페이지 이동
    this.$router.push({ name: 'bills-seq-create' })
  }

  async finishBill() {
    try {
      // TODO: 주문 마감 api

      // TODO: alert 창 : 주문이 완료 되었습니다.
      await this.$router.push({ name: 'bills' })
    } catch (e) {}
  }
}
</script>

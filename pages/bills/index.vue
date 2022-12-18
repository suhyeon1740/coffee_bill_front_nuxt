<template>
  <div class="flex flex-col flex-1">
    <header>COFFEE BILL</header>
    <div class="body-container">
      <div class="text-right">
        <button class="bg-primary text-white" @click.stop="createBill">
          새 주문서
        </button>
      </div>
      <div class="mt-8px">
        <h3 class="mb-4px font-medium">주문서 목록</h3>
        <ul class="text-12px h-[450px] md:h-[300px] overflow-y-auto">
          <li
            v-for="(bill, index) in bills"
            :key="index"
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer"
            @click.stop="onClickBill(bill.seq)"
          >
            {{ bill.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import ApiComponent from '~/lib/ApiComponent.vue'
import BillApi from '~/lib/api/bill/billApi'
import { BaseBillVo } from '~/models/baseBillVo'

@Component
export default class Bills extends mixins(ApiComponent) {
  // TODO: priavate? public?
  public bills: BaseBillVo[] = []

  async created() {
    await this.fetchBills()
  }

  async fetchBills() {
    try {
      const response = await BillApi.getBills(this.cancelToken)
      this.bills = response.bills
    } catch (e) {
      alert(e)
      console.error(e)
    }
  }

  async createBill() {
    await this.$router.push({ name: 'bills-create' })
  }

  async onClickBill(seq: number) {
    await this.$router.push({
      name: 'bills-seq-detail',
      params: { seq: JSON.stringify(seq) }
    })
  }
}
</script>

<template>
  <div class="flex flex-col flex-1">
    <header>주문서 생성</header>
    <list-button></list-button>
    <div class="body-container flex-1">
      <div class="flex flex-col mb-16px mt-8px">
        <label>주문서 이름</label>
        <input
          v-model="orderName"
          type="text"
          placeholder="주문서 이름을 입력 해 주세요."
        />
      </div>
      <div class="flex flex-col mb-16px">
        <label>설명</label>
        <input
          v-model="description"
          type="text"
          placeholder="설명을 입력 해 주세요."
        />
      </div>
    </div>
    <footer class="flex justify-end">
      <button class="bg-primary text-white border-0" @click="createBill">
        주문서 생성
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import BillApi from '~/lib/api/bill/billApi'
import ApiComponent from '~/lib/ApiComponent.vue'

@Component
export default class BillCreate extends mixins(ApiComponent) {
  public orderName?: string
  public description?: string

  async createBill() {
    try {
      // TODO: validation
      // TODO: 주문서 생성 api 작성

      const data = {
        orderName: this.orderName,
        description: this.description,
        userId: 1 // TODO: 유저정보 보내기
      }

      const response = await BillApi.createBill(data, this.cancelToken)

      const billSeq = response.seq
      await this.$router.push({
        name: 'bills-seq-detail',
        params: { seq: JSON.stringify(billSeq) }
      })
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

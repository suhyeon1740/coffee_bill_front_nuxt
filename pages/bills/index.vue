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
        <ul class="text-12px h-[170px] overflow-y-auto">
          <li
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer"
            @click.stop="onClickBill"
          >
            개발팀 커피타임
          </li>
          <li class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer">
            디자인팀 커피타임
          </li>
          <li class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer">
            사업팀 커피타임
          </li>
          <li class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer">
            전체 커피타임
          </li>
          <li class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer">
            전체 커피타임
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import ApiComponent from '~/lib/ApiComponent.vue'

@Component
export default class Bills extends mixins(ApiComponent) {
  private billSeq: number = 1
  async createBill() {
    await this.$router.push({ name: 'bills-create' })
  }

  async onClickBill() {
    await this.$router.push({
      name: 'bills-seq-detail',
      params: { seq: JSON.stringify(this.billSeq) },
    })
  }
}
</script>

<template>
  <div class="flex flex-col flex-1">
    <header>개발팀 커피 타임</header>
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
        <h3 class="mb-4px font-medium">총 <strong>8잔</strong></h3>
        <ul class="text-12px h-[170px] overflow-y-auto">
          <li
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer flex items-center"
          >
            <span class="flex-1">아메리카노</span>
            <span class="type-badge bg-blue-500 mr-4px">ICE</span>
            <span class="number-badge">5</span>
          </li>
          <li
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer flex items-center"
          >
            <span class="flex-1">아메리카노</span>
            <span class="type-badge bg-red-500 mr-4px">HOT</span>
            <span class="number-badge">1</span>
          </li>
          <li
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer flex items-center"
          >
            <span class="flex-1">바닐라 라떼</span>
            <span class="type-badge bg-blue-500 mr-4px">ICE</span>
            <span class="number-badge">2</span>
          </li>
          <li
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer flex items-center"
          >
            <span class="flex-1">바닐라 라떼</span>
            <span class="type-badge bg-blue-500 mr-4px">ICE</span>
            <span class="number-badge">2</span>
          </li>
          <li
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer flex items-center"
          >
            <span class="flex-1">바닐라 라떼</span>
            <span class="type-badge bg-blue-500 mr-4px">ICE</span>
            <span class="number-badge">2</span>
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
  addOrder() {
    // TODO: addOrder 모달
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

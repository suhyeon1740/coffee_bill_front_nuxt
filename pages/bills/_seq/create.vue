<template>
  <div class="flex flex-col flex-1">
    <header>음료 추가하기</header>
    <p class="sub-title">주문서명 : 개발팀 커피 타임</p>

    <div class="body-container">
      <div class="mt-8px">
        <input v-model="keyword" type="text" @keyup.enter="onSearch" />
        <button class="bg-primary text-white" @click.stop="onSearch">
          검색
        </button>
      </div>
      <div class="mt-8px">
        <ul
          v-if="list.length === 0 && searchMode"
          class="text-center bg-blue-100 p-8px rounded-[8px]"
        >
          <p class="text-12px">검색결과가 없습니다.</p>
          <div class="">
            '{{ searchedKeyword }}' 음료
            <button class="bg-primary text-white" @click.stop="addDrink">
              추가하기
            </button>
          </div>
        </ul>
        <ul class="text-12px h-[450px] md:h-[300px] overflow-y-auto">
          <li
            v-for="(item, index) in list"
            :key="index"
            class="bg-gray-50 rounded-[8px] p-8px mb-4px cursor-pointer flex items-center"
          >
            <span class="flex-1">{{ item.drinkName }}</span>
            <button
              class="bg-primary text-white"
              @click.stop="onSelect(item.seq)"
            >
              선택
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import ApiComponent from '~/lib/ApiComponent.vue'
import DrinkTypeDialog from '~/components/dialog/DrinkTypeDialog.vue'

type DrinkItem = {
  seq: number
  drinkName: String
}

@Component
export default class Create extends mixins(ApiComponent) {
  public list?: DrinkItem[] = []
  private keyword: string = ''
  private searchedKeyword: string = ''
  private searchMode: boolean = false
  private totalList: DrinkItem[] = [
    {
      seq: 1,
      drinkName: '아메리카노'
    },
    {
      seq: 2,
      drinkName: '라떼'
    },
    {
      seq: 3,
      drinkName: '초코라떼'
    },
    {
      seq: 4,
      drinkName: '카페라떼'
    }
  ]

  created() {
    this.initList()
  }

  onSearch() {
    this.searchMode = true
    if (this.keyword === '') {
      this.initList()
      this.searchMode = false
    } else {
      this.list = this.totalList?.filter((item) =>
        item.drinkName.includes(this.keyword)
      )
      this.searchedKeyword = this.keyword
    }
  }

  initList() {
    this.list = this.totalList
  }

  onSelect(seq: number) {
    // console.log(seq)
    // TODO: 선택한 항목 추가
    // TODO: 선택한 항목 HOT, ICE 옵션 추가 dialog
    // eslint-disable-next-line no-new
    new DrinkTypeDialog({
      parent: this,
      propsData: {
        onSelectDrinkType: (instance: DrinkTypeDialog, type: string) => {
          alert(type)
          console.log(type)
          instance.dismiss()
        }
      }
    }).show()
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

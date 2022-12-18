<template>
  <transition name="modal-fade">
    <dialog-template title="음료 타입 선택" @on-click-close="dismiss">
      <template slot="body">
        <div class="justify-center">
          <button class="bg-secondary-red text-white" @click.stop="onSelectType('HOT')">
            HOT
          </button>
          <button class="bg-primary text-white" @click.stop="onSelectType('ICE')">
            ICE
          </button>
        </div>
      </template>

      <template slot="footer">
        <div></div>
      </template>
    </dialog-template>
  </transition>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import Dialog from '~/modules/dialog'

// eslint-disable-next-line no-use-before-define
export type selectHandler = (instance: DrinkTypeDialog, type: string) => void

export default class DrinkTypeDialog extends mixins(Dialog) {

  /** 음료 타입을 선택하고 난 뒤 실행할 함수 */
  // @Prop({ type: Function, required: false }) onSelectDrinkType?: any

  // @Prop()
  // private onSelectDrinkType?: any

  @Prop({ type: Function, default: () => {} }) onSelectDrinkType!: selectHandler;

  onSelectType(type: string) {
    alert(type)
    // TODO: 음료 타입 넘겨서 create.vue 에서 음료주문 넣는 api 호출
    this.onSelectDrinkType!(this, type)
  }
}
</script>

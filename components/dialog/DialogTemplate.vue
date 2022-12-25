<template>
  <div
    class="dialog-wrapper flex justify-center items-center"
    @keyup="onKeyUp"
    @click="onClickDialogBackground"
  >
    <div
      class="dialog-container p-20px bg-white rounded-[8px] min-w-[200px]"
      :class="dialogClassName"
    >
      <header
        v-if="!$slots['header']"
        class="flex justify-between font-bold text-[18px]"
      >
        <span>{{ title }}</span>
        <button
          v-if="showCloseButton"
          class="cursor-pointer"
          @click.prevent.stop="$emit('on-click-close')"
        >
          <!--          <i class="ki-x text-20px text-black-01"></i>-->
          <!--           Close-->
        </button>
      </header>
      <header v-else>
        <slot name="header"></slot>
      </header>

      <section v-if="!$slots['body']">
        <!-- eslint-disable vue/no-v-html -->
        <div v-if="htmlContent" v-html="htmlContent"></div>
        <!-- eslint-enable -->
        <div v-else>
          {{ content }}
        </div>
      </section>
      <section v-else>
        <slot name="body"></slot>
      </section>

      <footer v-if="!$slots['footer']" class="flex justify-end mt-20px">
        <button
          v-if="negativeButtonText"
          class="manage-button button-white mr-10px"
          @click.stop="$emit('on-click-negative')"
        >
          <span>{{ negativeButtonText }}</span>
        </button>
        <button
          class="manage-button button-primary"
          :class="{ 'button-red': redButton }"
          @click.stop="$emit('on-click-positive')"
        >
          <span>{{ positiveButtonText }}</span>
        </button>
      </footer>
      <footer v-else>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class DialogTemplate extends Vue {
  private name: String = 'DialogTemplate'
  @Prop({ type: String, required: false }) private dialogName?: string =
    'default'

  @Prop({ type: String, required: false, default: '알림' })
  private title?: string

  @Prop({ type: Boolean, required: false, default: true })
  private showCloseButton?: boolean

  @Prop({ type: String, required: false }) private htmlContent?: string
  @Prop({ type: String, required: false }) private content?: string
  @Prop({ type: String, required: false }) private negativeButtonText?: string
  @Prop({ type: String, required: false, default: '확인' })
  private positiveButtonText?: string

  @Prop({ type: Boolean, required: false, default: false })
  private redButton?: boolean

  @Prop({ type: Boolean, required: false, default: true })
  private cancelable?: boolean

  /**
   * dialog 네임을 기반으로 dialog 고유의 클래스명을 반환한다.
   * 예) image-upload-dialog-container 반환
   */
  get dialogClassName(): string {
    return this.dialogName + '-dialog-container'
  }

  created() {
    this.$nuxt.$on('dialog_close', this.close)
  }

  close() {
    this.$nuxt.$off('dialog_close')
    this.$el.remove()
  }

  /**
   * 모달의 백그라운드를 클릭했을때 이벤트
   */
  onClickDialogBackground(event: any) {
    const isBackground = event.target.className.includes('dialog-wrapper')
    if (this.cancelable && isBackground) {
      this.close()
    }
  }

  /**
   * 키 이벤트를 처리한다.
   */
  onKeyUp(event: any) {
    if (this.cancelable) {
      if (event.key === 'Escape') {
        this.close()
      }
    }
  }
}
</script>

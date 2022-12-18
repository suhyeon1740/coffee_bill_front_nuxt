import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

/**
 * 다이얼로그
 */
@Component
export default class Dialog extends Vue {
  /**
   * 다이얼로그의 취소 기능 여부<br/>
   * true 라면 다이얼로그를 취소 할 수 있다.
   */
  @Prop({ type: Boolean, default: true }) cancelable!: boolean

  /**
   * 다이얼로그 z-index
   * @private
   */
  private zIndex: number = 1000

  /**
   * 다이얼로그를 보여준다.
   */
  public show(): void {
    this.$mount()

    // this.zIndex +=
    //   document.querySelectorAll('.modal-wrapper').length + document.querySelectorAll('.site-modal-wrapper').length
    // @ts-ignore
    this.$el.style.zIndex = this.zIndex

    document.body.appendChild(this.$el)
    document.addEventListener('keyup', this.onKeyUp)
    console.log('onkeyup')
  }

  /**
   * 다이얼로그를 사라지게 한다.
   */
  public dismiss(): void {
    document.removeEventListener('keyup', this.onKeyUp)
    this.$el.remove()
  }

  /**
   * 키 이벤트를 처리한다.
   * @param {KeyboardEvent} event
   */
  public onKeyUp(event: KeyboardEvent): void {
    event.stopPropagation()
    if (this.cancelable) {
      if (event.key === 'Escape') {
        this.dismiss()
      }
    }
  }
}

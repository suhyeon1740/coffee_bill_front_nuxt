/**
 * 주문서 기본 타입 정의
 */

export class BaseBillVo {
	/** 주문서 고유 식별 값 */
	public seq?: number
	
	/** 주문서 상태 값 */
	public status?: number

	/** 주문서 이름 */
	public name?: string
	
	/** 주문서 상세설명 */
	public description?: string
	
	/** 주문자 식별 id 값 */
	public userId?: number
	
	/** 주문서 마감 시간 */
	public endTime?: string
}

/**
 * 주문 기본 타입 정의
*/

export class BaseOrderVo {
	/** 음료 고유 식별 값 */
	public drinkSeq?: number

	/** 음료 이름 */
	public drinkName?: string
	
	/** 음료 유형 (0: hot, 1: ice) */
	public drinkType?: number
	
	/** 추가 옵션  */
	public optionDescription?: string

	/** Hot 타입 음료인지 아닌지 */
	public drinkTypeLabel?: string
}
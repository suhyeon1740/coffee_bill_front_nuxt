<template>
  <div class="flex flex-col flex-1">
    <header>회원가입</header>
    <div class="body-container flex-1">
      <div class="flex flex-col mb-16px">
        <label>닉네임</label>
        <input
          v-model="nickname"
          type="text"
          placeholder="닉네임을 입력 해 주세요."
        />
      </div>
      <div class="flex flex-col mb-16px">
        <label>비밀번호</label>
        <input
          v-model="password"
          type="password"
          placeholder="비밀번호를 입력 해 주세요."
        />
      </div>
    </div>
    <footer class="flex justify-end">
      <button class="bg-primary text-white" @click.stop="onSignup">
        회원가입
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import ApiComponent from '~/lib/ApiComponent.vue'
import AuthApi from '~/lib/api/auth/authApi'

@Component
export default class Login extends mixins(ApiComponent) {
  private nickname: string = ''
  private password: string = ''

  async onSignup() {
    try {
      const response = await AuthApi.signup(
        this.nickname,
        this.password,
        this.cancelToken
      )
      console.log('onSignup response', response)

      // TODO: 회원가입이 완료되었습니다. 토스트? custom alert? system alert?

      await this.$router.push({ name: 'auth-login' })
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped></style>

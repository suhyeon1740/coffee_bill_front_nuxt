<template>
  <div class="flex flex-col flex-1">
    <header>로그인</header>
    <div class="body-container flex-1">
      <div class="flex flex-col mb-16px">
        <label>닉네임</label>
        <input type="text" placeholder="닉네임을 입력 해 주세요." />
      </div>
      <div class="flex flex-col mb-16px">
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력 해 주세요." />
      </div>
    </div>
    <footer class="flex justify-between">
      <button class="bg-primary text-white">로그인</button>
      <button class="bg-white text-primary border-0">회원가입</button>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
})
</script>

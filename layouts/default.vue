<template>
  <div class="bg-gray-100 h-[100vh] flex justify-center items-center">
    <span class="text-[50px] absolute top-[30px] md:top-[50px] z-10">☕</span>
    <div
      class="bg-white w-full h-full md:max-w-[400px] md:h-[500px] rounded-[8px] drop-shadow px-30px pt-[120px] pb-[30px] md:pt-30px flex"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped></style>

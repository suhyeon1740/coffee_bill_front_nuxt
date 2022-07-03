<template>
  <div>signup</div>
</template>

<script>
import Component, { mixins } from 'vue-class-component'
import ApiComponent from '~/lib/ApiComponent'

@Component
export default class Signup extends mixins(ApiComponent) {}
</script>

<style scoped></style>

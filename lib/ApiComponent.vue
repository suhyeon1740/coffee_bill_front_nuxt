<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { BaseApi } from './api/baseApi'

@Component
export default class ApiComponent extends Vue {
  protected cancelToken = BaseApi.cancelToken()

  beforeDestroy() {
    this.cancelToken.cancel()
  }
}
</script>

<template>
  <div>
    <!-- <app-header v-bind:프롭스속성이름="상위컴포넌트이름"/> -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr">
    </app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data: function() {
    return {
      str: 'hi'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'Re Hi ~'
    }
  }
}
</script>

<style>

</style>


<style scoped>

</style>

<template>
  <head-sec />
<router-view :php_amount="php_amount"></router-view>
<foot-sec />
</template>

<script>
  import header from './components/header.vue'
  import footer from './components/footer.vue'
export default {
  components:{
    'head-sec':header,
    'foot-sec':footer
  },
  data() {
    return {
      php_amount:355,
    }
  },
}
</script>
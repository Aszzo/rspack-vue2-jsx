<template>
  <div>
    template component
    {{ msg }}
    <hello-jsx1 />
    <hello-jsx2 />
  </div>
</template>

<script>
import HelloJsx1 from './HelloJsx1.vue';
import HelloJsx2 from './HelloJsx1.vue';
export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  components: {
    HelloJsx1,
    HelloJsx2
  }
}
</script>
<style lang="css">
div {
  color: #999;
}
</style>

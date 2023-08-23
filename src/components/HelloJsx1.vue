<script lang="jsx">
export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  render() {
    return (
        <div>
          jsx1
          {this.msg}
        </div>
    )
  }
}
</script>
<style lang="css">
div {
  color: #666;
}
</style>

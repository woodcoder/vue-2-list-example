<template>
  <span class="icon-bin" @click="del"></span>
</template>

<script>
module.exports = {
  props: [
    'index'
  ],
  methods: {
    del: function () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

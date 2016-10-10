<template>
  <span class="icon-bin" @click="del"></span>
</template>

<script>
module.exports = {
  props: [
    'id'
  ],
  methods: {
    del: function () {
      this.$emit('delete', this.id)
    }
  }
}
</script>

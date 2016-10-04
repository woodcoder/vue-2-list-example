<template>
  <th @click="sort">
    <slot></slot>
    <span v-if="value == prop" class="icon-arrow-down2"></span>
  </th>
</template>

<script>
module.exports = {
  props: [
    'prop',
    'value'
  ],
  methods: {
    sort: function () {
      this.$emit('input', this.prop)
    }
  }
}
</script>

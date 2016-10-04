<template>
  <li>
    <span :class="icon"></span>
    {{ name }}
  </li>
</template>

<script>
module.exports = {
  props: [
    'name',
    'type'
  ],
  computed: {
    icon: function () {
      return 'icon-' + this.type
    }
  }
}
</script>

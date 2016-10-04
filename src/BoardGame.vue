<template>
  <tr>
    <td><span :class="icon"></span></td>
    <td>{{ name }}</td>
    <td><slot></slot></td>
  </tr>
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

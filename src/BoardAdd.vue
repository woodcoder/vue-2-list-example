<template>
  <div>
    <select v-model="type">
      <option value="dice">Board Game</option>
      <option value="spades">Card Game</option>
    </select>
    <input v-model="name" @keyup.enter="add">
    <button @click="add">Add</button>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      name: '',
      type: 'dice',
    }
  },
  methods: {
    add: function () {
      this.$emit('add', {
        name: this.name,
        type: this.type
      })
    }
  }
}
</script>

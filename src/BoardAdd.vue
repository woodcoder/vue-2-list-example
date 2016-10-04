<template>
  <div>
    <div class="row">
      <div class="two columns">
        <label for="type">Type</label>
        <select name="type" v-model="type">
          <option value="dice">Board Game</option>
          <option value="spades">Card Game</option>
        </select>
      </div>
      <div class="three columns">
        <label for="name">Name</label>
        <input name="name" type="text" v-model="name" @keyup.enter="add">
      </div>
      <div class="one columns">
        <button class="button-primary" @click="add">Add</button>
      </div>
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

<style>
  input,
  select {
    width: 100%;
  }
  button {
    margin-top: 2.9rem;
  }
</style>
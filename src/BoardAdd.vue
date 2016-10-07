<template>
  <div>
    <div class="row">
      <div class="three columns">
        <label for="type">Type</label>
        <select name="type" v-model="type">
          <option value="dice">Board Game</option>
          <option value="spades">Card Game</option>
        </select>
      </div>
      <div class="four columns">
        <label for="name">Name</label>
        <input name="name" type="text" ref="name" v-model="name" @keyup.enter="add">
      </div>
      <div class="one columns">
        <button class="button-primary" :disabled="blankName" @click="add">Add</button>
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
  computed: {
    blankName: function() {
      return this.name.trim().length == 0
    }
  },
  methods: {
    add: function () {
      if (!this.blankName) {
        this.$emit('add', {
          name: this.name.trim(),
          type: this.type
        })
        this.name = ''
      }
    }
  },
  mounted: function() {
    this.$refs.name.focus()
  }
}
</script>

<style scoped>
  input,
  select {
    width: 100%;
  }
  button {
    margin-top: 2.9rem;
  }
  button[disabled] {
    opacity: 0.5;
  }
  button[disabled]:hover {
    background-color: #33C3F0;
    border-color: #33C3F0;
  }
</style>
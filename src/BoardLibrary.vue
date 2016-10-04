<template>
  <div class="container">
    <h1>iBoards Library</h1>
    <board-add @add="handleAdd"></board-add>
    <p v-if="empty">Zarro Boords!</p>
    <table v-else>
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <board-game v-for="(game, index) in games" :type="game.type" :name="game.name">
          <board-delete :index="index" @delete="handleDelete"></board-delete>
        </board-game>
      </tbody>
    </ul>
  </div>
</template>

<script>
var BoardAdd = require('./BoardAdd.vue')
var BoardGame = require('./BoardGame.vue')
var BoardDelete = require('./BoardDelete.vue')

module.exports = {
  data: function() {
    return {
      games: []
    }
  },
  computed: {
    empty: function() {
      return this.games.length == 0
    }
  },
  methods: {
    handleAdd: function (game) {
      this.games.push(game)
    },
    handleDelete: function (index) {
      this.games.splice(index, 1)
    }
  },
  components: {
    BoardAdd: BoardAdd,
    BoardGame: BoardGame,
    BoardDelete: BoardDelete
  }
}
</script>

<style>
  table {
    width: 100%;
  }
</style>
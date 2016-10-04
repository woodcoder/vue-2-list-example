<template>
  <div>
    <board-add @add="handleAdd"></board-add>
    <p v-if="empty">Zarro Boords!</p>
    <ul v-else>
      <board-game v-for="(game, index) in games" :type="game.type" :name="game.name">
        <board-delete :index="index" @delete="handleDelete"></board-delete>
      </board-game>
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

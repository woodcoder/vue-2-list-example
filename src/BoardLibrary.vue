<template>
  <div>
    <board-add @add="handleAdd"></board-add>
    <p v-if="empty">Zarro Boords!</p>
    <ul v-else>
      <board-game v-for="game in games" :type="game.type" :name="game.name"></board-game>
    </ul>
  </div>
</template>

<script>
var BoardAdd = require('./BoardAdd.vue')
var BoardGame = require('./BoardGame.vue')

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
    }
  },
  components: {
    BoardAdd: BoardAdd,
    BoardGame: BoardGame
  }
}
</script>

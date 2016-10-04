<template>
  <div>
    <select v-model="type">
      <option value="dice">Board Game</option>
      <option value="spades">Card Game</option>
    </select>
    <input v-model="game" @keyup.enter="addGame">
    <button @click="addGame">Add</button>
    <p v-if="empty">Zarro Boords!</p>
    <ul v-else>
      <board-game v-for="g in games" :type="g.type" :name="g.game"></board-game>
    </ul>
  </div>
</template>

<script>
var BoardGame = require('./BoardGame.vue')

module.exports = {
  data: function() {
    return {
      game: '',
      type: 'dice',
      games: []
    }
  },
  computed: {
    empty: function() {
      return this.games.length == 0
    }
  },
  methods: {
    addGame: function () {
      this.games.push({
        game: this.game,
        type: this.type
      })
    }
  },
  components: {
    BoardGame: BoardGame
  }
}
</script>

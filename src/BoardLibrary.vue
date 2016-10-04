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
      <li v-for="g in games">
        <span :class="icon(g.type)"></span>
        {{ g.game }}
      </li>
    </ul>
  </div>
</template>

<script>
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
    },
    icon: function (type) {
      return 'icon-' + type
    }
  }
}
</script>
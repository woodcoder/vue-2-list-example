<template>
  <div class="container">
    <h1>iBoards Library</h1>
    <board-add @add="handleAdd"></board-add>
    <p v-if="empty">Zarro Boords!</p>
    <table v-else>
      <thead>
        <tr>
          <board-sort v-model="sort" prop="type">Type</board-sort>
          <board-sort v-model="sort" prop="name">Name</board-sort>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <board-game v-for="game in sorted" :type="game.type" :name="game.name">
          <board-delete :index="game.index" @delete="handleDelete"></board-delete>
        </board-game>
      </tbody>
    </ul>
  </div>
</template>

<script>
var _ = require('lodash')
var BoardAdd = require('./BoardAdd.vue')
var BoardGame = require('./BoardGame.vue')
var BoardDelete = require('./BoardDelete.vue')
var BoardSort = require('./BoardSort.vue')

module.exports = {
  data: function() {
    return {
      sort: 'type',
      games: []
    }
  },
  computed: {
    empty: function() {
      return this.games.length == 0
    },
    sorted: function() {
      // update each game with its index in the array
      this.games.forEach(function (value, index) {
        value.index = index
      })
      return _.sortBy(this.games, [this.sort])
    }
  },
  methods: {
    handleAdd: function (game) {
      this.games.push(game)
    },
    handleDelete: function (index) {
      this.games.splice(index, 1)
    },
  },
  components: {
    BoardAdd: BoardAdd,
    BoardGame: BoardGame,
    BoardDelete: BoardDelete,
    BoardSort: BoardSort
  }
}
</script>

<style>
  table {
    width: 100%;
    table-layout: fixed;
  }
  table th:nth-of-type(1),
  table th:nth-of-type(3) {
    width: 10%;
  }
  table th:nth-of-type(2) {
    width: 40%;
  }
</style>
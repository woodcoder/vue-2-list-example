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
      <transition-group name="board-list" tag="tbody">
        <board-game v-for="game in sorted" :type="game.type" :name="game.name" :key="game.id">
          <board-delete :id="game.id" @delete="handleDelete"></board-delete>
        </board-game>
      </transition-group>
    </table>
  </div>
</template>

<script>
var _ = require('lodash')
var BoardAdd = require('./BoardAdd.vue')
var BoardGame = require('./BoardGame.vue')
var BoardDelete = require('./BoardDelete.vue')
var BoardSort = require('./BoardSort.vue')
var idGenerator = 0

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
      // always sort by name, just sort by type first, if necessary
      var sortBy = this.sort == 'type' ? ['type'] : []
      sortBy.push(function (game) {
        return game.name.toLowerCase()
      })
      return _.sortBy(this.games, sortBy)
    }
  },
  methods: {
    handleAdd: function (game) {
      game.id = idGenerator++
      this.games.push(game)
    },
    handleDelete: function (id) {
      for (var i = 0; i < this.games.length; i++) {
        if (this.games[i].id == id) {
          this.games.splice(i, 1)
          return
        }
      }
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
  .board-list-move {
    transition: transform 1s;
  }
  .board-list-enter-active, .board-list-leave-active {
    transition: all 0.5s;
  }
  .board-list-enter, .board-list-leave-active {
    opacity: 0;
  }
  .board-list-enter {
    transform: translateX(960px);
  }
  .board-list-leave-active {
    transform: translateX(-960px);
  }

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
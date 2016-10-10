var Vue = require('vue')
var BoardLibrary = require('./BoardLibrary.vue')

new Vue({
  el: '#app',
  render: h => h(BoardLibrary)
})

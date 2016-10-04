var Vue = require('vue')
var BoardLibrary = require('./BoardLibrary.vue')

Vue.component('board-library', BoardLibrary)
var app = new Vue({
  el: '#app'
})

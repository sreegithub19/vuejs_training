<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <h4 id="calculator">Calculator</h4>
    <h4 id="clock">Clock</h4>
    <h4 id="codepen">Codepen</h4>
    <h4 id="dino">Dino</h4>
    <h4 id="hangman">Hangman</h4>
    <h4 id="keyboard">Keyboard</h4>
    <h4 id="maze">Maze</h4>
    <h4 id="sass_">Sass</h4>
    <h4 id="solitaire">Solitaire</h4>
    <h4 id="tic_tac_toe">Tic tac toe</h4>
    <h4 id="tilt_maze">Tilt maze</h4>
    <h4 id="puzzles">Puzzles</h4>
    <h4 id="chess">Chess</h4>
    <h4 id="sudoku">Sudoku</h4>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

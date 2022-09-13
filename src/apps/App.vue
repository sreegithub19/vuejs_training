<!-- https://stackoverflow.com/questions/69746591/vue-3-warning-tags-with-side-effects-is-breaking-production
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
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
  <div style="text-align: center;">
      <a href="./games/sudoku/sudoku.html">Sudoku</a><br>
      <a href="./games/chess/chess.html">Chess</a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
</style> -->
<!--************************************************************************************************ *-->


<template>
<div>
  <h1>Root </h1>
  <p>{{Firstname}}</p>
  <p>{{Lastname}}</p>
  <p>{{age}}</p>
  <p>{{depart}}</p>
  <p>{{firstHobby}}</p>
  <button v-on:click="clickme">My button</button>
  <p v-html="phtml"></p>
  <p :id="id">hi</p>
  
  <input type="text" value="jhon" :disabled="id" v-bind="inputBind"/>
  <p style="background-color:aqua"  v-show="show">this is era</p>
  <p style="background-color:aqua"  v-if="show1">this is if era</p>
  <p style="background-color:red"  v-else>this is else era</p>
  <p class="dummy" :class={cobj}>this is class pra</p>

  <div style="display:inline">
    <div style="block">

    </div>

  </div>

</div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

//import { computed } from '@vue/reactivity';


export default {
  name: "App",
  data(){
    return{
      firstname:"Sreedhar",
      lastname:"K",
      age:22,
      depart:"Back end",
      hobbies:["Sing","Play"],
      phtml:"<span>Sreedhar K</span>",
      id:"p001",
      p:false,
      inputBind:{
        id:"11002",
        class:"001"
      }
,show:true,
show1:false,
is1:true,
cobj:{
        class2:false,
        //warn:false
        "text-danger":false
      },
styleObj:{
  "background-color":"cyan",
}

    
  }},
    methods:{
      clickme(){
        console.log("Clicked");
      }
}
   
    
  
  , computed:{
    firstHobby(){
      return this.hobbies[1];
    }
      
    }
    
};
</script>

<style lang="scss">
@import '@/assets/style.css'
</style>
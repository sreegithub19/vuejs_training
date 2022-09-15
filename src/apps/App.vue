<template>
	<div>
		<h1> Root Component </h1>

		<button @click="clickme($event,'dummy')">Button  event params</button>

		<div :style="[styleObj,styleObj2]">Styled Div</div>

		<!-- <div @click.self="divclick">
			Parent Div
			<div style="background-color:red">Child Div</div>
		</div>
		<input @keyup.shift.enter="pageDown" type="text"/> -->

		<!-- <p> {{ firstName }} </p>
		<p> {{ lastName }} </p>
		<p> {{ firstName + " " + lastName}} </p>
		<p> {{ age < 18 ? "not adult" : "adult"}} </p>
		<p> {{ firstHobby }} </p> -->
		<!-- <button @click.self="clickme">My button </button> -->

		<!-- <p v-html="phtml"> </p>
		<p> {{ phtml}} </p>
		<p :id="id"> This is new para</p>
		<input type="text" value="John"  :disabled="isdisabled" v-bind="inputBind"  :id="id1" />
		<p v-show="show" style="background-color:yellow">This is a new para </p>
		<p v-if="show" style="background-color:cyan">This is a new  para V_IF </p>
		<p v-else style="background-color:pink">This is a new  para v_ELSE </p>

		<p class="dummy" :class="cobj">Class binding </p>

 -->

	</div>
</template>

<script>

export default {
  name: "App",
  data(){
	return{
		firstName:"John",
		lastName:"Smith",
		age:25,
		hobbies:["painting","swimming"],
		number1: 20,
		number2: 30,
		phtml:"<span style='color:red'> This is span element </span>",
		id:"p001",
		id1:"i002",
		inputBind:{
			id:"i001",
			class:"class1"
		},
		show:true,
		is1:false,
		cobj:{
			class2:false,
			"text-danger":false
		},
		styleObj:{
			"background-color":"cyan",
			"font-size":"2em"
		},
		styleObj2:{
			"border":"2px solid",
			"background-color":"pink",
		}

	}
  },
  methods:{
		divclick(){
			console.log("Div clicked");
		},
		clickme(e,msg){
			console.log(e,msg);
		},
		sum(){
			return this.number1 + this.number2;
		}
  },
  computed:{
	firstHobby(){
		return this.hobbies[0];
	}
  }
};
</script>

<style scoped>
@import "@/assets/styles.css"
</style>

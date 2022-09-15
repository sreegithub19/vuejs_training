<template>
	<div>
		<h2>Hobbies</h2>
		<p v-for="h in hobbies" v-bind:key="h">{{h}}</p>
	</div>

</template>
<script>
import contactsData from "../data/contacts.js";
export default {
	name: 'Hobbies',
	data () {
		return {
			contacts:contactsData
		}
	},
	computed:{
		hobbies(){
			return this.contacts[0]["hobbies"];
		}
	}
}
</script>
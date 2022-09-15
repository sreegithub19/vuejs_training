<template>
	<div>
		<h2>Contact</h2>
				<p>ID: {{selected["id"]}}</p>
				<p>First Name: {{selected["first_name"]}}</p>
				<p>Last Name : {{selected["last_name"]}}</p>
				<p>Age       : {{selected["age"]}}</p>
	</div>
	<router-view></router-view>

</template>
<script>
import contactsData from "../data/contacts.js";
export default {
	name: 'Contact',
	data () {
		return {
			contacts:contactsData,
			paramid:this.$route.params ? parseInt(this.$route.params.id) : 0
		}
	},
	computed:{
		selected(){
			let a = this.contacts.filter((a)=>{return a.id===this.paramid});
			console.log(a,this.paramid)
			return a[0];
		}
	}
}
</script>
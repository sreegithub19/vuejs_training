<template>
	<div> {{someText}} </div>
</template>
<script>

export default {
	name:"LifeCycle",
	data() {
		return {
			someText:"Hello world"
		}
	},
	beforeCreate() {
		console.log("before create")
	},
	created() {
		console.log("created")
	},
	beforeMount(){
		console.log("mounting ..")

	},
	mounted(){
		console.log("mounted")

	},
	beforeUpdate(){
		console.log("before update");
	},
	updated(){
		console.log("updated")
	}
}
</script>

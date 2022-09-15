<template>
	<div>
		<h1> Teleport App</h1>
		<button @click="toggle()">Teleport</button>

		<Teleport to="#teleport">
			<div v-if="open" class="modal">
				<p>Some text</p>
			</div>
		</Teleport>
	</div>

</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			open: false
		}
	},
	methods:{
		toggle(){
			this.open = !this.open;
		}
	}
}
</script>

<style>
.modal {
	position: fixed;
	z-index: 1;
	top: 20%;
	left: 50%;
	width: 300px;
	margin-left: -150px;
}
</style>

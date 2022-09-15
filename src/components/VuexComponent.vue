<template>
	<div>
		<br />
		<h1>Vuex Component</h1>
		<li v-for="x in lastN" :key="x">
			{{x}}
		</li>
	</div>
</template>
<script>

export default {
	name: "VuexComp",
	computed: {
		lastN() {
			return this.$store.getters.lastN(5);
		}

	}

}
</script>

<template>
	<div>
		<button @click="updateCount()">Update Count</button>
		<button @click="updateAsync()">Update Count Async</button>
	</div>

</template>

<script>
import { mapState } from 'vuex';

export default {
	name: "VuexApp",
	methods: {
		updateCount() {
			console.log(this.$store.state.count);
			this.$store.commit("increment");
			console.log("This", this.$store.state.count);
			console.log("C1", this.count1);
			console.log("C2", this.count2);
		},
		updateAsync(){
			console.log(this.$store.state.count);
			this.$store.dispatch("incrementAsync");
			console.log("This", this.$store.state.count);
			console.log("C1", this.count1);
			console.log("C2", this.count2);
		},
		log(){

		}
	},
	mounted() {
		let i = 1;
		console.log(i);
	},
	computed: {
		countSquare() { return this.count ** 2 },
		...mapState(
			{
				count1: state => state.count,
				count2: "count"
			}
		)
	}
}

</script>


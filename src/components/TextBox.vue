<template>
	<div>
		<label>{{label}}</label>
		<input type="text" :value="value" />
	</div>
</template>


<script>
	export default {
		name: "TextBox",
		props: ["label", "value"],
		data() {
			return {
				model:null
			}
		}
	}
</script>

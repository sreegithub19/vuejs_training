<template>
	<div>
		<label>{{label}}</label>
		<input type="checkbox" :checked="value" />
	</div>
</template>


<script>
	export default {
		name: "TextBox",
		props: ["label", "value"],
		data() {
			return {
				checked:null
			}
		}
	}
</script>

<template>
	<button :id="id">{{content}}</button>
</template>
<script>
	export default {
		name: "MyButton",
		props:{
			"id":{
				type:[String,Number],
				default:"x001"
			},
			"content":{
				type:String,
				default:"Button Text"
			}
		}
	}
</script>

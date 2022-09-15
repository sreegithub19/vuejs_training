<template>
	<div>
		<MyButton :id="id" content="My Button"  ></MyButton>
		<TextBox label="Name" :value="tbox1"></TextBox>
		<CheckBox label="Confirm?" :value="checked"></CheckBox>

	</div>

</template>
<script>
import MyButton from "../components/MyButton.vue"
import TextBox from "../components/TextBox.vue"
import CheckBox from "../components/CheckBox.vue"

	export default {
		name: "RootComp",
		data() {
			return {
				id:"btn-001",
				text:"Button1",
				tbox1:"Tom",
				checked:false
			}
		},
		components:{
		MyButton,TextBox,CheckBox
		}
	}
</script>

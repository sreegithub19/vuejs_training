<template>
	<div>
	<h1>Slot App</h1>
	<div>
	<SlotComp>Some text</SlotComp>
	</div>
	</div>

</template>

<script>
import SlotComp from "../components/SlotComp"
export default {
	name: 'SlotApp',
	components:[SlotComp],
	data() {
		return{
			id:"b001",
			content:"Slot Button"
		}
	},
}
</script>


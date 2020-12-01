<template>
	<div class="container-slider">
		<div class="slider">
			<Card 
				v-for="cinema in cinemas" 
				:mediaType="mediaType"
				:cinema="cinema"
				:key="cinema.id"
			/>
			<div 
				v-if="cinemas.length" 
				v-observe-visibility="visibilityChanged"
			>
			</div>
		</div>
	</div>
</template>

<script>
import Card from "@/components/Card"

export default {
	name: "Slider",

	props: ["cinemas", "collection", "mediaType"],

	components: {
		Card
	},

	methods: {
		visibilityChanged(isVisible) {
			if (!isVisible) return;
			this.$emit("loadMoreCinema", this.collection)
		},
	}
};
</script>

<style lang="scss" scoped>
.container-slider {
	background-color: var(--grey);
	border-radius: 5px;
	margin: 0px 30px;

	.slider {
		padding-bottom: 10px;
		overflow-x: scroll;
		margin-right: 11px;
		margin-left: 11px;
		padding-top: 10px;
		min-height: 18em;
		display: flex;
	}
}
</style>
<template>
	<div class="errorPage">
		<h1>🥵 Oupss, Error.. </h1>
		<div class="errorContainer">
			<img src="~/assets/images/po_404.png" alt="kung fu panda - po - 404">
			<div class="errorDescription">
				<p v-for="(item, index) in error" :key="index">
					{{ index }}: {{ item }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
laoyut: "Error",

props: ["error"]
}
</script>

<style lang="scss" scoped>
.errorPage{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	h1{
		color: var( --white);
		font-weight: bold;
		margin-left: 50px;
		padding-top: 50px;
		font-size: 30px;
	}

	.errorContainer{
		display: flex;
		flex-direction: row;
		align-items: center;

		.errorDescription {
			padding: 30px;
			border-radius: 5px;
			background-color: var( --white );
		}
	}
	@media screen and (max-width: 767px) {
		.errorContainer{
			flex-direction: column;
		}
	}
}
</style>
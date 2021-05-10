<template>
	<footer>
		<a href="https://bensbenj.github.io/portfolio" target="_blank" rel="noopener" >
			Benyamin benshabat
		</a>
		| Copyright &#9400; {{new Date().getFullYear()}} Cinematime
	</footer>
</template>

<script>
export default {
	name: "Footer"
};
</script>

<style scoped lang="scss">
footer {
	color: var( --white );
	padding-bottom: 20px;
	text-align: center;
    font-weight: bold;
	font-size: 17px;
	width: 100%;
	bottom: 0;
	left: 0;
	a {
		&:hover {
			color: var( --purpre );
		}
	}
}
</style>
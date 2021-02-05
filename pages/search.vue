<template>
	<div id="search">
		
		<input 
			type="text" 
			id="search-movie" 
			placeholder="Titre, personne, genre" 
			@keyup="find(query)" 
			v-model="query"
		>
		<div id="deck-movie">
			<Card 
				:mediaType="cinema.media_type"
				v-for="cinema in cinemas" 
				:key="cinema.id"
				:cinema="cinema"
				id="search-card"
			/>
		</div>
	</div>
</template>

<script>
import { search } from "@/services/tmdb";
import Card from "@/components/Card";

export default {
	name: 'Search',

	components: {
		Card
	},

	data() {
		return {
			cinemas: [],
			query: "",
		}
	},

	methods: {
		find(query) {
			search(query).then( response => this.cinemas = response.results )
		}
	}
}
</script>

<style lang="scss" scoped>
#search-movie {
	transform: translateX( -50% );
	caret-color: var( --grey-dark );
	color: var( --grey-dark );
	border-radius: 5px;
	position: relative;
	padding: 0 10px;
	height: 40px;
	width: 30vw;
	top: 5rem;
	left: 50%;
}

#deck-movie{
	margin-top: 10rem;
	flex-wrap: wrap;
	display: flex;
	
	#search-card {
		margin-left: 2rem;
		margin-top: 2rem;
	}
}
</style>
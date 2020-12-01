<template>
	<div id="home">
		<div v-for="collection in collections" :key="collection.title">
			<h1>Popular {{collection.title}}</h1>
			<Slider 
				:cinemas="collections[collection.title].movies" 
				:collection="'popular' + collection.title" 
				:mediaType="collection.title" 
				@loadMoreCinema="load"
			/>
			<div class="pages">
				({{collections[collection.title].pages}}/{{collections[collection.title].total}})
			</div>
		</div>
	</div>
</template>

<script>
import { popular } from "@/services/tmdb";
import Slider from "@/components/Slider";

export default {
	name: "Home",

	components: {
		Slider
	},

	data() {
		return {
			collections: {
				movie: {
					title: 'movie',
					total: 1,
					pages: 1,
					movies: [],
				},
				tv : {
					title: 'tv',
					total: 1,
					pages: 1,
					movies: [],
				}
			}
		};
	},

	methods: {
		
		load( value ) {
			let _collection = value.split('popular').pop();

			if( this.collections[_collection].pages < this.collections[_collection].total ) {
				console.log(this.collections[_collection].pages , this.collections[_collection].total )
				this.fetchPopular(this.collections[_collection].title, this.collections[_collection].pages);
			}
		},

		async fetchPopular( mediaType, pages ) {
			let response = await popular(mediaType, pages);
			this.collections[mediaType].movies.push(...response.results);
			this.collections[mediaType].total = response.total_pages;
			this.collections[mediaType].pages++;
		}
	},

	mounted() {
		this.fetchPopular("movie", this.collections.movie.pages);
		this.fetchPopular("tv", this.collections.tv.pages);
	},
};
</script>

<style lang="scss" scoped>
h1 {
	color: var( --white);
	font-weight: bold;
	margin-left: 50px;
	padding-top: 50px;
	font-size: 30px;
}

.pages {
	color: var( --white );
	margin-right: 29px;
	text-align: right;
}
</style>
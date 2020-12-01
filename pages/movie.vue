<template>
	<div id="movie">
        <div v-for="collection in collections" :key="collection.title">
            <h1>{{collection.title}}</h1>
            <Slider 
                :cinemas="collections[collection.title].movies" 
                :collection="collection.title + 'Movie'" 
                :mediaType="'movie'" 
                @loadMoreCinema="load"
            />
            <div class="pages">
                ({{collections[collection.title].pages}}/{{collections[collection.title].total}})
            </div>
        </div>
	</div>
</template>

<script>
import { trending, discover } from "@/services/tmdb";
import Slider from "@/components/Slider";

export default {
	name: "Movies",

	components: {
		Slider
	},

	data() {
		return {
            collections: {
                trending: {
                    title: "trending",
                    pages: 1,
                    total: 1,
                    movies : []
                },
                action : {
                    title: "action",
                    genreId: 28,
                    pages: 1,
                    total: 1,
                    movies: []
                },
                adventure : {
                    title: "adventure",
                    genreId: 12,
                    pages: 1,
                    total: 1,
                    movies: []
                },
                animation : {
                    title: "animation",
                    genreId: 16,
                    pages: 1,
                    total: 1,
                    movies: []
                },
                comedy : {
                    title: "comedy",
                    genreId: 35,
                    pages: 1,
                    total: 1,
                    movies: []
                },
                family : {
                    title: "family",
                    genreId: 10751,
                    pages: 1,
                    total: 1,
                    movies: []
                },
                fantasy : {
                    title: "fantasy",
                    genreId: 14,
                    pages: 1,
                    total: 1,
                    movies: []
                },
                romance : {
                    title: "romance",
                    genreId: 10749,
                    pages: 1,
                    total: 1,
                    movies: []
                }
            }
		};
	},

	methods: {
		
		load( collections ) {
            let _collection = collections.split('Movie')[0];

            if( this.collections[_collection].pages < this.collections[_collection].total ) {
                if( collections === "trendingMovie" ) {
                    this.fetchTrending("movie", this.collections[_collection].pages)
                } else {
                    this.fetchDiscover("movie", this.collections[_collection].pages, _collection, this.collections[_collection].genreId)
                }
            }
		},

		async fetchTrending( mediaType, pages ) {
            let response = await trending(mediaType, pages);
            this.collections.trending.total = response.total_pages;
            this.collections.trending.movies.push(...response.results);
            this.collections.trending.pages++;
        },
        
        async fetchDiscover( mediaType, pages, _collection, genreId ) {
            let response = await discover(mediaType, pages, genreId);
            this.collections[_collection].total = response.total_pages;
            this.collections[_collection].movies.push(...response.results);
            this.collections[_collection].pages++;
		}
	},

	mounted() {
		this.fetchTrending("movie", this.collections.trending.pages);
		this.fetchDiscover("movie", this.collections.action.pages, "action", this.collections.action.genreId);
		this.fetchDiscover("movie", this.collections.adventure.pages, "adventure", this.collections.adventure.genreId);
		this.fetchDiscover("movie", this.collections.animation.pages, "animation" ,this.collections.animation.genreId);
		this.fetchDiscover("movie", this.collections.comedy.pages, "comedy", this.collections.comedy.genreId);
		this.fetchDiscover("movie", this.collections.family.pages, "family", this.collections.family.genreId);
		this.fetchDiscover("movie", this.collections.fantasy.pages, "fantasy", this.collections.fantasy.genreId);
		this.fetchDiscover("movie", this.collections.romance.pages, "romance", this.collections.romance.genreId);
	},
};
</script>

<style lang="scss" scoped>
h1 {
    text-transform: capitalize;
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
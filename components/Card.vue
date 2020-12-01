<template>
	<div class="card" @click="sendDetails">
		<div class="poster">
			<img 
				:src="getPicture(cinema.poster_path)" 
				:alt="cinema.title || cinema.name"
			>
			<div class="overlay"></div>
		</div>
	</div>
</template>

<script>
import { findById, cinemaSimilar, videoPreview } from "@/services/tmdb";
import { getPicture } from "@/helper/functions";

export default {
	name: "Card",

	props: ["cinema", "mediaType"],

	methods: {
		getPicture,

		async sendDetails() {
			let cinema = await findById( this.mediaType, this.cinema.id );
			this.$store.dispatch('modal/add', { cinema: cinema, mediaType: this.mediaType });
			
			let similars = await cinemaSimilar( this.mediaType, this.cinema.id );
			this.$store.dispatch('modal/cinemaSimilar', similars.results);

			let video = await videoPreview( this.mediaType, this.cinema.id );
			this.$store.dispatch('modal/video', video.results)
		}
	}
};
</script>

<style scoped lang="scss">
.card + .card {
	margin-left: 10px;
}

.card {
	position: relative;
	cursor: pointer;
	flex: 0 0 12em;

	.poster {
		height: 100%;
		img {
			box-shadow: #0000009a 1px 1px 3px;
			border-radius: 5px;
			min-height: 100%;
		}

		.overlay {
			background: var(--gradient);
			transition: all .5s;
			position: absolute;
			border-radius: 5px;
			height: 100%;
			width: 100%;
			opacity: 0;
			left: 0;
			top: 0;
			
			&:hover {
				opacity: .7;
			}
		}

	}
}
</style>
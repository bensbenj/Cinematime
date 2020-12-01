<template>
	<header
		:class="{ 'show-links': showSidebar }"
		@mouseleave="leaveNav()"
		@mouseover="showNav()"
	>
		<div id="navigation-icons">
			<nuxt-link to="/" class="items-sidebar">
				<img
					src="@/assets/icons/home.svg"
					alt="home icon"
					class="icon"
				/>
			</nuxt-link>
			<nuxt-link to="/movie" class="items-sidebar">
				<img
					src="@/assets/icons/movie.svg"
					alt="movie icon"
					class="icon"
				/>
			</nuxt-link>
			<nuxt-link to="/tv" class="items-sidebar">
				<img
					src="@/assets/icons/serie.svg"
					alt="serie icon"
					class="icon"
				/>
			</nuxt-link>
		</div>

		<div id="navigation-links" v-show="!mediaType">
			<transition-group name="fade">
				<div v-show="showLinks && showSidebar" class="links" key="1">
					<nuxt-link class="items-links" to="/">Home</nuxt-link>
				</div>
				<div v-show="showLinks && showSidebar" class="links" key="2">
					<nuxt-link class="items-links" to="/movie">Movies</nuxt-link>
				</div>
				<div v-show="showLinks && showSidebar" class="links" key="3">
					<nuxt-link class="items-links" to="/tv">Tv Show</nuxt-link>
				</div>
			</transition-group>
		</div>

		<div id="navigation-cinematime">
			<a href="/">
				<img
					src="@/assets/images/logo-cinematime.png"
					alt="cinema time icon"
					id="icon-cinematime"
				/>
			</a>
		</div>
	</header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "Sidebar",

	data() {
		return {
			showCinematime: false,
			showSidebar: false,
			showLinks: false,
		};
	},

	methods: {
		showNav() {
			if (window.innerWidth >= 768) {
				if (!this.showSidebar) {
					this.showCinematime = false;
					this.showLinks = false;
				}

				this.showSidebar = true;
				setTimeout(() => {
					this.showCinematime = true;
					this.showLinks = true;
				}, 200);
				this.$emit("pusher", true);
			}
		},

		leaveNav() {
			this.showCinematime = false;
			this.showLinks = false;
			setTimeout(() => {
				this.$emit("pusher", false);
				this.showSidebar = false;
			}, 200);
		},
	},

	computed: {
		...mapGetters({mediaType: 'modal/mediaType'})
	}
};
</script>

<style lang="scss" scoped>
header {
	transition: all ease-in-out 0.5s;
	position: fixed;
	height: 100vh;
	z-index: 10;
	width: 70px;
	left: 0;
	top: 0;

	&.show-links {
		@media screen and (min-width: 768px) {
			width: 200px;
		}
	}

	#navigation-links,
	#navigation-icons {
		transform: translateY(calc(100vh / 2 - 50%));
		justify-content: center;
		flex-direction: column;
		align-items: center;
		display: flex;
		float: left;
	}

	#navigation-icons {
		width: 70px;

		.items-sidebar + .items-sidebar {
			margin-top: 50px;
		}

		.items-sidebar {
			border-radius: 50%;
		}

		.icon {
			padding: 10px;
			width: 50px;
		}
	}

	#navigation-links {
		.links + .links {
			margin-top: 65px;
		}

		.links {
			text-align: center;
			border-radius: 5px;
			margin-left: 10px;
			font-size: 1.5rem;
			cursor: pointer;
			width: 100%;

			a {
				text-decoration: none;
				color: var(--white);
				border-radius: 5px;
				padding: 5px;
			}
		}
	}

	.nuxt-link-exact-active {
		box-shadow: #EEF2FF 0px 1px 3px;
		background: var(--gradient);
	}
	
	#navigation-icons .items-sidebar:hover, #navigation-links .items-links:hover {
		box-shadow: #EEF2FF 0px 1px 4px;
		background: var(--gradient);
	}

	@mixin nav-childs($values...) {
		@each $var in $values {
			&:nth-child(#{$var}) {
				transition: transform linear calc(0.15s * #{$var}), display 4s;
			}
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		@include nav-childs(1, 2, 3);
	}

	.fade-enter,
	.fade-leave-to {
		transform: scale(0);
	}

	#navigation-cinematime {
		align-items: center;
		position: absolute;
		padding-left: 5px;
		flex-wrap: wrap;
		display: flex;
		bottom: 20px;
		left: 0;

		#icon-cinematime {
			height: 60px;
			width: 60px;
		}
	}
}
</style>
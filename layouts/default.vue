<template>
	<div id="app">
		<Modal v-show="!!mediaType"/>
		<div id="layout" :class="{ abslt: !!mediaType }">
			<Sidebar class="sidebar" @pusher="onPushed"/>
			<Finder />
			<Nuxt id="contain" :class="{ pushed: isPushed }"/>
			<Footer/>
		</div>
	</div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Finder from "@/components/Finder";
import Modal from "@/components/Modal";

import { mapGetters } from "vuex" 


export default {
  	name: "App",

	components: {
		Sidebar,
		Footer,
		Finder,
		Modal,
	},

	data() {
		return {
			isPushed: false,
		};
	},

	methods: {
		onPushed(value) {
			this.isPushed = value;
		},
	},

	computed: {
		...mapGetters({
			mediaType : 'modal/mediaType', 
			cinema: 'modal/cinema'
		})
	},
}
</script>

<style lang="scss">

#app {
	background: linear-gradient(47deg, var(--grey) 0%, var(--grey-dark) 0%);
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: absolute;
	overflow: scroll;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;

	@media screen and (min-width: 1552px) {
		width: 100vw;
	}
}

#layout {
	padding-left: 70px;
}

.abslt {
	background: var( --grey-dark );
	position: absolute;
	opacity: .5;
	top: 0;
}

.sidebar {
	position: fixed;
}

#contain{
	min-height: calc( 100vh - 24px );
}

#contain,
#footer {
	transition: all ease-in-out 0.5s;
}

.pushed {
	background: var( --black );
	margin-left: 130px;
	filter: blur(2px);
	opacity: 0.3;
}

textarea:focus,
button:focus,
select:focus,
input:focus {
	box-shadow: none !important;
	-webkit-appearance: none;
	outline: 0px !important;
}
</style>

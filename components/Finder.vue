<template>
	<div id="finder">
		<nuxt-link to="/search">
			<img id="finder-logo" src="../assets/icons/finder.svg" alt="search logo">
		</nuxt-link>
	</div>
</template>

<script>
import { search } from "@/services/tmdb";

export default {
	name: "Finder",
}
</script>

<style lang="scss" scoped>
#finder{
    position: absolute;
    display: flex;
    right: 30px;
    top: 10px;

    #finder-logo {
        cursor: pointer;
        padding: 5px;
        width: 40px;
        
        &:hover{
		    box-shadow: #EEF2FF 0px 1px 4px;
            background: var( --gradient );
            border-radius: 50%;
        }
    }
}
</style>
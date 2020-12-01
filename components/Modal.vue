<template>
    <div id="modal">
        <img id="close" @click="close" src="@/assets/icons/close.svg" alt="close modal">
        <div id="modal-container">
            <img id="backdrop" :src="getPicture(cinema.backdrop_path)" :alt="cinema.title || cinema.name">
            
            <div id="modal-detail">
                <h1>{{ cinema.title || cinema.name }}</h1>
                <p>{{ cinema.release_date || cinema.first_air_date }}</p>
            </div>

            <div id="modal-play">
                <button id="btn-play" @click="showYT = !showYT; down()">
                    <img id="play-icon" src="@/assets/icons/play.svg" alt="play video">
                    <span>Bande annonce</span>
                </button>
            </div>

            <div class="youtube" v-for="(video, $index) in videos" :key="video.id" v-show="showYT">
                <h2>{{video.name}}</h2>
                <iframe width="100%" height="500" allowfullscreen
                    :src="'https://www.youtube.com/embed/' + video.key + '?autoplay=' + ($index == 0 && showYT ? '1' : '0')">
                </iframe>
            </div>

            <div id="modal-description">
                <h2>Synopsis <span v-if="cinema.adult">🔞</span></h2>
                <div id="overview">
                    {{cinema.overview}}
                </div>

                <h2>Genres</h2>
                <div class="genres" v-for="(genre, $index) in cinema.genres" :key="genre.id">
                    {{genre.name}}<span v-if="$index !== cinema.genres.length - 1">,</span>
                </div>
           
                <div id="cinema-similar">
                    <h2>Similaire</h2>
                    <Slider 
                        :cinemas="similars" 
                        :mediaType="mediaType" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "@/components/Slider"
import { getPicture } from "@/helper/functions";
import { mapGetters } from "vuex";


export default {
    name: "Modal",

    components: {
        Slider,
    },

    data() {
        return {
            showYT: false
        }
    },

    methods: {
        getPicture,
        
        close() {
			this.$store.dispatch('modal/remove')
        },

        down() {
            let container = document.getElementById('modal-container');
            let height = container.offsetHeight;
            container.scroll(0, height + 35)
        }
	},
    
	computed: {
		...mapGetters({
			mediaType : 'modal/mediaType', 
            similars: 'modal/similars',
            cinema: 'modal/cinema',
            videos: 'modal/videos',
		}),
	},
}
</script>

<style lang="scss" scoped>
    #modal {
        background-color: var( --navy );
        height: 100vh;
        width: 100vw;

        h2 {
            padding-bottom: 10px;
            padding-left: 30px;
            font-weight: bold;
            padding-top: 30px;
        }

        #close {
            background: var( --gradient );
            border-radius: 50%;
            position: fixed;
            cursor: pointer;
            z-index: 12;
            width: 30px;
            right: 10%;
            top: 13%;
        }

        #modal-container {
            box-shadow: #0000009a 1px 1px 3px;
            transform: translateY(-50%);
            background: white;
            overflow-y: scroll;
            border-radius: 1em;
            margin-right: 15vw;
            margin-left: 15vw;
            position: fixed;
            color: black;
            width: 70vw;
            z-index: 11;
            height: 80%;
            top: 50%;

            #backdrop {
                border-bottom: double 3px var(--grey);
                width: 100%;
            }

            #modal-detail {
                position: absolute;
                top: 30px;

                h1 {
                    font-size: 20px;
                }

                p {
                    width: 13em;
                }

                h1, p {
                    border-bottom-right-radius: 5px;
                    border-top-right-radius: 5px;
                    color: var( --white );
                    background: black;
                    padding-right: 30px;
                    padding-left: 30px;
                    text-align: center;
                    font-weight: bold;
                    margin-top: 30px;
                    opacity: .7;
                }

            }

            #modal-play {
                transform: translateX(-50%);
                position: absolute;
                left: 50%;

                #btn-play {
                    background-color: var( --white );
                    align-items: center;
                    border-radius: 10px;
                    position: relative;
                    flex-wrap: wrap;
                    border: black;
                    color: black;
                    display: flex;
                    padding: 6px;
                    top: -100px;

                    #play-icon {
                        width: 2em;
                    }
    
                    span {
                        padding-right: 20px;
                        padding-left: 20px;
                        font-weight: bold;
                    }
    
                    &:hover {
                        background: var( --gradient );
                        color: var( --white );
                    }
                }
            }

            .youtube {
                margin-top: 10px;
            }

            #modal-description {
                margin-bottom: 10px;
    
                #overview {
                    padding-right: 30px;
                    padding-left: 30px;
                }

                .genres + .genres {
                    padding-left: 5px
                }

                .genres {
                    padding-left: 30px; 
                    padding-top: 30px;
                    display: inline;
                }
            }
        }
    }
</style>
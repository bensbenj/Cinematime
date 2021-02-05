<template>
    <div class="stack">
        <h1>Stack</h1>
        <ul>
            <li>nuxt</li>
            <li>pure css ( SCSS )</li>
            <li>Api - theMovieDB</li>
        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.stack{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1{
        font-weight: bold;
        font-size: 30px;
        color: var(--white);
    }
    ul{
        padding:30px;
        display: flex;
        border-radius: 5px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: var( --white );
    }
}
</style>
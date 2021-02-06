<template>
    <section class="presentation">
        <div>
            <h1 class="bg-clip-text text-transparent bg-gradient-to-tr bg-gradient-from-bl to-purple-500 from-indigo-500 uppercase">cinematime</h1>

            <ul>
                <li>🖥️ Platforme de bandes annonces</li> <br>
                <li>⏱️ Trouver rapidement votre film / serie TV</li> <br>
                <li>⚡ Intuitif & rapide</li> <br>
                <li>✅ 100% gratuit</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style lang="scss" scoped>
.presentation{
    display: flex;
    flex-direction: row;
    color: var( --white);
    justify-content: center;

    h1 {
        display: flex;
        font-size: 30px;
        margin-top: 40px;
        font-weight: bold;
        flex-direction: row;
        padding-right: 70px;
        align-items: center;
        justify-content: center;
    }

    ul{
        top: 50%;
        left: 50%;
        font-size: 20px;
        position: absolute;
        transform: translate(-50%, -50%);
    }
}
</style>
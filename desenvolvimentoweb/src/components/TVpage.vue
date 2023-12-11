<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    TV: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="movie-container"
        :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${props.TV.backdrop_path})` }">
        <h2>{{ props.TV.name }}</h2>
        <img :src="`https://image.tmdb.org/t/p/w500${props.TV.poster_path}`" :alt="props.TV.name" />
        <p class="overview">{{ props.TV.overview }}</p>
        <p>{{ props.TV.first_air_date }}</p>
        <p>{{ props.TV.vote_average }}</p>
    </div>
</template>

<style scoped>
.movie-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
}

.movie-container {
    text-align: center;
    width: 100%;
    background-size: cover;
    background-color: rgb(36, 36, 36);
    background-blend-mode: overlay;
}

h2 {
    filter: none;
    color: white;
    background-color: black;
}

p {
    color: white;
    background-color: black;
    padding: 1%;
}

.overview {
    width: 50%;
}
</style>
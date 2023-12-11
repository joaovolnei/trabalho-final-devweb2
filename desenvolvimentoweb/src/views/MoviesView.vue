<script setup>
import { ref, onMounted } from 'vue'
import useGenreStore from '@/stores/genre';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay'
import MoviePage from '../components/MoviePage.vue';

const isLoading = ref(false);

const genreStore = useGenreStore();

const showMovie = ref(false)

const currentMovie = ref({})

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('movie');
  listMovies(genreStore.genres[0]);
  isLoading.value = false;
});

const loadMovie = (movie) => {
  currentMovie.value = movie
  showMovie.value = true
}

const movies = ref([]);

const listMovies = async (genreId) => {
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });
  movies.value = response.data.results
};
</script>
<template>
  <div class="moviePage" v-if="showMovie" >
    <button @click="showMovie = false">Voltar</button>
    <movie-page :movie="currentMovie"/>
  </div>
  <div class="movies" v-else>
    <div>
      <h1>Gêneros de filmes</h1>
      <ul class="genre-list">
        <li v-for="genre in genreStore.genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
          {{ genre.name }}
        </li>
      </ul>
      <loading v-model:active="isLoading" is-full-page />
    </div>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-card" @click="loadMovie(movie)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
        <div class="movie-details">
          <p class="movie-title">{{ movie.title }}</p>
          <p class="movie-release-date">{{ movie.release_date }}</p>
          <p class="movie-genres">{{ movie.genre_ids }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}



.genre-item {
  background-color: #387250;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #4e9e5f;
  box-shadow: 0 0 0.5rem #387250;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  justify-content: center;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
</style>
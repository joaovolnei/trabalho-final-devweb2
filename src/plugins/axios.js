import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWIzZDMzZjZiMDFlNjJiNGI2ZGU0OGZkNDJhOTY2ZSIsInN1YiI6IjY1MDQ2ODAxZTBjYTdmMDBjYmVjMmFmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WICE810aTwZYkPG13YRt0S13cbbXfRDgLd_FORNDkaM`
  }
})

export default api
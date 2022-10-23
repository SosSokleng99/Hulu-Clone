import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { GetServerSideProps } from 'next'


import NavBar from '../components/Home/NavBar/Navbar/NavBar';
import Featured from '../components/Home/Featured/Featured';
import MovieCategory from '../components/Home/MovieCategory/MovieCategory';
import MovieList from '../components/Home/MovieList/MovieList';

import ThemeProvider from '../components/ThemeProvider';
import { supabase } from '../lib/initSupabase'






type Props = {
  featured_movie: any[],
  popular_movies: any[],
  toprated_movies: any[],
  nowplaying_movies: any[],
  movie_genres: any[]
}

const Home: NextPage<Props> = ({ movie_genres, featured_movie, popular_movies, toprated_movies, nowplaying_movies }) => {
  return (
    <div>

      <Head>
        <title>Stream TV and Movies Live and Online | Hulu</title>
      </Head>
        <ThemeProvider>
          <NavBar />
          <Featured featured_movie={featured_movie} movie_genres={movie_genres} />
          <MovieCategory />
          <MovieList listTitle='popular movie' movies={popular_movies} movie_genres={movie_genres} />
          <MovieList listTitle='Now Playing' movies={nowplaying_movies} movie_genres={movie_genres} />
          <MovieList listTitle='Top Rated' movies={toprated_movies} movie_genres={movie_genres} />
        </ThemeProvider>
      


    </div>
  )
}
export default Home


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/welcome' } }
  }


  const POPULAR_MOVIE = 'https://api.themoviedb.org/3/movie/popular?api_key=1b495e49ac7218f7c4d09bdbe5b82008&language=en-US&page=3'
  const popular_res = await fetch(POPULAR_MOVIE);
  const popular_movies_data = await popular_res.json()
  const popular_movies = popular_movies_data.results

  const TOPRATED_MOVIE = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1b495e49ac7218f7c4d09bdbe5b82008&language=en-US&page=1'
  const toprated_res = await fetch(TOPRATED_MOVIE);
  const toprated_movies_data = await toprated_res.json()
  const toprated_movies = toprated_movies_data.results.slice(0, 14)

  const NOWPLAYING_MOVIE = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1b495e49ac7218f7c4d09bdbe5b82008&language=en-US&page=1'
  const nowplaying_res = await fetch(NOWPLAYING_MOVIE);
  const nowplaying_movies_data = await nowplaying_res.json()
  const nowplaying_movies = nowplaying_movies_data.results.slice(0, 14)

  const GENRES_PATH = "https://api.themoviedb.org/3/genre/movie/list?api_key=1b495e49ac7218f7c4d09bdbe5b82008";
  const genre_res = await fetch(GENRES_PATH);
  const genres = await genre_res.json()
  const movie_genres = genres.genres;

  const featured_movie = popular_movies_data.results[0]

  return {
    props: {
      featured_movie,
      popular_movies,
      toprated_movies,
      nowplaying_movies,
      movie_genres,
      logout: true
    }
  }
}



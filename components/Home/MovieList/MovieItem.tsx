import React from 'react'
import Image from 'next/image'
import styles from '../MovieList/MovieItem.module.css'
import moment from 'moment'
import { MoviesProps } from './MovieList';

import BottomPaneModal from './BottomPaneModal';

interface MovieListProps {
    movie: any[],
    movie_genres: any[],
}
 
interface MovieGenreProps {
  id: number,
  name: string
}

export interface VideosProps {
    id: number, results:ResultsProps[]
  }
  

export interface ResultsProps
  {
    id: string, key: string, name: string, type: string
   }


const MovieItem = ({movie, movie_genres}: MovieListProps) => {


  const [movie_item]  = React.useState<MoviesProps[] | any>(movie);
  const [movie_genres_data] = React.useState<MovieGenreProps[]>(movie_genres);

  const API: string = `https://api.themoviedb.org/3/movie/${movie_item.id}/videos?api_key=1b495e49ac7218f7c4d09bdbe5b82008&language=en-US`;

  const [slidePane, setIsVisible] = React.useState<{
    visiblePane:boolean,
    movieItem?: MoviesProps,
  }>({visiblePane:false});

  const openDrawer = React.useCallback(() => setIsVisible({visiblePane:true, movieItem: movie_item}), []);
  const closeDrawer = React.useCallback(() => setIsVisible({visiblePane:false}), []);


  const [videos, setvideos] = React.useState(null); 
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    fetch(API)
      .then((res) => res.json())
      .then((videos) => {
        setvideos(videos)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!videos) return <p>No data</p>

  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w500";
  let movie_genre = movie_genres_data.filter(({ id } ) => id ===  movie_item.genre_ids[0] );
  
  return (
    <>
      <div role="Button" className={styles.movie_card}
      onClick={openDrawer}
      >
          <Image className={styles.border_redius} src={`${BACKDROP_PATH}${movie_item.poster_path}`} objectFit='cover' style={{position: 'absolute'}} layout='fill'/>
          <div className={styles.movie_card_gradient}>
              <div className={styles.movie_info}>
                  <div className={styles.movie_title}>{movie_item.title}</div>
                  {/* <div className={styles.movie_duration}>{}</div> */}
                  <div className={styles.featured_movie_info}>
                    <span>{ movie_genre[0].name }</span>  
                    <span>•</span>
                    <span>{moment(movie_item.release_date).format('YYYY')}</span>
                  </div>
                  <div className={styles.rating_badge}>{movie_item.vote_average}</div>
              </div>
          </div>
      </div>

      <BottomPaneModal visiblePane={slidePane.visiblePane} movie_genre={movie_genre} movieItem={slidePane.movieItem} trailors = {videos} closePane={closeDrawer}  />

    </>
  )
}

export default MovieItem
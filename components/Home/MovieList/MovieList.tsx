import React, { MutableRefObject } from 'react'
import styles from '../MovieList/MovieList.module.css'
import MovieItem from './MovieItem'

import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

type Props = {
  listTitle: string,
  movies: any[] | any,
  movie_genres: any[]
}

export type MoviesProps = {
  id: number,
  genre_ids: [number],
  poster_path: string,
  title: string,
  vote_average: number,
  release_date: string,
  overview: string
}

const MovieList = ({ listTitle, movies, movie_genres }: Props) => {

  const [movieItems] = React.useState<MoviesProps[] | any>(movies);

  const slider = React.useRef<Slider>(null)

  const next = () => {
    slider.current?.slickNext();
  }
  const prev = () => {
    slider.current?.slickPrev();
  }

  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    // autoplay: true,
    draggable: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true
            }
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false
          }
      },
        {
          breakpoint: 648,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false
          }
      },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
            }
        }
    ]
};



  return (
    <>
      <div className={styles.movies_list_container}>
        <div className={styles.movie_list_section}>
          <div className={styles.movie_list_title}>{listTitle}</div>

          <div className={styles.movie_list_btn_section}>
            <div className={styles.arrows_btn} onClick={() => prev()}><ArrowBackIos /></div>
            <div className={styles.arrows_btn} onClick={() => next()}><ArrowForwardIos /></div>
          </div>
        </div>

        <Slider
          ref={slider}
          {...settings}>
          {movieItems.map((movie: any[] | any) => (
            <MovieItem
              movie={movie}
              key={movie.id}
              movie_genres={movie_genres} />
          ))}
        </Slider>

      </div>
    </>
  )
}

export default MovieList
import type { NextPage } from 'next'
import styles from '../Featured/Featured.module.css'
import React from 'react';

import  { PlayArrow,ArrowForward } from '@mui/icons-material';

import moment from 'moment';


interface Props {
  featured_movie: any[],
  movie_genres: any[]

}

interface FeaturedMovieProps {
  backdrop_path: string,  
  title: string,
  overview: string,
  
}

const Featured: NextPage<Props> = ({featured_movie, movie_genres}: Props): JSX.Element => {
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/original";

  const [featured] = React.useState<FeaturedMovieProps [] | any>(featured_movie);
  let movie_genre = movie_genres.filter(({ id } ) => id ===  featured.genre_ids[0] );


  return (
    <div className={styles.featured_container}>
        <div className={styles.featured_bg_wrap} style={{ 

            backgroundImage: `url(${BACKDROP_PATH}${featured.backdrop_path})`
            
            }}>
              <div className={styles.featured_gradient}></div>
              <div className={styles.featured_contents}>
                  <h5>Trending Now</h5>
                  <div className={styles.featured_title}>{featured.title}</div>
                  <p className={styles.featured_description}>{featured.overview}</p>
                  <div className={styles.featured_movie_info}>
                    <span>{ movie_genre[0].name }</span>
                    <span>•</span>
                    <span>{moment(featured.release_date).format('YYYY')}</span>
                    <span>•</span>
                    <div className={styles.rating_badge}>{featured.vote_average}</div>

                  </div>
                  <div className={styles.featured_btn_section}>
                    <button className={styles.play_btn}><PlayArrow/><span>Play</span></button>
                    <button className={styles.detail_btn}><ArrowForward/><span>Detail</span></button>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Featured

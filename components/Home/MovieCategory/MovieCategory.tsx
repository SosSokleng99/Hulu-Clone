import styles from '../MovieCategory/MovieCategory.module.css'
import React, { CSSProperties } from 'react';

import Slider from "react-slick";
import MovieCategoryItem from './MovieCategoryItem';


export interface CSSProps extends CSSProperties {
    '--show-bg-img': string;
    '--show-bg-gif': string;
}

export interface CategoryShowProps {
    id: number
    category_name: string
    category_image: string
    category_gif: string
    amount: number
}


const categoryShow = [
    {
        id: 1,
        category_name: 'Animation',
        category_image: 'https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/Animation.jpg?alt=media&token=1b89d18a-5fbd-4c85-87c5-9151b122a73b',
        category_gif: 'https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/Animation.gif?alt=media&token=0cd2adab-bb34-41d7-932b-ad8a25b29df9',
        amount: 37
    },
    {
        id: 2,
        category_name: 'Action',
        category_image: 'https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/Action.jpg?alt=media&token=d79f0f02-93f7-4dc5-9ec4-25f98fa2ed71',
        category_gif: 'https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/Action.gif?alt=media&token=09fd1edc-eeca-4e4d-8705-bde458fc57c3',
        amount: 46
    },
    {
        id: 3,
        category_name: 'Sci Fi',
        category_image: 'https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/Sci%20Fi.jpg?alt=media&token=f767c2db-abe2-4b9e-ad51-0fbc7604b730',
        category_gif: 'https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/Scifi.gif?alt=media&token=6dcf27bd-905c-40e7-8f33-dc13bbecc466',
        amount: 12
    },
    {
        id: 4,
        category_name: 'Fantasy',
        category_image: 'https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/Fantasy.jpg?alt=media&token=65e22c86-d411-4d89-8277-495c6246f5a7',
        category_gif: 'https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/Fantasy.gif?alt=media&token=8929c47d-b67b-48b3-9a5c-1d83c95bb5af',
        amount: 27
    },

]

const MovieCategory = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 648,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              // initialSlide: 3.5
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className={styles.movie_cates_container}>

            <Slider
                {...settings}
            >
                {categoryShow.map((cate_item: CategoryShowProps) => (
                     <MovieCategoryItem key={cate_item.id} cate_item = {cate_item}  />

                ))}

            </Slider>
            

        </div>
    )
}

export default MovieCategory

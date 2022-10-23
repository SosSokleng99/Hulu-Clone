import React from 'react'
import Image from 'next/image'
import styles from '../MovieList/BottomPaneModal.module.css'
import { PlayArrow, ArrowForward } from '@mui/icons-material';
import { MoviesProps } from './MovieList';
import { ResultsProps, VideosProps } from './MovieItem';
import Youtube from 'react-youtube'

import moment from 'moment'
import Drawer from '../Drawer/Drawer'


type Props = {
    visiblePane: boolean,
    movieItem?: MoviesProps,
    movie_genre: any[],
    trailors?: VideosProps,
    closePane: () => void;
}

interface MovieGenreProps {
    id: number,
    name: string
}

const BottomPaneModal = ({ visiblePane, movieItem, closePane, movie_genre, trailors }: Props) => {
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w500";

    const [videos] = React.useState(trailors);
    const [trailor, setTrailor] = React.useState<ResultsProps | null>(null);

    React.useEffect(() => {
        if (videos?.results) {
            const trailor = videos?.results.find(vid => vid.type == "Teaser");
            setTrailor(trailor ? trailor : videos?.results[0]);
        }
    }, [])

    return (
        <>
            <Drawer
                isOpen={visiblePane}
                onClose={closePane}
                position="bottom"
                className={undefined}
            >
                <div className={styles.popup_bottom_container}>
                    <div className={styles.movie_modal_left}>
                        <div className={styles.movie_modal_card}>
                            <Image className={styles.border_redius} src={`${BACKDROP_PATH}${movieItem?.poster_path}`} objectFit='cover' layout='fill' />
                        </div>
                        <div>
                            <div className={styles.modal_movie_title}>{movieItem?.title}</div>
                            <p className={styles.featured_description}>{movieItem?.overview}</p>
                            <div className={styles.featured_movie_info}>
                                <span>{movie_genre[0].name}</span>
                                <span>•</span>
                                <span>{moment(movieItem?.release_date).format('YYYY')}</span>
                                <span>•</span>
                                <div className={styles.rating_badge}>{movieItem?.vote_average}</div>
                            </div>
                            <div className={styles.featured_btn_section}>
                                <button className={styles.play_btn}><PlayArrow /><span>Play</span></button>
                                <button className={styles.detail_btn}><ArrowForward /><span>Detail</span></button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.movie_trailor_container}>
                        <div className={styles.movie_trailor_gredient}></div>
                        {trailor ?
                            <>
                                <Youtube
                                    videoId={trailor?.key}
                                    iframeClassName={styles.youtube_container}
                                    opts={
                                        {
                                            width: '100%',
                                            height: '100%',
                                            playerVars: {
                                                autoplay: 1,
                                                controls: 0,
                                                cc_load_policy: 0,
                                                fs: 0,
                                                iv_load_policy: 0,
                                                modestbranding: 1,
                                                rel: 0,
                                                showinfo: 0,
                                                loop: 1
                                            },
                                        }
                                    }
                                />

                            </> :
                            <div className={styles.unavailable_trailer}>No Trailer Available.</div>}
                    </div>
                </div>

            </Drawer>
        </>
    )
}

export default BottomPaneModal

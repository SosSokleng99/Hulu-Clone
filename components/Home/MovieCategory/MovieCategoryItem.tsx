import styles from '../MovieCategory/MovieCategory.module.css'


import { CategoryShowProps, CSSProps } from './MovieCategory'

interface Props {
    cate_item: CategoryShowProps
}

const MovieCategoryItem = ({ cate_item }: Props) => {


    return (
        <>
            <div className={styles.preview_show} style={{

                '--show-bg-img': `url(${cate_item.category_image})`,
                '--show-bg-gif': `url(${cate_item.category_gif})`
            } as CSSProps}>
                <div className={styles.preview_show_gradient}>
                    <div className={styles.category_title}>{cate_item.category_name}</div>
                    <div className={styles.amount_shows}>{cate_item.amount} Titles</div>
                </div>
            </div>

        </>
    )
}

export default MovieCategoryItem
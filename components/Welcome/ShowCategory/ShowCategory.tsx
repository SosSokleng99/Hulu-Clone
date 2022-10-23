import styles from '../../Welcome/ShowCategory/ShowCategory.module.css'

const ShowCategory = () => {
    return (
        <>
            <div className={styles.show_category}>
                <h5>included in all plans</h5>
                <h1>all the tv you love</h1>
                <div className={styles.description}>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu
                    Originals, kids shows, and more.</div>

                <div className={styles.category_grid}>
                    <div className={styles.cover1}>
                        <div className={styles.color_gradient}></div>
                        <div className={styles.texts}>
                            <h6>Past & Current Seasons</h6>
                            <h3>TV Shows</h3>
                        </div>
                    </div>

                    <div className={styles.cover2}>
                        <div className={styles.color_gradient}></div>
                        <div className={styles.texts}>
                            <h6>New & Classic</h6>
                            <h3>Movies</h3>
                        </div>
                    </div>

                    <div className={styles.cover3}>
                        <div className={styles.color_gradient}></div>
                        <div className={styles.texts}>
                            <h6>Groundbreaking</h6>
                            <h3>Hulu Originals</h3>
                        </div>
                    </div>

                    <div className={styles.cover4}>
                        <div className={styles.color_gradient}></div>
                        <div className={styles.texts}>
                            <h6>Add-on</h6>
                            <h3>Premium</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShowCategory

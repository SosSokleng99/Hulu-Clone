import styles from '../BasePlansCategory/BasePlanCategory.module.css'


const BasePlanCategory = () => {
    return (
        <div className={styles.base_grid}>
            <div className={styles.base_category_item}>
                <button className={styles.most_pop_indicator}>most popular</button>

                <div className={styles.plans_bold_text} >30 DAY FREE TRIAL</div>

                <h4>Hulu</h4>
                <button className={styles.base_price_btn}>$13.99 / Month.</button>
            </div>

            <div className={styles.base_category_item}>
                <button style={{visibility: 'hidden'}} className={styles.most_pop_indicator}>most popular</button>
                <div className={styles.plans_bold_text} >30 DAY FREE TRIAL</div>
                <h4>Hulu(No Ads)</h4>
                <button className={styles.base_price_btn}>$12.99/Month.</button>
            </div>
        </div>
    )
} 

export default BasePlanCategory

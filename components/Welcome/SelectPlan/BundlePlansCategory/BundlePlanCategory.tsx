import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../BundlePlansCategory/BundlePlanCategory.module.css'

import Logos from '../../../../images/logos.png'

const BundlePlanCategory: NextPage = () => {
    return (
        <div className={styles.bundle_grid}>
            <div className={styles.bundle_category_item}>
                <button className={styles.most_pop_indicator}>most popular</button>

                <div className={styles.opts_hulu_bundle_logos} >
                    <Image src={Logos} objectFit='contain' />
                </div>

                <h4>Hulu</h4>
                <button className={styles.price_btn}>$13.99 / Month.</button>
            </div>

            <div className={styles.bundle_category_item}>
                <button style={{visibility: 'hidden'}} className={styles.most_pop_indicator}>most popular</button>
                <div className={styles.opts_hulu_bundle_logos} >
                    <Image src={Logos} objectFit='contain' />
                </div>
                <h4>Hulu(No Ads)</h4>
                <button className={styles.price_btn}>$19.99/Month.</button>
            </div>

            <div className={styles.bundle_category_item}>
                <button style={{visibility: 'hidden'}} className={styles.most_pop_indicator}>most popular</button>
                <div className={styles.opts_hulu_bundle_logos} >
                    <Image src={Logos} objectFit='contain' />
                </div>
                <h4>Hulu + Live TV</h4>
                <button className={styles.price_btn}>$69.99/Month.</button>
            </div>
        </div>
    )
}

export default BundlePlanCategory

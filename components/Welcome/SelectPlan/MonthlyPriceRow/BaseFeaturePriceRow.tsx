import type { NextPage } from 'next'
import styles from '../MonthlyPriceRow/BaseFeaturePriceRow.module.css'

const BaseFeaturePriceRow: NextPage = () => {
  return (
      <>
          <div className={styles.base_features_grid_container}>
              <div className={styles.feature_title}>Monthly price.*</div>
              <div className={styles.plan_feature_col_1}>
                  <div className={styles.price_strikethru}>$21.97/mo.</div>
                  <div className={styles.feature_price}>$13.99/mo.</div>
              </div>

              <div className={styles.plan_feature_col_2}>
                  <div className={styles.price_strikethru}>$21.97/mo.</div>
                  <div className={styles.feature_price}>$12.99/mo.</div>
              </div>
          </div>
      </>
  )
}

export default BaseFeaturePriceRow

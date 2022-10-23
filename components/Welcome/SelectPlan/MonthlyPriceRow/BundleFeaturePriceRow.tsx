import type { NextPage } from 'next'
import styles from '../MonthlyPriceRow/BundleFeaturePriceRow.module.css'

const BundleFeaturePriceRow: NextPage = () => {
  return (
      <>
          <div className={styles.bundle_features_grid_container }>
              <div className={styles.feature_title}>Monthly price. Save up to $7.98/mo.*</div>
              <div className={styles.plan_feature_col_1}>
                  <div className={styles.price_strikethru}>$21.97/mo.</div>
                  <div className={styles.feature_price}>$13.99/mo.</div>
              </div>

              <div className={styles.plan_feature_col_2}>
                  <div className={styles.price_strikethru}>$21.97/mo.</div>
                  <div className={styles.feature_price}>$13.99/mo.</div>
              </div>

              <div className={styles.plan_feature_col_3}>
                  <div className={styles.feature_price}>$69.99/mo.</div>
              </div>
          </div>
      </>
  )
}

export default BundleFeaturePriceRow

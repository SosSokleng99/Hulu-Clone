import styles from '../SelectPricePlans/SelectPricePlans.module.css'

import PlansCategory from '../PlansCategory/PlansCategory'

const SelectPricePlans = () => {

    return (
        <div>
            <div className={styles.plans_header_container}>
                <h1>select your plan</h1>
                <div className={styles.description}>No hidden fees, equipment rentals, or installation appointments.</div>
                <div className={styles.plans_bold_text}>Switch plans or cancel anytime.^^</div>
                <PlansCategory />
            </div>
        </div>
    )
}

export default SelectPricePlans

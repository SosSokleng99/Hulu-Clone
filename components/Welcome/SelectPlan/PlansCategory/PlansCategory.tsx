import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../../SelectPlan/PlansCategory/PlansCategory.module.css'

import SwitchButton from '../../SwitchButton/SwitchButton'
import BundlePlanCategory from '../BundlePlansCategory/BundlePlanCategory'

import Logo from '../../../../images/logo.png'
import Logos from '../../../../images/logos.png'
import BasePlanCategory from '../BasePlansCategory/BasePlanCategory'

import BundleFeaturePriceRow from '../MonthlyPriceRow/BundleFeaturePriceRow'
import BaseFeaturePriceRow from '../MonthlyPriceRow/BaseFeaturePriceRow'

import BundleFeatureRow from '../FeatureRow/BundleFeatureRow'
import BaseFeatureRow from '../FeatureRow/BaseFeatureRow'

const PlansCategory: NextPage = () => {
    const [switchOff, setSwitch] = useState(false)
    return (
        <>
            <div className={styles.plan_header_grid_container}>
                <div className={styles.plan_opts}>
                    <div className={styles.base_plan}>
                        <p className={styles.plan_opts_text}>base plans</p>
                        <div className={styles.hulu_logo} >
                            <Image src={Logo} objectFit='contain' />
                        </div>
                    </div>

                    <SwitchButton
                        isOn={switchOff}
                        toggleSwitch={() => setSwitch(!switchOff)} />

                    <div className={styles.bundle}>
                        <p className={styles.plan_opts_text}>base plans / save</p>
                        <div className={styles.hulu_bundle_logo} >
                            <Image src={Logos} objectFit='contain' />
                        </div>
                    </div>
                </div>

                <div>
                {switchOff
                    ? <BundlePlanCategory />
                    : <BasePlanCategory />
                }
                </div>

            </div>
            {switchOff
                ? <BundleFeaturePriceRow/>
                : <BaseFeaturePriceRow />
            }

            {switchOff
                ? <BundleFeatureRow />
                : <BaseFeatureRow />
            }
        </>
    )
}

export default PlansCategory

import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../FeatureRow/BundleFeatureRow.module.css'

import Ticked from '../../../../images/feature-checked.svg'

const BundleFeatures = [
    {
        featureTitle: 'Hulu Streaming Library with thousands of episodes and movies.',
        isHulu: true,
        isHuluNoAds: true,
        isHuluLiveTV: true
    },
    {
        featureTitle: 'Most new episodes the day after they air^',
        isHulu: true,
        isHuluNoAds: true,
        isHuluLiveTV: true
    }
    ,
    {
        featureTitle: 'Access to award-winning Hulu Originals',
        isHulu: true,
        isHuluNoAds: true,
        isHuluLiveTV: true
    },
    {
        featureTitle: 'Watch on your TV, laptop, phone, or tablet',
        isHulu: true,
        isHuluNoAds: true,
        isHuluLiveTV: true
    }
    ,
    {
        featureTitle: 'Endless entertainment with Disney+, ad-free',
        isHulu: true,
        isHuluNoAds: true,
        isHuluLiveTV: true
    }
    ,
    {
        featureTitle: 'Live sports with ESPN+, now on Hulu',
        isHulu: true,
        isHuluNoAds: true,
        isHuluLiveTV: true
    },
    {
        featureTitle: 'No ads in Hulu streaming library',
        isHulu: false,
        isHuluNoAds: true,
        isHuluLiveTV: false
    },
    {
        featureTitle: 'Download and watch on Hulu',
        isHulu: false,
        isHuluNoAds: true,
        isHuluLiveTV: false
    }
    ,
    {
        featureTitle: 'Live TV with 75+ top channels. No cable required.',
        isHulu: false,
        isHuluNoAds: false,
        isHuluLiveTV: true
    },
    {
        featureTitle: 'Live TV guide to navigate channels',
        isHulu: false,
        isHuluNoAds: false,
        isHuluLiveTV: true
    },
    {
        featureTitle: 'Record Live TV with Unlimited DVR',
        isHulu: false,
        isHuluNoAds: false,
        isHuluLiveTV: true
    }
]

const BundleFeatureRow = () => {
    return (
        <>

            {BundleFeatures.map((bf: any, idx: number) => {
                return (
                    <div key={idx} className={styles.bundle_features_grid_container}>
                        <div className={styles.feature_title}>{bf.featureTitle}</div>
                        <div className={styles.plan_feature_col_1} >
                            {bf.isHulu
                                ? <Image src={Ticked} objectFit='contain' />
                                : <span>-</span>
                            }
                        </div>
                        <div className={styles.plan_feature_col_2}>
                            {bf.isHuluNoAds
                                ? <Image src={Ticked} objectFit='contain' />
                                : <span>-</span>
                            }
                        </div>

                        <div className={styles.plan_feature_col_3}>
                            {bf.isHuluLiveTV
                                ? <Image src={Ticked} objectFit='contain' />
                                : <span>-</span>
                            }
                        </div>
                    </div>

                );
            })
            }
        </>
    )
}

export default BundleFeatureRow

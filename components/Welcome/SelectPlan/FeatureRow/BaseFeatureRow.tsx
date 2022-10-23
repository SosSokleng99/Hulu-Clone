import Image from 'next/image'
import styles from '../FeatureRow/BaseFeatureRow.module.css'

import Ticked from '../../../../images/feature-checked.svg'


const BaseFeatures =[
    {
        featureTitle: 'Streaming Library with thousands of TV episodes and movies',
        isHulu: true,
        isHuluNoAds: true
    },
    {
        featureTitle: 'Most new episodes the day after they air^',
        isHulu: true,
        isHuluNoAds: true
    },
    {
        featureTitle: 'Access to award-winning Hulu Originals',
        isHulu: true,
        isHuluNoAds: true
    }, 
    {
        featureTitle: 'Watch on your TV, laptop, phone, or tablet',
        isHulu: true,
        isHuluNoAds: true
    },
    {
        featureTitle: 'Up to 6 user profiles',
        isHulu: true,
        isHuluNoAds: true
    },
    {
        featureTitle: 'Watch on 2 different screens at the same time',
        isHulu: true,
        isHuluNoAds: true
    },
    {
        featureTitle: 'No ads in streaming library',
        isHulu: false,
        isHuluNoAds: true
    },
    {
        featureTitle: 'Download and watchDownload and watch',
        isHulu: false,
        isHuluNoAds: true
    }
]
const BaseFeatureRow = () => {
  return (
      <>
       {BaseFeatures.map((bf:any, idx:number) => { 
        return(
            <div key={idx} className={styles.base_features_grid_container}>
                <div className={styles.feature_title}>{bf.featureTitle}</div>
                <div className={styles.plan_feature_col_1} >
                    {bf.isHulu
                        ? <Image src={Ticked} objectFit='contain' />
                        :  <span>-</span>
                    }
                </div>
                <div className={styles.plan_feature_col_2}>

                    {bf.isHuluNoAds
                        ? <Image src={Ticked} objectFit='contain' />
                        :  <span>-</span>
                    }
                </div>
            </div>
        );
       })}
      </>
  )
}

export default BaseFeatureRow

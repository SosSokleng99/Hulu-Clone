import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Welcome/Header/Header'
import ShowCategory from '../components/Welcome/ShowCategory/ShowCategory'
import LiveTv from '../components/Welcome/LiveTV/LiveTv'
import LiveTvTabs from '../components/Welcome/LiveTV/LiveTvTabs'
import SelectPricePlans from '../components/Welcome/SelectPlan/SelectPricePlans/SelectPricePlans'
import Footer from '../components/Welcome/Footer/Footer'


const Welcome: NextPage = () => {
  return (
    <div>
      <Head>
         <title>Stream TV and Movies Live and Online | Hulu</title>
      </Head>
      <Header/>
      <ShowCategory/>
      <LiveTv/>
      <LiveTvTabs/>
      <SelectPricePlans />
      <Footer/>
    </div>

  )
}

export default Welcome

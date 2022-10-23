import styles from '../../Welcome/LiveTV/LiveTV.module.css'

const LiveTv = () => {
  return (
      <>
          <div className={styles.live_tv}>
              <h5>hulu + live tv, now with disney+ and espn+</h5>
              <h1>Live tv make it better</h1>
              <div className={styles.description}>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live
                  sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV
                  recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment
                  with Disney+ and live sports with ESPN+. All three for a new price of $69.99/month.</div>
              <p className={styles.legal_term}>18+ only. Regional restrictions, blackouts and Live TV terms apply. Access content from
                  each service separately and access ESPN+ content via Hulu. Location data required to watch certain content.
                  Offer valid for eligible subscribers only.
                  Unlimited DVR recording is not available for on-demand shows.</p>

              <a className={styles.cta_link}>VIEW CHANNELS IN YOUR AREA →</a>
          </div>
      </>

  )
}

export default LiveTv

import type { NextPage } from 'next'
import styles from '../Footer/Footer.module.css'

const Footer: NextPage = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_links_grid}>
                        <div className={styles.link_item}  style={{color: '#586174', fontSize: '14px', fontWeight: '400', textTransform: 'uppercase'}}   >browse</div>
                        <div className={styles.link_item}>
                            <div className={styles.browse_links}>
                                <div className={styles.footer_link_list}>
                                    <div className={styles.footter_link}><a href="#">Streaming Library</a></div>
                                    <div className={styles.footter_link}><a href="#">Live TV</a></div>
                                    <div className={styles.footter_link}><a href="#">Live News</a></div>
                                    <div className={styles.footter_link}><a href="#">Live Sports</a></div>
                                </div>
                                <div className={styles.footer_link_list}>
                                    <div></div>
                                    <div className={styles.footter_link}><a href="#">TV Shows</a></div>
                                    <div className={styles.footter_link}><a href="#">Movies</a></div>
                                    <div className={styles.footter_link}><a href="#">Originals</a></div>
                                    <div className={styles.footter_link}><a href="#">Networks</a></div>
                                    <div className={styles.footter_link}><a href="#">Kids</a></div>
                                    <div className={styles.footter_link}><a href="#">FX</a></div>
                                </div>
                                <div className={styles.footer_link_list}>

                                    <div className={styles.footter_link}><a href="#">HBO Max</a></div>
                                    <div className={styles.footter_link}><a href="#">Cinemax</a></div>
                                    <div className={styles.footter_link}><a href="#">Showtime</a></div>
                                    <div className={styles.footter_link}><a href="#">STARZ</a></div>
                                </div>
                                <div className={styles.footer_link_list}>
                                    <div className={styles.footter_link}><a href="#">Hulu, Disney+ and ESPN+</a></div>
                                    <div className={styles.footter_link}><a href="#">Hulu(No Ads), Disney+ and ESPN+</a></div>
                                    <div className={styles.footter_link}><a href="#">Student Discount</a></div>
                                </div>
                            </div>
                        </div>
                        <div  className={styles.link_item} style={{color: '#586174', fontSize: '14px', fontWeight: '400', textTransform: 'uppercase'}}   >help</div>
                        <div  className={styles.link_item} >
                            <div className={styles.footer_link_list}>
                                <div className={styles.footter_link}><a href="#">Account & Billing</a></div>
                                <div className={styles.footter_link}><a href="#">Plans & Pricing</a></div>
                                <div className={styles.footter_link}><a href="#">Supported Divices</a></div>
                                <div className={styles.footter_link}><a href="#">Accessibility</a></div>
                            </div>
                        </div>
                        <div  className={styles.link_item} style={{color: '#586174', fontSize: '14px', fontWeight: '400', textTransform: 'uppercase'}}   >about us</div>
                        <div className={styles.link_item} >
                            <div className={styles.footer_link_list}>
                                <div className={styles.footter_link}><a href="#">Shop Hulu</a></div>
                                <div className={styles.footter_link}><a href="#">Press</a></div>
                                <div className={styles.footter_link}><a href="#">Jobs</a></div>
                                <div className={styles.footter_link}><a href="#">Contact</a></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.devide_line}></div>
                    <div className={styles.social_media_list} >
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19"><g fill="none"><g fill="#5E6573"><path d="M7.1 19L7.1 10.3 10.3 10.3 10.9 6.9 7.1 6.9 7.1 4.8C7.1 3.8 7.3 3.1 9 3.1L11 3.1 11 0.1C10.5 0.1 9.4 0 8 0 5.2 0 3.3 1.6 3.3 4.5L3.3 6.9 0 6.9 0 10.3 3.3 10.3 3.3 19 7.1 19Z" /></g></g></svg></div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g fill="none"><g fill="#5E6573"><path d="M17.9 12.7C17.9 14.2 17.5 15.4 16.5 16.5 15.5 17.5 14.2 17.9 12.7 17.9 11.5 18 10.3 18 9 18 7.7 18 6.5 18 5.3 17.9 3.8 17.9 2.6 17.5 1.5 16.5 0.4 15.5 0.1 14.2 0 12.7 0 11.5 0 10.3 0 9 0 7.7 0 6.5 0 5.3 0.1 3.8 0.4 2.6 1.5 1.5 2.5 0.4 3.8 0.1 5.3 0 6.5 0 7.7 0 9 0 10.3 0 11.5 0 12.7 0 14.2 0.1 15.4 0.4 16.5 1.5 17.5 2.5 17.9 3.8 17.9 5.3 18 6.5 18 7.8 18 9 18 10.2 18 11.5 17.9 12.7ZM3.7 2C3.3 2.2 3 2.3 2.7 2.7 2.3 3 2.2 3.3 2 3.7 1.5 4.9 1.6 7.7 1.6 9 1.6 10.3 1.5 13.1 2 14.3 2.2 14.7 2.3 15 2.7 15.3 3 15.7 3.3 15.8 3.7 16 4.9 16.5 7.7 16.4 9 16.4 10.3 16.4 13.1 16.5 14.3 16 14.7 15.8 15 15.7 15.3 15.3 15.7 15 15.8 14.7 16 14.3 16.5 13.1 16.4 10.3 16.4 9 16.4 7.7 16.5 4.9 16 3.7 15.8 3.3 15.7 3 15.3 2.7 15 2.3 14.7 2.2 14.3 2 13.1 1.5 10.3 1.6 9 1.6 7.7 1.6 4.9 1.5 3.7 2ZM9 13.6C6.4 13.6 4.4 11.6 4.4 9 4.4 6.4 6.4 4.4 9 4.4 11.6 4.4 13.6 6.5 13.6 9 13.6 11.5 11.6 13.6 9 13.6ZM9 6C7.3 6 6 7.4 6 9 6 10.7 7.3 12.1 9 12.1 10.7 12.1 12 10.7 12 9 12 7.4 10.7 6 9 6ZM13.8 5.3C13.2 5.3 12.7 4.8 12.7 4.2 12.7 3.6 13.2 3.1 13.8 3.1 14.4 3.1 14.9 3.6 14.9 4.2 14.9 4.8 14.4 5.3 13.8 5.3Z" /></g></g></svg></div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><g fill="none"><g fill="#5E6573"><path d="M6.3 16C13.8 16 18 9.8 18 4.5 18 4.3 18 4.2 18 4 18.8 3.4 19.4 2.7 20 1.9 19.3 2.2 18.5 2.4 17.6 2.5 18.5 2 19.1 1.2 19.4 0.3 18.6 0.8 17.8 1.1 16.8 1.3 15.6-0.1 13.5-0.4 11.9 0.5 10.3 1.3 9.4 3.2 9.8 5 6.5 4.8 3.5 3.3 1.4 0.7 0.3 2.6 0.9 4.9 2.7 6.1 2 6.1 1.4 5.9 0.8 5.6 0.8 5.6 0.8 5.7 0.8 5.7 0.8 7.6 2.2 9.3 4.1 9.6 3.5 9.8 2.9 9.8 2.2 9.7 2.8 11.4 4.3 12.5 6.1 12.5 4.6 13.6 2.8 14.2 1 14.2 0.7 14.2 0.3 14.2 0 14.2 1.9 15.4 4.1 16 6.3 16" /></g></g></svg></div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17"><g fill="none"><g fill="#5E6573"><path d="M23.5 2.7C23.2 1.6 22.4 0.8 21.4 0.5 19.5 0 12 0 12 0 12 0 4.5 0 2.6 0.5 1.6 0.8 0.8 1.6 0.5 2.7 0 4.6 0 8.5 0 8.5 0 8.5 0 12.5 0.5 14.4 0.8 15.4 1.6 16.2 2.6 16.5 4.5 17 12 17 12 17 12 17 19.5 17 21.4 16.5 22.4 16.2 23.2 15.4 23.5 14.4 24 12.5 24 8.5 24 8.5 24 8.5 24 4.6 23.5 2.7ZM9.6 12.1L9.6 4.9 15.8 8.5 9.6 12.1Z" /></g></g></svg></div>
                        <div className={styles.copyright_term} >© 2022 Hulu, LLC</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

import Image from 'next/image'
import styles from '../../Welcome/LiveTV/LiveTV.module.css'


import { useState, useRef, useEffect, MutableRefObject } from 'react'



const liveTVTabs = [
    {
        label: "Live Sports",
        description: "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
        bgImg: "https://www.hulu.com/static/hitch/s3/attachments/cl5hfizp1qtoz1v3cagkvtbk2-ckzyp3x8ycmjp1k4e5pc5p9n9-ckuh9mwjj08j01v4q0ur1z6x1-ckqwp2zlfc1zx1u362echneor-sports-v3-1600x850-min-full.jpg",
        channels: ["https://www.hulu.com/static/hitch/s3/attachments/cka35rzv205t90wgfxa4wz4q5-cbs-sports-network-logo-1.png", "https://www.hulu.com/static/hitch/s3/attachments/cka358szb054x0whh8qejv0m9-espn-network-logo.png", "https://www.hulu.com/static/hitch/s3/attachments/cka359jx805870wfx5lh6g69s-foxsports1-network-logo-0.svg", "https://www.hulu.com/static/hitch/s3/attachments/ckrp67fa801rn1u0tr0tnice2-nfl140x80.png"]

    },
    {
        label: "Breaking News",
        description: "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
        bgImg: "https://www.hulu.com/static/hitch/s3/attachments/ckzyp4x986iio1k7rkj43368r-ckuh9mwg007ws1v4zm8i4kk07-ckqiozsqemxsf1u3mw3ihh0ti-news-1600x850-2x-full.jpg",
        channels: ["https://www.hulu.com/static/hitch/s3/attachments/cka35p3nn05uc0wgpnfhqdxxy-abc-news-live-network-logo.png", "https://www.hulu.com/static/hitch/s3/attachments/cka35pfke05ur0wgpdxhaveec-cnn-network-logo.svg", "https://www.hulu.com/static/hitch/s3/attachments/cka35pv5705qs0wgflaaelolw-msnbc-network-logo.png", "https://www.hulu.com/static/hitch/s3/attachments/cka35ppx405v60wgp6e9ybu49-foxnews-network-logo.svg"]

    },
    {
        label: "Biggest Event",
        description: "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
        bgImg: "https://www.hulu.com/static/hitch/s3/attachments/ckzyp5obb6ijq1k7rdave9sam-ckuh9mwj308re1v24oa5phjn9-ckqip2n0m9n5t1u2zln68cft8-biggest-events-1600x850-2x-full.jpg",
        channels: ["https://www.hulu.com/static/hitch/s3/attachments/ckuh9udpy09191v07onislhds-ckpzuowwe0pmj184yae00c9dd-emmys-logo-full.png", "https://www.hulu.com/static/hitch/s3/attachments/ckuh9vr6l08uy1v4qqv9nqizi-ckpzut3390pzj183lizxdtgfg-golden-globe-logo-full.png", "https://www.hulu.com/static/hitch/s3/attachments/ckuh9wmfo08gv1v4mntr796of-ckpzutn9o0pt0184yxvnzwqx2-grammys-logo-full.png", "https://www.hulu.com/static/hitch/s3/attachments/ckuh9xcu908hx1v4mbds1x83w-ckpzuu4j00q0z183lbsz61e4i-oscars-logo-full.png"]
    }

]


const LiveTvTabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    const tabsRef = useRef<HTMLButtonElement[] | null[]>([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        }

        setTabPosition();
        window.addEventListener("resize", setTabPosition);

        return () => window.removeEventListener("resize", setTabPosition);
    }, [activeTabIndex]);

    return (
        <>
            <div className={styles.live_tv_section}>
                <div className={styles.bg_wrap} style={{

                    backgroundImage: `url(${liveTVTabs[activeTabIndex].bgImg})`,

                }}>

                    <div className={styles.live_tabs}>
                        <div className={styles.live_tab_spotlight}>
                            <div className={styles.live_tab_buttons}>
                                {liveTVTabs.map((liveTVTab: any, idx: number) => {
                                    return (
                                        <button
                                            key={idx}
                                            ref={(el) => (tabsRef.current[idx] = el)}
                                            className = {activeTabIndex === idx ? styles.lives_btn_tab_active: styles.lives_btn_tab}
                                            onClick={() => setActiveTabIndex(idx)}
                                        >
                                            {liveTVTab.label}
                                        </button>
                                    );
                                })}
                            </div>
                            <span className={styles.tab_line} style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }} />
                        </div>
                        <div className={styles.tab_content}>
                            <h1>{liveTVTabs[activeTabIndex].label}</h1>
                            <p className={styles.description}>{liveTVTabs[activeTabIndex].description}</p>
                            <div className={styles.channels}>

                                {liveTVTabs[activeTabIndex].channels.map((channel) => {
                                    return (
                                        <div className={styles.channel_bg}>
                                            <div className={styles.channel}>
                                                <Image 
                                                    src={channel} 
                                                    width={40}
                                                    height={30} layout="intrinsic" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveTvTabs

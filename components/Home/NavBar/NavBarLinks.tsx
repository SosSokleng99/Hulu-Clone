import React from 'react'
import styles from '../NavBar/NavBarLinks.module.css'
import { LineWeightOutlined, BoltOutlined, LibraryAddCheckOutlined, SearchOutlined, AccountCircleOutlined } from '@mui/icons-material';



const NavBarLinks = () => {

    return (
        <div className={styles.nav_bar_links} >
              <div>
                <LineWeightOutlined /><span>Browse</span>
              </div>
              <div>
                <BoltOutlined /><span>Live TV</span>
              </div>
              <div>
                <LibraryAddCheckOutlined /><span>My Stuff</span>
              </div>
        </div>
    )
    
    
}

export default NavBarLinks



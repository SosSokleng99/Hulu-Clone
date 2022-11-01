
import React from 'react'
import Image from 'next/image'
import styles from '../Navbar/NavBar.module.css'


import Logo from '../../../../images/logo.png'
import { SearchOutlined } from '@mui/icons-material';
import UserProfileItem from '../UserProfile/UserProfileItem'
import SwitchMUI from '../SwitchMUI'
import { ThemeContext } from '../../../ThemeProvider'

import { useMediaQuery } from "react-responsive";


import NavBarLinks from '../NavBarLinks';


const NavBar = () => {

  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const isMobile = useMediaQuery({ maxWidth: 768 });


  return (
    <div className={styles.navbar_container}>

      <div className={styles.left_nav_items}>
        <div className={styles.hulu_nav_logo} >
          <Image src={Logo} objectFit='contain' />
        </div>
        {!isMobile && <NavBarLinks />}
        
      </div>

      <div className={styles.right_nav_items}>
        <div>
          <SearchOutlined />
          <span>Search</span>
        </div>
        {/* <div>
          <SwitchMUI onClick={toggleTheme} checked={theme} />
        </div> */}
        <div>
          <UserProfileItem isMobile = {isMobile} />
        </div>
      </div>
    </div>
  )
}

export default NavBar
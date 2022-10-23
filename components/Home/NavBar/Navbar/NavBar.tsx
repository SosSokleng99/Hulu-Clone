
import React from 'react'
import Image from 'next/image'
import styles from '../Navbar/NavBar.module.css'


import Logo from '../../../../images/logo.png'
import  { LineWeightOutlined, BoltOutlined, LibraryAddCheckOutlined, SearchOutlined, AccountCircleOutlined } from '@mui/icons-material';
import UserProfileItem from '../UserProfile/UserProfileItem'
import SwitchMUI from '../SwitchMUI'
import { ThemeContext } from '../../../ThemeProvider'



const NavBar = () => {

  const {theme, toggleTheme} = React.useContext(ThemeContext);  

  return (
    <div className={styles.navbar_container}>
      <div className={styles.left_nav_items}>
        <div className={styles.hulu_nav_logo} >
          <Image src={Logo} objectFit='contain' />
        </div>
        <div>
          <LineWeightOutlined  /><span>Browse</span>
        </div>
        <div>
          <BoltOutlined /><span>Live TV</span>
        </div>
        <div>
          <LibraryAddCheckOutlined /><span>My Stuff</span>
        </div>
      </div>

      <div className={styles.right_nav_items}>
        <div>
          <SearchOutlined /><span>Search</span>
        </div>
        <div>
          <SwitchMUI onClick={toggleTheme} checked = {theme}/>
        </div>
        <div>
          <UserProfileItem />
        </div>
      </div>
    </div>
  )
}

export default NavBar
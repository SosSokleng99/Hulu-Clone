
import React from 'react'
import styles from '../UserProfile/UserProfileItem.module.css'


import { supabase } from '../../../../lib/initSupabase';
import router from 'next/router';

import {useUser} from '../../../../lib/UserContext'
import {
	Menu,
	MenuList,
	MenuButton,
	MenuItem,
	MenuLink,
    MenuItems,
} from "@reach/menu-button";

import { ThemeContext } from '../../../ThemeProvider'
import SwitchMUI from '../SwitchMUI';
import { DarkMode } from '@mui/icons-material';

import NavBarLinks from '../NavBarLinks';

interface Props {
    isMobile: boolean
}


const UserProfileItem = ({isMobile}: Props) => {

  const { theme, toggleTheme } = React.useContext(ThemeContext);


    // const [isOpen, setOpen] = React.useState(false)
    // const toggleDropdown = () => setOpen(!isOpen)


    const auth = useUser()
    const userName:string = auth.user?.user_metadata.firstName
    const firstCharName = auth.user?.user_metadata.firstName[0]
    

    async function handleSignOut() {
            await supabase.auth.signOut()
            router.push('/welcome')
    }

    const getTextColor = ()  => {
        if(theme) return styles.user_name_text_dark;
        else return styles.user_name_text_white;
    }

    const getDropDownBG = () => {
        if(theme) return styles.drop_down_bg_dark;
        else return styles.drop_down_bg_white;
    }
    
    return (

        <Menu>
			<MenuButton  className={getTextColor()} style={{border: 'none', backgroundColor: 'transparent',  fontWeight: '600', fontFamily: "'Rubik', sans-serif"}}>
                <div className={styles.profile_item} >
                   <div className={styles.profile_circle}>{firstCharName}</div>
                   <span  className={styles.user_name}>{userName}</span>
                </div>
			</MenuButton>
			<MenuList className={getDropDownBG()} style={{border: 'none', padding: '10px', borderRadius: '4px', top: '10px', position: 'absolute'}}>
                {isMobile &&  
                    <MenuItem onSelect={() => {}}>
                    <NavBarLinks />
                    </MenuItem>
                }
                <MenuItems className={styles.menu_items}>
                        <DarkMode />
                        <span>Night mode: {theme ? 'On' : 'Off'} </span>
                        <SwitchMUI onClick={toggleTheme} checked={theme} />
                </MenuItems>
                
				<MenuItem className={styles.green_highlight} onSelect={() => {}}>Profile</MenuItem>
				<MenuItem className={styles.red_highlight} onSelect={handleSignOut}>Log out</MenuItem>
			</MenuList>
		</Menu>



        // <div className={styles.dropdown_menu} onClick={toggleDropdown}>
        //     <div className={styles.profile_item} >
        //         <div className={styles.profile_circle}>{firstCharName}</div>
        //         <span className={styles.user_name}>{userName}</span>
        //     </div>



        //     <div className={styles.dropdown_items} style={{display: isOpen ? 'block' : 'none'}}>
        //         <div onClick={handleSignOut}>Log out</div>

        //     </div>
        // </div>
    )
}

export default UserProfileItem
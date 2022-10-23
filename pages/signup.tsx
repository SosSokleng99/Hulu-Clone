import type { NextApiRequest, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import React from 'react';
import { useState } from "react";

import { supabase } from '../lib/initSupabase';


import styles from '../styles/Signup.module.css'


const Signup: NextPage = ({logout}: any) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [message, setMessage] = useState<{message: string, type: string}>({message: "", type: ""})

    React.useEffect(() => {
        if (logout) {
            signOut()
        }
    }, [])

    async function signOut() {
        await supabase.auth.signOut()
    }

    async function handleSignUp(e: any) {
        e.preventDefault();
        if (!firstName) return
        if (!lastName) return
        if (!email) return
        if (!password) return

        const { user, error } = await supabase.auth.signUp(
            {
              email,
              password
            },
            {
              data: {
                firstName,
                lastName
              }
            }
          )

          if (error) {
            console.log(error);
            setMessage({message: error.message ? error.message : "Something went wrong!!", type:"error"});
            
          } else {
            setMessage({message: `Confirmation link has beent sent to email: ${user?.email}`, type: "success"})
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
          } 
          
    }

    
    return (
        <div className={styles.login}>
            <Head>
                <title>Hulu | Login</title>
            </Head>
            <nav className={styles.nav}>
                <div>
                    <svg viewBox="0 -2 61 24" height="24" width="61"><path d="M9.57046613 6.24096927h-3.1015504c-1.0875017 0-1.63435327.29263768-1.63435327.29263768V0H0v20h4.83456246v-8.0704467c0-.7137436.58067743-1.29171 1.2958127-1.29171h2.81374862c.7162628 0 1.29524892.5779664 1.29524892 1.29171V20h4.8359719v-8.6950777c0-3.65670596-2.4444829-5.06395303-5.50487847-5.06395303zm46.48012787 0v8.06932223c0 .714868-.579268 1.2931156-1.294967 1.2931156h-2.8134668c-.7162628 0-1.2952489-.5782476-1.2952489-1.2931156V6.24096927h-4.8368175V14.712844c0 3.4627386 2.2220777 5.287156 5.5062878 5.287156h4.7347762v-.0247379c3.0245965 0 4.8354081-2.1465718 4.8354081-5.2624181V6.24096927H56.050594zM28.7728487 14.3102915c0 .714868-.5798318 1.2931156-1.2955308 1.2931156h-2.8137486c-.7162628 0-1.2955308-.5782476-1.2955308-1.2931156V6.24096927h-4.8359719V14.712844c0 3.4627386 2.2220778 5.287156 5.506006 5.287156h4.7347761v-.0247379c3.0248785 0 4.8359719-2.1465718 4.8359719-5.2624181V6.24096927h-4.8359719v8.06932223zM37.294431 20h4.8365357V0H37.294431v20z" fillRule="evenodd"></path></svg>
                </div>
            </nav>

            <div className={styles.form_message_container}>
                {message && message.message && <div className={styles.form_message}>{message.message}</div>}

            </div>

            {message.type === "success" ? null: 
                <div className={styles.form_container}>
                <h3>Sign up</h3>
                    <form className={styles.form_wrapper} onSubmit={handleSignUp}>
                        <div className={styles.form_input}>
                            <label><b>First Name</b></label>
                            <input type="text" placeholder="Enter First Name" name="uname" required onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className={styles.form_input}>
                            <label><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Last Name" name="uname" required onChange={e => setLastName(e.target.value)} />
                        </div>
                        <div className={styles.form_input}>
                            <label><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="uname" required onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.form_input}>
                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className={styles.login_btn} >Sign up</button>

                        <div className={styles.forword_signup_text}>
                           Have an account? <Link href={"/login"}><a>Log in</a></Link>
                        </div>
                    </form>
            </div>
            
            }
        </div>
    )
}

export default Signup

export async function getServerSideProps({req}: NextApiRequest | any) {
    const {user} = await supabase.auth.api.getUserByCookie(req)

    if (user) return {props: {}, redirect: {destination: '/'}}

    return {
        props: {
            logout: true
        }
    }
}





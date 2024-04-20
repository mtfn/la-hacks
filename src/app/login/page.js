'use client'
import Link from 'next/link'

import { useUser } from "@auth0/nextjs-auth0/client"
import {useState} from 'react';
import { Navbar } from '../components/navbar';

export default function Login() {
    // const { user, error, isLoading } = useUser();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('')

    // const handleSubmit = async(e) => {
    //     e.preventDefault();

    //     const response = await fetch('/api/login')
    // }
    return (
        <>
        <Navbar />
        <div style={{width:"100%",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
            <div style={{width:"30%",height:"60%",backgroundColor:"#82aef5",marginLeft:"auto", marginRight:"auto"}}>
                <h1 style={{marginTop:"0",textAlign:"center",fontSize:"3rem"}}>Log In</h1>
                <form style={{marginLeft:"auto"}}>
                    <input type="text" name="email" placeholder="johndoe@lahacks.com" style={{color:"black"}}></input>
                    <input type="password" name="password" placeholder="" style={{color:"black"}}></input>

                </form>
            </div>
        </div>
        </>
        
    )
}
import React from 'react'
import { useState } from 'react'

function Loginpage() {
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')

     function login(){
        const user = {
            email,
            password
        }
        console.log('user');
    }

    return (
        <div class="container">
        <div class="screen">
            <div class="screen__content">
                <form class="login">
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input type="text" class="login__input" placeholder="Email" value = {email}
                     onChange={(e)=>(setemail(e.target.value))}/>
                    </div>
                    <div class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input type="password" class="login__input" placeholder="Password" value = {password}
                     onChange={(e)=>(setpassword(e.target.value))}/>
                    </div>
                    <button class="button login__submit">
                        <span class="button__text">Log in</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>				
                </form>
            </div>
            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>		
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
        
    )
}

export default Loginpage

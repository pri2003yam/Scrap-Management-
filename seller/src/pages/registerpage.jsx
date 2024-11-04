import React from 'react'
import { useState } from 'react'

function Registerpage() {
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const[city,setcity] = useState('')
    const[locality,setlocality] = useState('')

     function register(){
        const user = {
            name,
            email,
            password,
            city,
            locality
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
                        <input type="text" class="login__input" placeholder="Name" value = {name}
                     onChange={(e)=>(setname(e.target.value))}/>
                    </div>
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
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input type="text" class="login__input" placeholder="City" value = {city}
                     onChange={(e)=>(setcity(e.target.value))}/>
                    </div>
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input type="text" class="login__input" placeholder="Locality" value = {locality}
                     onChange={(e)=>(setlocality(e.target.value))}/>
                    </div>
                    <button type="button" class="btn btn-outline-secondary mt-3" onClick={register}>Sign Up</button>		
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

export default Registerpage

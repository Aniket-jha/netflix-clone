import React,{useState} from 'react'
import classes from "./Login.module.css"
import logo from "../../assets/logo.png"
import Signin from "./Signin"
const Login = () => {
    const [signin,setSignin]=useState(false)

    const signinHandler=()=>{
        setSignin(true)
    }
    return (
        <div className={classes.loginScreen}>
            <div>
            <img src={logo} alt="logo"  className={classes.loginLogo}/>
            {!signin && <button className={classes.signinButton} onClick={signinHandler} >Sign In</button>}
            <div className={classes.loginGradient} />
            </div>
            <div className={classes.loginBody}>
            {signin ? <Signin/> :
                <>
                <h1>Enjoy ad free and Unlimited Movies, TV show and many more</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className={classes.Input}>
                    <form >
                        <input type="email" placeholder="Email-address" />
                        <button className={classes.startButton} >Get Started</button>
                    </form>
                </div>
                </>}
            </div>
        </div>
    )
}

export default Login

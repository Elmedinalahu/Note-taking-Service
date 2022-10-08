import './App.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    return (
        
        <div className='container'> 
        <div className='loginimg'></div>
            <div className="signUp">
                <h2>SIGN UP</h2>
                <form method="Post" action="">
                    <div class="fields">
                    <span class="fa fa-envelope"></span>
                    <input type="email
                    " placeholder="Email" />
                    </div>
                    <div class="fields">
                    <span class="fa fa-lock"></span>
                    <input type="password" placeholder="New Password" maxLength={20} />
                    </div>
                    <div class="fields">
                    <span class="fa fa-lock"></span>
                    <input type="password" placeholder="Confirm Password" maxLength={20} />
                    </div>
                    <button onClick={() => {
                        navigate('/home');
                    }} id="continue">Sign up</button>
                    <div>
                        <span>Already have an account? </span>
                        <a onClick={() => {
                            navigate('/')
                        }}>Login</a>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
export default SignUp;
import './App.css';
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const navigate = useNavigate();
    return (
        <div className='container'>
            
            <div className='loginimg'></div>
            <div className="login">
            <h2>LOGIN</h2>
            <form method = "Post" action = "">
                <div class="fields">
                <span class="username fa fa-user"></span>
                <input type="Email" placeholder="Email" />
                </div>
                <div class="fields">
                <span class="fa fa-lock"></span>
                <input type="password" placeholder="Password" maxLength={20} />
                </div>
                <button onClick={()=>{
                    navigate('/home');
                }} id="continue">Log in</button>
                <div className='sign'>
                <span>Don't have an account? </span>
                <a onClick={()=>{
                        navigate('/signup');
                }}>Sign Up</a>
                </div>
            </form>
            </div>
        </div>
    );
}
export default Login;
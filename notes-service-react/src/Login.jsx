import './App.css';
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const navigate = useNavigate();
    return (
        <div>
            <div className="login">
            <h1>Notes</h1>
            <form method = "Post" action = "">
                <div class="fields">
                <span class="username fa fa-user"></span>
                <input type="text" placeholder="Username" />
                </div>
                <div class="fields">
                <span class="fa fa-lock"></span>
                <input type="password" placeholder="Password" maxLength={20} />
                </div>
                <button onClick={()=>{
                    navigate('/home');
                }} id="continue">Log in</button>
                <p>Don't have an account?</p>
                <a onClick={()=>{
                        navigate('/signup');
                }}>Register</a>
            </form>
            </div>
        </div>
    );
}
export default Login;
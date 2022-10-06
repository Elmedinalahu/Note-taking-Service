import './App.css';

const SignUp = () => {
    return (
        <div>
            <div className="signUp">
                <h1>Notes</h1>
                <form method="Post" action="">
                    <div class="fields">
                    <span class="username fa fa-user"></span>
                    <input type="text" placeholder="New Username" />
                    </div>
                    <div class="fields">
                    <span class="fa fa-envelope"></span>
                    <input type="email
                    " placeholder="Email" maxLength={20} />
                    </div>
                    <div class="fields">
                    <span class="fa fa-lock"></span>
                    <input type="password" placeholder="New Password" maxLength={20} />
                    </div>
                    <div class="fields">
                    <span class="fa fa-lock"></span>
                    <input type="password" placeholder="Confirm Password" maxLength={20} />
                    </div>
                    <button id="continue">Sign Up</button>
                    <p>Already have an account?</p>
                    <a to="/Login">Login</a>
                    
                </form>
            </div>
        </div>
    );
}
export default SignUp;
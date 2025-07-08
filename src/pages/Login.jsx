import AuthLogin from "../components/Layout/AuthLogin"
import From from "../components/Fragments/FromLogin"



function Login () {
    return (
        <AuthLogin title="Login Page" type="Login" >
            <From />
        </AuthLogin>
    )
}

export default Login
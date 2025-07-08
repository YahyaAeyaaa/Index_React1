import AuthLogin from "../components/Layout/AuthLogin"
import FromRegis from "../components/Fragments/FormRegister"

function Register () {
    return (
        <AuthLogin title="Register Page" type="Register" >
            <FromRegis />
        </AuthLogin>
    )
}

export default Register
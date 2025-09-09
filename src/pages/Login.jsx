import Heading from "../UI/Heading"
import LoginLayout from "../login/LoginLayout";

function Login() {
    return (
        <div className="h-screen flex justify-center items-center flex-col gap-2 bg-slate-200">
            <Heading />
            <LoginLayout />
        </div>
    )
}

export default Login;
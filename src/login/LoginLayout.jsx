import { useState } from "react";
import { useLogin } from "./useLogin";
import LoginSpinner from "./LoginSpinner";

function LoginLayout() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, loggingIn } = useLogin();

    function handleSubmit(e) {
        e.preventDefault();

        if(!email || !password) return;
        login({email, password}, {
            onSettled: () => {
                setEmail('');
                setPassword('');
            }
        });
    }
    return (
        <div onSubmit= {handleSubmit} className="bg-gray-50 px-5 py-5 rounded-lg flex  flex-col w-[30%] border-2 border-stone-300">
            <h1 className=" self-center text-xl mb-4 uppercase text-stone-600 font-semibold">Login</h1>
            <form>
                <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor="email" className="text-lg text-stone-600 px-1">Email Adress:</label>
                    <input type="email" 
                            id= "email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loggingIn}
                           className=" border-2 rounded-lg border-gray-200 focus:border-gray-300 px-2 py-1" />
                </div>

                <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor="password" className="text-lg text-stone-600 px-1">Password:</label>
                    <input type="password" 
                           id="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           disabled={loggingIn}
                           className=" border-2 rounded-lg border-gray-200 focus:border-gray-300 px-2 py-1" />
                </div>
                <div className="py-4">
                    <button className=" py-1 px-2 text-center bg-activeBorder  text-white rounded-lg w-full font-semibold">{!loggingIn ? "Login" : <LoginSpinner />}</button>
                </div>
            </form>
        </div>
    )
}

export default LoginLayout;
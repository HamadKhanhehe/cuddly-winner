import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="w-full h-screen">
                <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/6e49f73d-f955-4b69-a57c-468e22aadb27/PK-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"> </div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold " >Sign Up   </h1>
                            <form onSubmit={handleSubmit} className="w-full  flex flex-col py-4">
                                <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rouded" type="email" placeholder="Email" autoComplete="email" />
                                <input onChange={(e) => setPassword(e.target.value)} className="p-3  my-2  bg-gray-700 rouded" type="password" placeholder="Password" autoComplete="current-password" />
                                <button className="bg-red-600 py-3  my-6 rounded font-bold">Sign Up</button>
                                <p className="py-4"><span className="text-gray-600">Already subscribed to Netflix?</span><Link to={"/login"}>Sign in</Link> </p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





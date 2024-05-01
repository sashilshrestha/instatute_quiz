import React, { useState } from "react";

const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Email:", email);
        console.log("Password:", password);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl shadow-xl">
                <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
                    <div className=''>
                        <div className="hero min-h-full rounded-l-xl bg-base-200">
                            <div className="hero-content py-12">
                                <div className="max-w-md">
                                    <h1 className='text-3xl text-center font-bold'><img src="/logo192.png" className="w-12 inline-block mr-2 mask mask-circle" alt="dashwind-logo" />DashWind</h1>
                                    <div className="text-center mt-12"><img src="./intro.png" alt="Dashwind Admin Template" className="w-48 inline-block"></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                        <form onSubmit={submitForm}>
                            <div className="mb-4">
                                <div className={`form-control w-full`}>
                                    <label className="label">
                                        Email / UserName
                                        <span className={"label-text text-base-content"}></span>
                                    </label>
                                    <input type={"text"} value={email} placeholder={""} onChange={updateEmail} className="input input-bordered w-full" />
                                </div>
                                <div className={`form-control w-full`}>
                                    <label className="label">
                                        Password
                                        <span className={"label-text text-base-content"}></span>
                                    </label>
                                    <input type={"password"} value={password} placeholder={""} onChange={updatePassword} className="input input-bordered w-full" />
                                </div>
                            </div>
                            <button type="submit" className={"btn mt-2 w-full btn-primary"}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

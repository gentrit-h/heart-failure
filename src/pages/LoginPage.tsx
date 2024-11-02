import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.webp'
import AlertModal from '../components/AlertModal';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate('/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (

        <div className="bg-gray-50 font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-md w-full">
                    <a href="javascript:void(0)"><img
                        src={logo} alt="logo" className='w-40 mb-8 mx-auto block' />
                    </a>

                    <div className="p-8 rounded-2xl bg-white shadow">
                        <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
                        {
                            error && (
                                <AlertModal title='Invalid Credentials' description='Email or password are incorrect'/>
                            )
                        }
                        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">User name</label>
                                <div className="relative flex items-center">
                                    <input name="username" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                        placeholder="Enter user name"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                        placeholder="Enter password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label  className="ml-3 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="jajvascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div className="!mt-8">
                                <button type="submit" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                    Sign in
                                </button>
                            </div>
                            <p className="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <a href="javascript:void(0);" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        // <div classNameName="min-h-screen flex items-center justify-center bg-gray-50 py-16">
        //   <div classNameName="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        //     <div classNameName="hidden lg:block lg:w-1/2 bg-cover" 
        //          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }} />

        //     <div classNameName="w-full p-8 lg:w-1/2">
        //       <h2 classNameName="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
        //       <p classNameName="text-xl text-gray-600 text-center">Welcome back!</p>

        //       {error && (
        //         <div classNameName="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
        //           {error}
        //         </div>
        //       )}

        //       <form classNameName="mt-8 space-y-6" onSubmit={handleSubmit}>
        //         <div classNameName="space-y-4">
        //           <div>
        //             <label htmlFor="username" classNameName="block text-gray-700 text-sm font-bold mb-2">Username</label>
        //             <input
        //               id="username"
        //               name="username"
        //               type="text"
        //               required
        //               classNameName="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        //               placeholder="Username"
        //               value={username}
        //               onChange={(e) => setUsername(e.target.value)}
        //             />
        //           </div>

        //           <div>
        //             <div classNameName="flex justify-between">
        //               <label htmlFor="password" classNameName="block text-gray-700 text-sm font-bold mb-2">Password</label>
        //               <a href="#" classNameName="text-xs text-gray-500">Forget Password?</a>
        //             </div>
        //             <input
        //               id="password"
        //               name="password"
        //               type="password"
        //               required
        //               classNameName="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        //               placeholder="Password"
        //               value={password}
        //               onChange={(e) => setPassword(e.target.value)}
        //             />
        //           </div>
        //         </div>

        //         <button
        //           type="submit"
        //           classNameName="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
        //         >
        //           Login
        //         </button>
        //       </form>

        //       <div classNameName="mt-4 flex items-center justify-between">
        //         <span classNameName="border-b w-1/5 lg:w-1/4"></span>
        //         <a href="#" classNameName="text-xs text-gray-500 uppercase">or sign up</a>
        //         <span classNameName="border-b w-1/5 lg:w-1/4"></span>
        //       </div>
        //     </div>
        //   </div>
        // </div>
    );
};

export default LoginPage;

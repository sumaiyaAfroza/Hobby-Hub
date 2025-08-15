// import React, { useState, useEffect } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Login attempt:', { email, password });
//     // Add your login logic here
//   };

//   const googleForm = () => {
//     console.log('Google login attempt');
//     // Add your Google login logic here
//   };

//   // Load Lottie animation
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
//     script.onload = () => {
//       if (window.lottie) {
//         window.lottie.loadAnimation({
//           container: document.getElementById('lottie-container'),
//           renderer: 'svg',
//           loop: true,
//           autoplay: true,
//           path: 'https://lottie.host/4db68bfc-67dc-4ce8-82ec-b5cf2a013e87/qKnmwhDnh5.json' // Login animation
//         });
//       }
//     };
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden relative">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-yellow-500/5 rounded-full blur-3xl animate-ping"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-6xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-8 items-center">
          
//           {/* Left Side - Lottie Animation */}
//           <div className="hidden lg:flex flex-col items-center justify-center p-8">
//             <div className="mb-8 text-center">
//               <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent mb-4">
//                 Welcome Back
//               </h1>
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 Experience seamless authentication with our modern login system
//               </p>
//             </div>
            
//             {/* Lottie Animation Container */}
//             <div className="w-full max-w-lg">
//               <div 
//                 id="lottie-container" 
//                 className="w-full h-96 bg-gradient-to-br from-green-900/20 to-amber-900/20 rounded-3xl backdrop-blur-sm border border-green-500/20 flex items-center justify-center"
//               >
//                 {/* Fallback content while Lottie loads */}
//                 <div className="text-center">
//                   <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-spin">
//                     <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-400">Loading animation...</p>
//                 </div>
//               </div>
//             </div>

//             {/* Features */}
//             <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-lg">
//               <div className="text-center p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/20">
//                 <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-xs text-gray-300">Secure</span>
//               </div>
//               <div className="text-center p-4 bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-xl border border-amber-500/20">
//                 <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="text-xs text-gray-300">Fast</span>
//               </div>
//               <div className="text-center p-4 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/20">
//                 <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <span className="text-xs text-gray-300">Easy</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Login Form */}
//           <div className="flex items-center justify-center p-4">
//             <div className="w-full max-w-md">
//               {/* Mobile Title (visible on small screens) */}
//               <div className="lg:hidden text-center mb-8">
//                 <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent mb-2">
//                   Welcome Back
//                 </h1>
//                 <p className="text-gray-400">Sign in to continue</p>
//               </div>

//               {/* Login Card */}
//               <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700/50 relative overflow-hidden">
//                 {/* Card Background Effects */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-amber-500/5"></div>
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-amber-500"></div>
                
//                 <div className="relative z-10">
//                   <div className="text-center mb-8">
//                     <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
//                     <p className="text-gray-400 text-sm">Enter your credentials to access your account</p>
//                   </div>

//                   <div className="space-y-6">
//                     {/* Email Field */}
//                     <div className="relative group">
//                       <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="peer w-full h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl px-4 text-white placeholder-transparent focus:outline-none focus:border-green-500 transition-all duration-300"
//                         placeholder="Email address"
//                         required
//                       />
//                       <label
//                         htmlFor="email"
//                         className="absolute left-4 -top-3 text-green-400 text-sm bg-gray-800 px-2 rounded peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent transition-all peer-focus:-top-3 peer-focus:text-green-400 peer-focus:text-sm peer-focus:bg-gray-800"
//                       >
//                         Email Address
//                       </label>
//                     </div>

//                     {/* Password Field */}
//                     <div className="relative group">
//                       <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="peer w-full h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl px-4 text-white placeholder-transparent focus:outline-none focus:border-green-500 transition-all duration-300"
//                         placeholder="Password"
//                         required
//                       />
//                       <label
//                         htmlFor="password"
//                         className="absolute left-4 -top-3 text-green-400 text-sm bg-gray-800 px-2 rounded peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent transition-all peer-focus:-top-3 peer-focus:text-green-400 peer-focus:text-sm peer-focus:bg-gray-800"
//                       >
//                         Password
//                       </label>
//                     </div>

//                     {/* Remember Me & Forgot Password */}
//                     <div className="flex items-center justify-between">
//                       <label className="flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only" />
//                         <div className="relative">
//                           <div className="w-5 h-5 bg-gray-700 border-2 border-gray-600 rounded"></div>
//                           <div className="absolute top-0 left-0 w-5 h-5 bg-gradient-to-r from-green-500 to-amber-500 rounded opacity-0 transition-opacity"></div>
//                         </div>
//                         <span className="ml-3 text-sm text-gray-400">Remember me</span>
//                       </label>
//                       <button className="text-sm text-green-400 hover:text-green-300 transition-colors">
//                         Forgot password?
//                       </button>
//                     </div>

//                     {/* Login Button */}
//                     <button
//                       onClick={handleLogin}
//                       className="w-full h-14 bg-gradient-to-r from-green-500 via-emerald-500 to-amber-500 hover:from-green-600 hover:via-emerald-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-500/25"
//                     >
//                       Sign In
//                     </button>

//                     {/* Divider */}
//                     <div className="relative my-6">
//                       <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-gray-700"></div>
//                       </div>
//                       <div className="relative flex justify-center text-sm">
//                         <span className="px-4 bg-gray-800 text-gray-400">Or continue with</span>
//                       </div>
//                     </div>

//                     {/* Google Login */}
//                     <button
//                       onClick={googleForm}
//                       className="w-full h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl flex items-center justify-center space-x-3 text-white hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
//                     >
//                       <svg className="w-5 h-5" viewBox="0 0 24 24">
//                         <path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                         <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                         <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                         <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                       </svg>
//                       <span>Continue with Google</span>
//                     </button>

//                     {/* Sign Up Link */}
//                     <div className="text-center pt-6">
//                       <p className="text-gray-400 text-sm mb-4">
//                         Don't have an account?
//                       </p>
//                       <button 
//                         onClick={() => console.log('Navigate to register')}
//                         className="bg-gradient-to-r from-amber-500 via-yellow-500 to-green-500 hover:from-amber-600 hover:via-yellow-600 hover:to-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
//                       >
//                         Create Account
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// ============================================================






import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router'; // Fixed import to use react-router-dom
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  login(email, password)
    .then((result) => {
      console.log('Login Successful:', result.user);
      navigate('/');
    })
    .catch((error) => {
      console.error('Login Error:', error.message);

      // ✅ Show toast error message
      toast.error(`Login failed: ${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    });
};

  const googleForm = () => {
    googleLogin()
      .then((result) => {
        console.log('Google Login Successful:', result.user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Google Login Error:', error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 dark:from-cyan-600 dark:to-sky-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Login
              </h1>
            </div>
            <form onSubmit={handleLogin}>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-rose-600 dark:focus:border-rose-500 bg-transparent"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-400 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-rose-600 dark:focus:border-rose-500 bg-transparent"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-400 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button className="bg-cyan-500 dark:bg-cyan-600 text-white rounded-md px-4 py-2 hover:bg-cyan-600 dark:hover:bg-cyan-700 transition">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={googleForm}
              className="flex items-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.5 0 48 48"
              >
                <title>Google-color</title>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-401.000000, -860.000000)">
                    <g transform="translate(401.000000, 860.000000)">
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        fill="#4285F4"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
          <div className="mt-4 text-sm flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mr-3 md:mr-0">
              If you don't have an account..
            </p>
            <button className="text-white bg-cyan-500 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-700 rounded-xl py-2 px-5 font-semibold transition duration-300 hover:scale-110">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
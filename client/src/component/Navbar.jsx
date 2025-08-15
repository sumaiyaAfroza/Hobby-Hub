// import React, { useState, useEffect } from "react";
// import { Link } from "react-router"; // use react-router-dom for Link
// // If you are using react-router v6+, use "react-router-dom"
 
// const Navbar = () => {
//   // Mock user data - replace with actual context or auth state
//   const [user, setUser] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   // Mock functions - replace with actual context logout
//   const logOut = () => {
//     setUser(null);
//     setMenuOpen(false);
//   };

//   const mockLogin = () => {
//     setUser({
//       uid: "123",
//       displayName: "John Doe",
//       photoURL:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//     });
//   };

//   useEffect(() => {
//     setMounted(true);

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   // Menu items with actual routes
//   const navItems = [
//     { label: "Home", to: "/" },
//     { label: "All Groups", to: "/groups" },
//   ];

//   if (user) {
//     navItems.push(
//       { label: "Create Group", to: "/createGroup" },
//       { label: "My Groups", to: `/myGroups/${user.uid}` }
//     );
//   }

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-black/90 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-amber-500/10"
//           : "bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-lg"
//       }`}
//     >
//       {/* Animated top border */}
//       <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo with Animation */}
//           <div
//             className={`transition-all duration-700 ease-out transform ${
//               mounted ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
//             }`}
//           >
//             <Link to="/" className="group flex items-center space-x-2">
//               <div className="relative">
//                 <div className="w-10 h-10 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-amber-500/30">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-yellow-300 group-hover:to-orange-300 transition-all duration-300">
//                 HobbyHub
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div
//             className={`hidden md:flex items-center space-x-8 transition-all duration-700 ease-out transform ${
//               mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
//             }`}
//             style={{ transitionDelay: "200ms" }}
//           >
//             {/* Navigation Links */}
//             <div className="flex items-center space-x-6">
//               {navItems.map(({ label, to }, index) => (
//                 <Link
//                   key={label}
//                   to={to}
//                   className="relative group px-3 py-2 text-gray-300 hover:text-amber-300 transition-all duration-300 transform hover:scale-105"
//                   style={{ transitionDelay: `${(index + 1) * 100}ms` }}
//                   onClick={closeMenu}
//                 >
//                   <span className="relative z-10">{label}</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 group-hover:w-full transition-all duration-300"></div>
//                 </Link>
//               ))}
//             </div>

//             {/* Theme Toggle Button Placeholder */}
//             <button className="p-2 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group">
//               <svg
//                 className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>

//             {/* User Section */}
//             {!user ? (
//               <Link
//                to="/login"
//               className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 focus:outline-none focus:ring-4 focus:ring-amber-500/30"
//               >
//                 Login / Register
//               </Link>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 {/* User Avatar */}
//                 <div className="relative group">
//                   <img
//                     src={user.photoURL}
//                     alt={user.displayName}
//                     className="w-10 h-10 rounded-full border-2 border-amber-500/50 group-hover:border-amber-400 transition-all duration-300 transform group-hover:scale-110 shadow-lg"
//                   />
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   {/* User tooltip */}
//                   <div className="absolute top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
//                     {user.displayName}
//                     <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-800 transform rotate-45"></div>
//                   </div>
//                 </div>

//                 {/* Logout Button */}
//                 <button
//                   onClick={logOut}
//                   className="bg-red-500/20 border border-red-500/50 text-red-300 hover:bg-red-500/30 hover:border-red-400 hover:text-red-200 px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/30"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div
//             className={`md:hidden transition-all duration-700 ease-out transform ${
//               mounted ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
//             }`}
//           >
//             <button
//               onClick={toggleMenu}
//               className="relative p-2 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group"
//               aria-label="Toggle menu"
//             >
//               <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
//                 <span
//                   className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 transform ${
//                     menuOpen ? "rotate-45 translate-y-1.5" : ""
//                   }`}
//                 ></span>
//                 <span
//                   className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
//                     menuOpen ? "opacity-0" : ""
//                   }`}
//                 ></span>
//                 <span
//                   className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 transform ${
//                     menuOpen ? "-rotate-45 -translate-y-1.5" : ""
//                   }`}
//                 ></span>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
//             menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="px-4 py-6 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl mt-4 border border-amber-500/20 shadow-2xl">
//             {/* Mobile Navigation Links */}
//             <div className="space-y-4">
//               {navItems.map(({ label, to }, index) => (
//                 <Link
//                   key={label}
//                   to={to}
//                   onClick={closeMenu}
//                   className={`block w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-amber-300 hover:bg-amber-500/10 transition-all duration-300 transform hover:translate-x-2 ${
//                     menuOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
//                   }`}
//                   style={{ transitionDelay: menuOpen ? `${index * 100}ms` : "0ms" }}
//                 >
//                   {label}
//                 </Link>
//               ))}

//               {/* Mobile User Section */}
//               {!user ? (
//                 <button
//                   onClick={() => {
//                     mockLogin();
//                     closeMenu();
//                   }}
//                   className={`w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
//                     menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
//                   }`}
//                   style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
//                 >
//                   Login / Register
//                 </button>
//               ) : (
//                 <div
//                   className={`border-t border-amber-500/20 pt-4 mt-4 transition-all duration-500 transform ${
//                     menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
//                   }`}
//                   style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
//                 >
//                   {/* Mobile User Info */}
//                   <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
//                     <img
//                       src={user.photoURL}
//                       alt={user.displayName}
//                       className="w-12 h-12 rounded-full border-2 border-amber-500/50"
//                     />
//                     <div>
//                       <p className="text-amber-200 font-medium">{user.displayName}</p>
//                       <p className="text-amber-400/70 text-sm">Welcome back!</p>
//                     </div>
//                   </div>

//                   {/* Mobile Logout */}
//                   <button
//                     onClick={() => {
//                       logOut();
//                       closeMenu();
//                     }}
//                     className="w-full mt-3 bg-red-500/20 border border-red-500/50 text-red-300 hover:bg-red-500/30 hover:border-red-400 hover:text-red-200 px-4 py-3 rounded-xl transition-all duration-300"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Background blur overlay when mobile menu is open */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10 md:hidden"
//           onClick={closeMenu}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;








import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import Theme from "../Context/Theme";
import { Menu, X, Users, Plus, Home, LogIn, LogOut, User } from "lucide-react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/30' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
              HobbyHub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" icon={<Home size={18} />}>
              Home
            </NavLink>
            <NavLink to="/groups" icon={<Users size={18} />}>
              All Groups
            </NavLink>

            {user && (
              <>
                <NavLink to="/createGroup" icon={<Plus size={18} />}>
                  Create Group
                </NavLink>
                <NavLink to={`/myGroups/${user.uid}`} icon={<User size={18} />}>
                  My Groups
                </NavLink>
              </>
            )}

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

            <Theme />

            {!user ? (
              <Link
                to="/login"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-purple-700"
              >
                <LogIn size={18} />
                <span>Login / Register</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            ) : (
              <div className="flex items-center space-x-3 ml-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="relative w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    title={user.displayName}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">
                    {user.displayName}
                  </span>
                  <button
                    onClick={logOut}
                    className="group text-xs text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 flex items-center gap-1 transition-colors duration-200"
                  >
                    <LogOut size={12} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-x-0 top-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/30 shadow-xl
        transition-all duration-300 transform
        ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col space-y-3">
            <MobileNavLink to="/" onClick={toggleMenu} icon={<Home size={20} />}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/groups" onClick={toggleMenu} icon={<Users size={20} />}>
              All Groups
            </MobileNavLink>

            {user && (
              <>
                <MobileNavLink to="/createGroup" onClick={toggleMenu} icon={<Plus size={20} />}>
                  Create Group
                </MobileNavLink>
                <MobileNavLink to={`/myGroups/${user.uid}`} onClick={toggleMenu} icon={<User size={20} />}>
                  My Groups
                </MobileNavLink>
              </>
            )}

            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

            {!user ? (
              <Link
                to="/login"
                onClick={toggleMenu}
                className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:from-indigo-600 hover:to-purple-700"
              >
                <LogIn size={20} />
                Login / Register
              </Link>
            ) : (
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25"></div>
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="relative w-12 h-12 rounded-full border-2 border-white dark:border-gray-700 shadow-md"
                      title={user.displayName}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {user.displayName}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logOut();
                    toggleMenu();
                  }}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children, icon }) => (
  <Link
    to={to}
    className="group flex items-center gap-2 px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {icon}
      {children}
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ to, onClick, children, icon }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
  >
    {icon}
    {children}
  </Link>
);

export default Navbar;





// ===============================================================



// import React, { useContext, useState } from "react";
// import { Link } from "react-router"; // ✅ Correct import
// import { AuthContext } from "../Context/AuthProvider";
// import Theme from "../Context/Theme";


// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const [menuOpen, setMenuOpen] = useState(false);


//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         <Link
//           to="/"
//           className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
//         >
//           HobbyHub
//         </Link>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-3xl text-gray-800 dark:text-white"
//           >
//             {menuOpen ? "×" : "≡"}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/groups">All Groups</Link></li>

//           {user && (
//             <>
//               <li><Link to="/createGroup">Create Group</Link></li>
//               <li><Link to={`/myGroups/${user.uid}`}>My Groups</Link></li>
//             </>
//           )}

//           {!user && (
//             <li>
//               <Link
//                 to="/login"
//                 className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
//               >
//                 Login / Register
//               </Link>
//             </li>
//           )}

//           {user && (
//             <li className="flex items-center gap-3">
//               <img
//                 src={user.photoURL}
//                 alt="user"
//                 className="w-10 h-10 rounded-full border"
//                 title={user.displayName}
//               />
//               <button
//                 onClick={logOut}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600"
//               >
//                 Logout
//               </button>
//             </li>
//           )}

//          <Theme></Theme>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4">
//           <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200">
//             <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//             <li><Link to="/groups" onClick={toggleMenu}>All Groups</Link></li>

//             {user && (
//               <>
//                 <li><Link to="/createGroup" onClick={toggleMenu}>Create Group</Link></li>
//                 <li><Link to={`/myGroups/${user.uid}`} onClick={toggleMenu}>My Groups</Link></li>
//               </>
//             )}

//             {!user && (
//               <li>
//                 <Link
//                   to="/login"
//                   onClick={toggleMenu}
//                   className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
//                 >
//                   Login / Register
//                 </Link>
//               </li>
//             )}

//             {user && (
//               <li className="flex items-center gap-3">
//                 <img
//                   src={user.photoURL}
//                   alt="user"
//                   className="w-10 h-10 rounded-full border"
//                   title={user.displayName}
//                 />
//                 <button
//                   onClick={() => {
//                     logOut();
//                     toggleMenu();
//                   }}
//                   className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                 >
//                   Logout
//                 </button>
//               </li>
//             )}

//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
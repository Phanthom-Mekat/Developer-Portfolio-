import { Link, NavLink } from "react-router-dom";
import {   SiAegisauthenticator } from "react-icons/si";
import { useContext, useState } from "react";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { ThemeContext } from "@/provider/ThemeProvider";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
    const [hamburger, setHamburger] = useState(false);
    const isHome = location.pathname === "/";

    const activeClassName = "font-semibold text-primary border-b-2 border-primary transition-all duration-300 hover:text-primary-dark hover:border-primary-dark   " ;

    const inactiveClassName = "font-medium text-gray-600 dark:text-gray-300 border-b-2 border-transparent transition-all duration-300 hover:text-primary hover:border-primary";

    const links = (
        <>
            <li className="py-2">
                <NavLink
                    to="/" onClick={() => setHamburger(false)}
                    className={({ isActive }) =>
                        `px-3 py-2 relative group ${isActive ? activeClassName : inactiveClassName}`
                    }
                >
                    Home
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-11/12 mx-auto" />
                </NavLink>
            </li>
            <li className="py-2">
                <NavLink
                    to="/about" 
                    
                    onClick={() => setHamburger(false)}
                    className={({ isActive }) =>
                        `px-3 py-2 relative group ${isActive ? activeClassName : inactiveClassName}`
                    }
                >
                    About
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-11/12 mx-auto" />
                </NavLink>
            </li>
            <li className="py-2">
                <NavLink
                    to="/skills" onClick={() => setHamburger(false)}
                    className={({ isActive }) =>
                        `px-3 py-2 relative group ${isActive ? activeClassName : inactiveClassName}`
                    }
                >
                    Skills
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-11/12 mx-auto" />
                </NavLink>
            </li>
            <li className="py-2">
                <NavLink
                    to="/projects" onClick={() => setHamburger(false)}
                    className={({ isActive }) =>
                        `px-3 py-2 relative group ${isActive ? activeClassName : inactiveClassName}`
                    }
                >
                    Projects
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-11/12 mx-auto" />
                </NavLink>
            </li>
           

        </>
    );

    return (
        <nav className={isHome ? "bg-gray-100 sticky top-0 z-50 dark:bg-gray-900  " : undefined}>
            <div className="navbar sticky top-0 z-50  md:w-11/12 mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="lg:hidden">
                        <Hamburger
                            toggled={hamburger}
                            toggle={setHamburger}
                            className="text-primary"
                            color="#45b3fa"
                            rounded 
                            hideOutline={false} 
                        />
                    </div>
                    {/* Mobile Dropdown Menu */}
                    {hamburger && (
                        <div className="absolute top-[64px] left-0 w-full  bg-white dark:bg-gray-800  shadow-lg z-40 lg:hidden" data-aos="fade-down">
                            <ul className="menu menu-vertical p-4" data-aos="fade-up" data-aos-duration="2000" >
                                {links}
                            </ul>
                        </div>
                    )}

                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div> */}
                    <Link to="/" className="btn btn-ghost text-xl md:text-3xl  items-center headerfont">
                        <SiAegisauthenticator  size={24} className="text-green-500 bg-gradient-to-r inline-flex mr-1 from-primary/15 to-primary/30 rounded-md px-0 dark:text-secondary dark:bg-gradient-to-r dark:from-secondary/10 dark:to-secondary" />
                        <div>
                            <span className="inline dark:text-white ">JH.</span>
                            <span className="headerfont2 text-primary inline ml-0">Mekat</span>
                        </div>
                    </Link>



                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                        {links}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">

                    {/* <input type="checkbox" value="synthwave" onChange={toggleDarkMode} checked={isDarkMode} className="toggle mr-4 theme-controller" /> */}

                    <label className="grid cursor-pointer mr-4 place-items-center">
                        <input
                            type="checkbox"
                            value="synthwave" onChange={toggleDarkMode} checked={isDarkMode}
                            className="toggle theme-controller bg-base-content   col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                        <a 
                        href="./resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        download="resume.pdf"
                         className="">
                            <InteractiveHoverButton text="Resume" className='bg-secondary dark:bg-primary ' />
                        </a>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
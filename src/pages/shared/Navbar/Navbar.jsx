import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../components/Logo/Logo';

const Navbar = () => {

    const [theme, setTheme] = useState('light');

    const handleToggle = e => {
        const isChecked = e.target.checked
        const newTheme = isChecked ? 'dark' : 'light'
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        setTheme(isChecked);
    }

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme');
        if (saveTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark')
            setTheme(true)
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            setTheme(false)
        }
    }, [])

    const activeClass = ({ isActive }) => {
        isActive ? 'text-primary font-semibold' : 'text-base-content hover:text-primary'
    }

    const navLinks = <>
        <li><NavLink to='/' className={activeClass}>Home</NavLink></li>
        <li><NavLink to='/about' className={activeClass}>About</NavLink></li>
        <li><NavLink to='/projects' className={activeClass}>Projects</NavLink></li>
        <li><NavLink to='/contact' className={activeClass}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <Link to='/'><Logo></Logo></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-4">
                <input type="checkbox" className="toggle theme-controller" onChange={handleToggle} checked={theme} />
                <a href="https://drive.google.com/file/d/17-qhX8LB_bC3zcDGZgfyMsw5urBjjU32/view?usp=drive_link">
                    <button className='btn btn-primary'>Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
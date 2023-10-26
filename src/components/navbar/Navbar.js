import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// class name according to BEM => Block Element Modifier
const Menu = () => {
    return <>
        <p><a href='#Home'>Home</a></p >
        <p><a href='#What'>What is gpt3?</a></p>
        <p><a href='#Open'>Open AI</a></p>
        <p><a href='#Case'>Case Studies</a></p>
        <p><a href='#Library'>Library</a></p>
    </>
}

const Navbar = () => {
    const [menuToggler, setMenuToggler] = useState(false)
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const handleScroll = () => {
        if (window.scrollY > 400) {
            setNavbarBackground('colored');
        } else {
            setNavbarBackground('transparent');
        }
    };

    useEffect(() => window.addEventListener('scroll', handleScroll), []);
    return (
        <div className={`gpt3-navbar ${navbarBackground}`}>
            <div className='gpt3-navbar-content container'>

                <div className='gpt3-navbar-links'>
                    <div className='gpt3-navbar-links-logo'>
                        <img src={logo} alt='logn-img' />
                    </div>
                    <div className='gpt3-navbar-links-container'>
                        {menuToggler
                            ? ''
                            : <Menu />
                        }
                    </div>
                    <div className='gpt3-navbar-singing'>
                        <div className='gpt3-navbar-links-sing'>
                            <p className='Sing-in'><a href='#'>Sing In</a></p>
                            <p className='Sing-Up'><a href='#'>Sing Up</a></p>
                        </div>
                        <div className='gpt3-navbar-icons'>
                            {menuToggler
                                ? <RiCloseLine className='close' onClick={() => setMenuToggler(false)} />
                                : <RiMenu3Line className='menu' onClick={() => setMenuToggler(true)} />
                            }
                        </div>

                        {menuToggler && (
                            <div className='gpt3-navbar-links-menu-container'>
                                <div className='gpt3-navbar-links-menu-container-menu'>
                                    <Menu />
                                    <div className='gpt3-navbar-links-menu-sing'>
                                        <p className='Sing-in'><a href='#'>Sing In</a></p>
                                        <p className='Sing-Up'><a href='#'>Sing Up</a></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
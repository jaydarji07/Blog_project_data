// // import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <a className="navbar-brand ms-5" href="#">JD BLOG</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link to={'/'} className="nav-link active " aria-current="page" href="#">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to={'/service'} className="nav-link active " aria-current="page" href="#">Service</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to={'/about'} className="nav-link active " aria-current="page" href="#">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to={'/contact'} className="nav-link active " aria-current="page" href="#">Contact</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to={'/Index'} className="nav-link active " aria-current="page" href="#">Ad Blog</Link>
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Header

// new header 

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
    const location = useLocation();  // To track the current route
    const [navbarTransparent, setNavbarTransparent] = useState(true);

    // Function to handle scrolling and toggle navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarTransparent(false);
            } else {
                setNavbarTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${navbarTransparent ? 'navbar-transparent' : 'navbar-colored'} fixed-top`}>
                <div className="container-fluid">
                    {/* Animated Brand Logo */}
                    <Link className="navbar-brand ms-5 brand-logo" to="/">
                        JD BLOG
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`} aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/service'} className={`nav-link ${location.pathname === '/service' ? 'active-link' : ''}`} aria-current="page">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`} aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`} aria-current="page">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Index'} className={`nav-link ${location.pathname === '/Index' ? 'active-link' : ''}`} aria-current="page">Add Blog</Link>
                            </li>
                        </ul>

                        {/* Optional Search Bar */}
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search Blog" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;

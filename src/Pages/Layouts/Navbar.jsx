import { Link, Outlet, useLocation } from "react-router-dom";
import React from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
    const location = useLocation()

    const toggleMobileNav = function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        document.querySelector('.navbar-burger')?.classList.toggle('is-active');
        document.querySelector('.navbar-menu')?.classList.toggle('is-active');
    }
    const unToggleMobileNav = () => {
        document.querySelector('.navbar-burger')?.classList.remove('is-active');
        document.querySelector('.navbar-menu')?.classList.remove('is-active');
    }
    //check for changes in the variable
    React.useEffect(() => {
        if (location) {
            console.log("loaded")
            if (document.querySelector('a')) {
                //remove any active class present in any element
                document.querySelectorAll('a').forEach(elem => {
                    elem.classList.remove('navbar-item-active')
                })
                const elem = (location.pathname && !location.search) ? document.querySelector(
                    `a[href="${location.pathname}"]`
                ) : document.querySelector(
                    `a[href="${window.location.origin + location.pathname + location.search}"]`
                );
                if (elem && !elem.classList.contains('button')) {
                    elem.classList.add('navbar-item-active')
                }
            }
        }
    }, [location])

    // 👇️ scroll to top on page change
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnHover
                draggable
                theme="colored"
            />
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="./">
                        <img src="/nav-blue.png" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="NavContent" onClick={(event) => toggleMobileNav(event)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="NavContent" className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/home" className="navbar-item" onClick={unToggleMobileNav}>
                            Home
                        </Link>
                        <div className="navbar-item">
                            <a href="/quote" className="button is-rounded btn-nav">
                                Get A Quote
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [flag, setflag] = useState("")
    const [toogle, setToogle] = useState(false)

    useEffect(() => {
        if (window.location.pathname === "/") {
            setflag("/")
        }
        if (window.location.pathname === "/about") {
            setflag("/about")
        }
        if (window.location.pathname === "/classes") {
            setflag("/classes")
        }
        if (window.location.pathname === "/pages") {
            setflag("/pages")
        }
        if (window.location.pathname === "/contact") {
            setflag("/contact")
        }

    }, [])

    const handleToogle = () => {
        setToogle(!toogle)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <Link href="/" passHref>
                <div className="navbar-brand">
                    <h1 className="m-0 text-primary">
                        <i className="fa fa-book-reader me-3"></i>Shivam Vidhyalay
                    </h1>
                </div>
            </Link>
            <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                onClick={handleToogle}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${toogle ? "show" : ""}`} id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <Link href="/" passHref>
                        <div className={`nav-item nav-link ${flag == "/" ? "active" : ""}`} onClick={() => setflag("/")} legacyBehavior>
                            Home
                        </div>
                    </Link>
                    <Link href="/about" passHref>
                        <div className={`nav-item nav-link  ${flag == "/about" ? "active" : ""}`} onClick={() => setflag("/about")} legacyBehavior>
                            About Us
                        </div>
                    </Link>
                    <Link href="/classes" passHref>
                        <div className={`nav-item nav-link  ${flag == "/classes" ? "active" : ""}`} onClick={() => setflag("/classes")} legacyBehavior>
                            Classes
                        </div>
                    </Link>
                    <div className="nav-item dropdown">
                        <Link href="/pages" passHref className={`${flag == "/pages" ? "active" : ""}`} onClick={() => setflag("/pages")}>
                            <div
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                legacyBehavior
                            >
                                Pages
                            </div>
                        </Link>
                        <div
                            className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0"
                            aria-labelledby="navbarDropdown"
                        >
                            <Link href="/facility" passHref>
                                <div className="dropdown-item" legacyBehavior>
                                    School Facilities
                                </div>
                            </Link>
                            <Link href="/team" passHref>
                                <div className="dropdown-item" legacyBehavior>
                                    Popular Teachers
                                </div>
                            </Link>
                            <Link href="/call-to-action" passHref>
                                <div className="dropdown-item" legacyBehavior>
                                    Get Admission Today
                                </div>
                            </Link>
                            <Link href="/appointment" passHref>
                                <div className="dropdown-item" legacyBehavior>
                                    Make Appointment
                                </div>
                            </Link>
                            <Link href="/testimonial" passHref>
                                <div className="dropdown-item" legacyBehavior>
                                    Testimonial
                                </div>
                            </Link>
                            <Link href="/404" passHref>
                                <div className="dropdown-item" legacyBehavior>
                                    404 Error
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Link href="/contact" passHref>
                        <div className={`nav-item nav-link  ${flag == "/contact" ? "active" : ""}`} onClick={() => setflag("/contact")} legacyBehavior>
                            Contact Us
                        </div>
                    </Link>
                </div>
                <Link href="/" passHref>
                    <button className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
                        Join Us<i className="fa fa-arrow-right ms-3"></i>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
